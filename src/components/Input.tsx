import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

export default function Input() {
  return (
    <div className="max-w-[250px] w-full h-max bg-trasparent border-2 rounded-lg border-white flex flex-row pl-3 pr-3 pt-1 pb-1 items-center">
      <FaMapMarkerAlt color='white' size={20} />
      <input className="max-w-[190px] w-full bg-transparent pl-2 outline-none text-white font-semibold placeholder:text-white" type='text' placeholder='New York' />
      <IoIosArrowDown  color='white' size={20} />
    </div>
  )
}