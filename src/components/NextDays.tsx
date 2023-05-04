import NextDayCard from "./NextDayCard"

export default function NextDays() {
  return (
    <div className="w-full h-max p-1 flex flex-col space-y-8 items-center">
      <span className="font-bold text-color2 text-[20px] text-sans">Previsões dos proximos dias</span>
      <div className="w-full flex flex-row justify-center space-x-4 items-center">
        <button className="bg-[#ffffff34] text-white rounded-md text-sans font-semibold pt-1 pb-1 pl-3 pr-3">7 dias</button>
        <button className="bg-[#ffffff34] text-white rounded-md text-sans font-semibold pt-1 pb-1 pl-3 pr-3">15 dias</button>
        <button className="bg-[#ffffff34] text-white rounded-md text-fonts font-semibold pt-1 pb-1 pl-3 pr-3">30 dias</button>
      </div>
      <div className="w-full h-max flex flex-col space-y-6 mt-8 mb-4">
        <NextDayCard />
        <NextDayCard />
        <NextDayCard />
        <NextDayCard />
        <NextDayCard />
      </div>
    </div>  
  )
}