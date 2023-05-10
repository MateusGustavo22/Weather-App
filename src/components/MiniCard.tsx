import TempIcon from "./TempIcon"

interface Props {
  temp: number,
  timestamp: number,
  weathercode: number
}

export default function MiniCard({ temp, timestamp, weathercode }: Props) {

  function getNextHours(timestamp: number) {
    const date = new Date(timestamp)
    const hour = date.getHours()
    const minutes = date.getMinutes() < 10 ? 0 + date.getMinutes() : date.getMinutes()
    return hour + ':' + minutes
  }

  const date = new Date(timestamp * 1000)
  const hour = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return (
    <div className="w-[82px] p-4 pt-2 pb-1 flex flex-col space-y-1 items-center rounded-lg bg-[#0000002a] backdrop-blur-xl">
      <span className="font-medium text-white font-sans ">{hour}:{minutes}</span>
      <hr className="w-full block mb-2 border-line" />
      <div className="w-max h-max pt-2 ">
        <TempIcon timestamp={timestamp} weathercode={weathercode} />
      </div>
      <span className="text-white font-bold  font-sans text-[26px]">{temp.toFixed(0)}°</span>
    </div>
  )
}