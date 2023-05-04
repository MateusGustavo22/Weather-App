import TempIcon from "./TempIcon"

export default function NextDayCard() {
  return (
    <div className="max-w-[310px] w-full h-max flex flex-row items-center">
      <div className="w-full h-max flex flex-row items-center ">
        <div className="w-max h-max">
          <TempIcon />
        </div>
        <div className="w-full h-max ml-2 flex flex-col">
          <span className="text-white text-[20px] text-sans font-medium">Sexta, 20 abril</span>
          <span className="text-color2 text-base text-sans font-medium">Muita chuva</span>
        </div>
      </div>
      <div className="w-max h-max flex flex-col items-center pl-2 border-line border-l-2">
        <span className="text-white text-base font-medium">9°</span>
        <span  className="text-white text-base font-medium">16°</span>
      </div>
    </div>
  )
}