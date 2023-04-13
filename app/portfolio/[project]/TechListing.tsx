import { HexColor } from '@/app/types/HexColor'
import { IconType } from 'react-icons/lib'

export default function TechListing(props: {
  label: string
  technologies: {
    name: string
    icon: IconType
    color: HexColor
  }[]
}) {
  return (
    <ul className="mb-6 flex flex-row items-start">
      <li className="pl-4 font-bold self-center">{props.label}</li>
      {props.technologies.map((technology, idx) => (
        <li key={idx} className="pl-4">
          <div
            className="tooltip tooltip-primary font-bold"
            data-tip={technology.name}
          >
            <technology.icon size={28} fill={technology.color} />
          </div>
        </li>
      ))}
    </ul>
  )
}
