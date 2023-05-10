import TempIcon from "./TempIcon"
import SecondsToDate from "./SecondsToDate"
import weatherCodes from "./WeatherCodeTable"

interface Props {
  timestamp: number,
  tempMax: number,
  tempMin: number,
  weathercode: number
}

export default function NextDayCard({ timestamp, tempMax, tempMin, weathercode }: Props) {
  return (
    <div className="w-full h-max flex flex-row items-center">
      <div className="w-full h-max flex flex-row items-center ">
        <div className="w-max h-max">
          <TempIcon timestamp={timestamp} weathercode={weathercode} />
        </div>
        <div className="w-full h-max ml-2 flex flex-col">
          <span className="text-white text-[20px] text-sans font-medium">{<SecondsToDate seconds={timestamp} />}</span>
          <span className="text-color2 text-base text-sans font-medium">{weatherCodes[weathercode]}</span>
        </div>
      </div>
      <div className="w-max h-max flex flex-col items-center pl-2 border-line border-l-2">
        <span className="text-white text-base font-medium">{(tempMax).toFixed(0)}°</span>
        <span className="text-white text-base font-medium">{(tempMin.toFixed(0))}°</span>
      </div>
    </div>
  )
}