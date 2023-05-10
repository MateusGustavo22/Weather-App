import { BsFillSunFill, BsFillMoonStarsFill, BsFillCloudsFill, BsFillCloudRainHeavyFill, BsSnow, BsCloudLightningRainFill } from 'react-icons/bs'

interface Props {
  weathercode: number,
  timestamp: number
}

export default function TempIcon({ weathercode, timestamp }: Props) {

  const date = new Date()
  const hourNumber = date.getHours()

  let weatherIcon

  switch (weathercode) {
    case 0:
      weatherIcon = hourNumber < 5 || hourNumber >= 17 ? <BsFillMoonStarsFill color='white' size={26} /> : <BsFillSunFill color='#FFF100' size={26} />
      break;
      break;
    case 1:
    case 2:
    case 3:
      weatherIcon = <BsFillCloudsFill color='white' size={26} />;
      break;
    case 51:
    case 53:
    case 55:
    case 61:
    case 63:
    case 65:
    case 80:
    case 81:
    case 82:
      weatherIcon = <BsFillCloudRainHeavyFill color='white' size={26} />;
      break;
    case 45:
    case 48:
    case 56:
    case 57:
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
    case 96:
    case 99:
      weatherIcon = <BsSnow color='white' size={26} />
      break;
    case 95:
    case 96:
    case 99:
      weatherIcon = <BsCloudLightningRainFill color='white' size={26} />
      break;
    default:
      // código para caso padrão
      break;
  }

  return (
    <div className="w-[50px] h-[50px] rounded-lg flex items-center justify-center bg-[#ffffff54]">
      {weatherIcon}
    </div>
  )
}