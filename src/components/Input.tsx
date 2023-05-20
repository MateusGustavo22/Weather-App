import { BsSearch } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";

interface Props {
  handleWeatherData: (latitude: number, longitude: number) => void;
}

interface City {
  name: string;
  admin1: string;
  latitude: number;
  longitude: number;
}

export default function Input({ handleWeatherData }: Props) {
  const [filterInputBox, setFilterInputBox] = useState<"none" | "flex">("none");
  const [inputText, setInputText] = useState<string | null>(null);
  const [filterResults, setFilterResults] = useState<City[] | null>(null);
  const inputBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputBoxRef.current &&
        !inputBoxRef.current.contains(event.target as Node)
      ) {
        setFilterInputBox("none");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputBoxRef]);

  async function searchCities(e: string) {
    try {
      const reponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${e}`
      );
      const data = await reponse.json();
      const cityNames = data.results.slice(0, 8).map((item: City) => ({
        name: item.name,
        admin1: item.admin1,
        latitude: item.latitude,
        longitude: item.longitude,
      }));
      setFilterResults(cityNames);
    } catch (error) {
      console.log("Erro ao buscar cidades: " + error);
    }
  }

  return (
    <div className="w-full">
      <div className="h-max bg-trasparent display1:border-2 display1:pt-4 display1:pb-4 border-[1px] mb-2 rounded-lg border-white flex flex-row pl-3 pr-3 pt-2 pb-2 items-center focus-within:backdrop-blur-lg">
        <BsSearch color="white" size={20} />
        <input
          onChange={(e) => {
            setInputText(e.target.value);
            searchCities(e.target.value);
            setFilterInputBox("flex");
          }}
          value={inputText ? inputText : ""}
          className="w-full bg-transparent pl-3 outline-none text-white font-semibold placeholder:text-white"
          type="text"
          placeholder="São Paulo"
        />
      </div>
      <div
        ref={inputBoxRef}
        style={{ display: filterInputBox }}
        className="max-w-[250px] w-full absolute z-50 flex flex-col border-white border-[1px] p-2 space-y-2 bg-[#181d25] backdrop-blur-xl  rounded-xl "
      >
        {filterResults
          ? filterResults.slice(0, 8).map((res) => (
              <div
                onClick={() => {
                  handleWeatherData(res.latitude, res.longitude);
                  setInputText(res.name);
                  setFilterInputBox("none");
                }}
                key={res.latitude}
                className="w-full flex cursor-pointer hover:bg-[#23293d] p-2 rounded-xl flex-col"
              >
                <span className="text-sans text-white">{res.name}</span>
                <span className="text-gray-400 text-sm">{res.admin1}</span>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
