import Sidebar from "@/components/Sidebar"
import { motion } from 'framer-motion'
import { useState, useEffect } from "react"
import moment from 'moment';
import NexthHours from "@/components/NextHours";
import weatherCodes from "@/components/WeatherCodeTable";

interface WeatherData {
  temp: number;
  weathercode: number;
  wind: number;
  date: string;
  timestamp: number | null,
  forecast5days: {
    timestamp: number[],
    tempMax: number[],
    tempMin: number[],
    weathercode: number[]
  },
  forecastNextHours: {
    timestamp: number[],
    temp: number[],
    weathercode: number[]
  }
}

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

  const date = weatherData?.timestamp ? new Date(weatherData.timestamp * 1000) : null;
  const hourNumber = date?.getHours();
  const hour = String(hourNumber).padStart(2, '0');
  const minutes = date?.getMinutes().toString().padStart(2, '0');

  let backgroundImg: string | null

  switch (weatherData?.weathercode) {
    case 0:
      backgroundImg = hourNumber ? hourNumber < 5 || hourNumber >= 17 ? "url('/backgrounds/noite_limpa.png')" : "url('/backgrounds/dia_limpo.jpg')" : null
      break;
    case 1:
    case 2:
    case 3:
      backgroundImg = hourNumber ? hourNumber < 5 || hourNumber >= 17 ? "url('/backgrounds/noite_nublada.png')" : "url('/backgrounds/pouco_nublado.png')" : null
      break;
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      backgroundImg = "url('/backgrounds/garoa.png')"
      break;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      backgroundImg = "url('/backgrounds/chuva.png')"
      break;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      backgroundImg = hourNumber ? hourNumber < 5 || hourNumber >= 17 ? "url('/backgrounds/noite_neve.png')" : "url('/backgrounds/dia_neve.png')" : null
      break;
    case 95:
    case 96:
    case 99:
      backgroundImg = "url('/backgrounds/trovoada.png')";
      break;
    default:
      backgroundImg = "gray"
      break;
  }

  async function fetchApi(url: string) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data

    } catch (error) {
      console.log('Erro ao consultar a API: ' + console.log(error))
    }
  }

  const defaultDataUrl = 'https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.64&hourly=temperature_2m,weathercode&models=jma_seamless&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FSao_Paulo'

  async function getData(url1: string, url2: string) {
    const weatherDataApi = await fetchApi(url1)
    const weatherData24hours = await fetchApi(url2)

    function formatSeconds(timestamp: number): string {
      const date = moment.unix(timestamp);
      return date.format('DD MMMM  YYYY');
    }

    const tempData: WeatherData = {
      temp: weatherDataApi.current_weather.temperature,
      weathercode: weatherDataApi.current_weather.weathercode,
      wind: weatherDataApi.current_weather.windspeed,
      date: formatSeconds(weatherDataApi.current_weather.time),
      timestamp: weatherDataApi.current_weather.time,
      forecast5days: {
        timestamp: weatherDataApi.daily.time.map((item: number[]) => item),
        tempMax: weatherDataApi.daily.temperature_2m_max.map((item: number[]) => item),
        tempMin: weatherDataApi.daily.temperature_2m_min.map((item: number[]) => item),
        weathercode: weatherDataApi.daily.weathercode.map((item: number) => item)
      },
      forecastNextHours: {
        timestamp: weatherData24hours.hourly.time.map((item: number[]) => item),
        temp: weatherData24hours.hourly.temperature_2m.map((item: number[]) => item),
        weathercode: weatherData24hours.hourly.weathercode.map((item: number[]) => item)
      }
    };

    setWeatherData(tempData)

  }

  useEffect(() => {
    getData(defaultDataUrl, defaultDataUrl)
  }, [])

  function handleWeatherData(latitude: number, longitude: number,): void {
    const weatherData = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&models=jma_seamless&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timeformat=unixtime&timezone=auto`
    const weatherData24hoursData = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&models=jma_seamless&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timeformat=unixtime&forecast_days=1&timezone=auto`

    getData(weatherData, weatherData24hoursData)
  }

  return (
    <div style={backgroundImg ? { backgroundImage: backgroundImg } : { backgroundImage: '' }} className={` w-full h-full relative bg-center bg-no-repeat bg-cover flex flex-row `}>
      <div className="max-w-[1040px] h-screen m-auto p-2 w-full flex flex-col place-content-between pt-8 pb-8 pl-12 pr-12">
        <div className="w-full  justify-end items-center space-x-4 flex flex-row">
          <span className="text-white font-medium text-[26px] block text-right">{weatherData?.date}</span>
          <div className="w-[1px] h-[24px] bg-line"></div>
          <span className="text-white font-medium text-[26px]">{hour}:{minutes}</span>
        </div>
        <div className="w-full max-h-[350px] h-max p-2 space-y-8 ">
          <span className="font-bold text-white font-sans text-[76px] block text-right">{weatherData ? weatherCodes[weatherData.weathercode] : null}</span>
          <div className="w-full m-auto border-[0px] border-line "></div>
          <motion.div className="h-max flex space-x-2 justify-end">
            {weatherData?.forecastNextHours ? <NexthHours forecastNextHours={weatherData?.forecastNextHours} /> : null}
          </motion.div>
        </div>
      </div>
      {weatherData && (
        <Sidebar handleWeatherData={handleWeatherData} temp={weatherData.temp} date={weatherData.date} wind={weatherData.wind} forecast={weatherData.forecast5days} />
      )}
    </div>
  )
}
