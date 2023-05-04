import TempIcon from "./TempIcon"

export default function MiniCard() {
  return (
    <div className="w-max p-4 pt-2 pb-1 flex flex-col space-y-1 items-center rounded-lg bg-[#0000002a] backdrop-blur-xl">
      <span className="font-medium text-white font-sans ">09:00</span>
      <hr className="w-full block mb-2 border-line"/>
      <div className="w-max h-max pt-2 ">
        <TempIcon />
      </div>
      <span className="text-white font-bold  font-sans text-[26px]">8°</span>
    </div>
  )
}