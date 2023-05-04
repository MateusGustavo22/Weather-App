import Sidebar from "@/components/Sidebar"
import TempIcon from "@/components/TempIcon" 
import MiniCard from "@/components/MiniCard"

export default function Home() {
  return (
      <div className="w-full h-full flex flex-row">
        <div className="w-full h-full  flex flex-col place-content-between pt-8 pb-8 pl-12 pr-12">
          <span className="text-white font-medium text-[26px] block text-right">21 Abril 2023 | 11:00 </span>
          <div className="w-full h-max  p-2 space-y-8">
            <span className="font-bold text-white font-sans text-[76px] block text-right">Ceu limpo</span>
            <div className="w-full border-[1px] border-line"></div>
            <div className="w-full h-max flex space-x-2 justify-end">
              <MiniCard />
              <MiniCard />
              <MiniCard />
              <MiniCard />
              <MiniCard />
              <MiniCard />
              <MiniCard />
              <MiniCard />
              <MiniCard />
              <MiniCard />
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
  )
}
