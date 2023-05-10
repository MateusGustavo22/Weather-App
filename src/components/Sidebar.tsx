import Input from "./Input"
import CurrentTemp from "./CurrentTemp"
import NextDays from "./NextDays"

interface Props {
  temp: number,
  date: string,
  wind: number,
  forecast: {
    timestamp: number[],
    tempMax: number[],
    tempMin: number[],
    weathercode: number[]
  },
  handleWeatherData: (latitude: number, longitude: number) => void
}

export default function Sidebar({ handleWeatherData, temp, wind, forecast }: Props) {
  return (
    <div className="min-w-[360px] sticky h-screen pt-10 bg-[#0000003a] backdrop-blur-xl right-0 pl-12 space-y-4 pr-12">
      <div className="w-full flex flex-col items-center">
        <Input handleWeatherData={handleWeatherData} />
        <CurrentTemp temp={temp} wind={wind} />
      </div>
      <hr className="w-full border-1  border-line"></hr>
      <NextDays forecast={forecast} />
    </div>
  )
}