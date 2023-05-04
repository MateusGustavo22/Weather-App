import Input from "./Input"
import CurrentTemp from "./CurrentTemp"
import NextDays from "./NextDays"

export default function Sidebar() {
  return (
    <div className="max-w-[400px] w-full pt-10 border-l-2 bg-[#9e9e9e34] backdrop-blur-xl right-0 pl-12 space-y-4 pr-12 border-line h-full">
      <div className="w-full flex flex-col items-center">
        <Input />
        <CurrentTemp />
      </div>
      <hr className="w-full border-1  border-line"></hr>
      <NextDays />
    </div>
  )
}