import Input from "./Input";
import CurrentTemp from "./CurrentTemp";
import NextDays from "./NextDays";

interface Props {
  temp: number;
  date: string;
  wind: number;
  weathercode: number;
  forecast: {
    timestamp: number[];
    tempMax: number[];
    tempMin: number[];
    weathercode: number[];
  };
  handleWeatherData: (latitude: number, longitude: number) => void;
}

export default function Sidebar({
  handleWeatherData,
  temp,
  wind,
  forecast,
  weathercode,
}: Props) {
  return (
    <div className="w-[350px] h-screen display1:overflow-y-auto pb-10 display1:w-full display1:backdrop-blur-none display1:pl-8 display1:pr-8 sticky display1:fixed pt-10 display1:pt-4 bg-[#0000003a] backdrop-blur-xl right-0 pl-12 space-y-4 pr-12">
      <div className="w-full flex flex-col items-center">
        <Input handleWeatherData={handleWeatherData} />
        <CurrentTemp weathercode={weathercode} temp={temp} wind={wind} />
      </div>
      <hr className="block min-w-[260px] m-auto border-[1px] display1:max-w-[500px] border-line"></hr>
      <NextDays forecast={forecast} />
    </div>
  );
}
