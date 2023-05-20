import { FiWind } from "react-icons/fi";
import weatherCodes from "@/components/WeatherCodeTable";

interface Props {
  temp: number;
  wind: number;
  weathercode: number;
}

export default function CurrentTemp({ temp, wind, weathercode }: Props) {
  return (
    <div className="w-full h-max pt-8 pb-8 flex flex-col items-center ">
      <h2 className="text-[72px] text-center font-roboto font-semibold  text-white">
        {temp.toFixed(0)}°C
      </h2>
      <span className="text-color2 font-bold hidden display1:block text-xl text-center mb-2">
        {weatherCodes[weathercode]}
      </span>
      <div className="w-max flex pl-4 pr-4 pt-2 pb-2 display1:backdrop-blur-xl rounded-full items-center space-x-2 justify-center">
        <FiWind className="text-color2" size={20} />
        <span className="text-color2 block text-base text-sans font-medium">
          Ventando {wind} km/h
        </span>
      </div>
    </div>
  );
}
