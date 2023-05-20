import MiniCard from "./MiniCard";

interface Props {
  forecastNextHours: {
    timestamp: number[];
    temp: number[];
    weathercode: number[];
  };
}

export default function NextHours({ forecastNextHours }: Props) {
  const Next8hours = [];
  for (let i = 0; i < 8; i++) {
    Next8hours.push({
      temp: forecastNextHours.temp[i],
      timestamp: forecastNextHours.timestamp[i],
      weathercode: forecastNextHours.weathercode[i],
    });
  }

  return (
    <>
      {Next8hours.map((item) => (
        <MiniCard
          key={item.timestamp}
          temp={item.temp}
          timestamp={item.timestamp}
          weathercode={item.weathercode}
        />
      ))}
    </>
  );
}
