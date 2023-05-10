import { FiWind } from 'react-icons/fi'

interface Props {
  temp: number,
  wind: number
}

export default function CurrentTemp({ temp, wind }: Props) {

  return (
    <div className="w-full h-max pt-8 pb-8 flex flex-col justify-content-center ">
      <h2 className="text-[72px] text-center font-roboto font-semibold  text-white">{(temp.toFixed(0))}°C</h2>
      <div className="w-full flex items-center space-x-2 justify-center">
        <FiWind className="text-color2" size={20} />
        <span className="text-color2 text-[20px] text-sans font-medium">Ventando {wind} km/h</span>
      </div>
    </div>
  )
}