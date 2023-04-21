import { IconType } from 'react-icons/lib'
import { HexColor } from '../types/HexColor'

interface props {
  name: string
  icon: IconType
  color: HexColor
}

export default function SkillListItem(props: props) {
  return (
    <li className="skills-item mb-4 grow basis-1/2 sm:basis-1/3">
      <props.icon className="inline mr-2" size={28} fill={props.color} />
      <span className="skills-name font-semibold">{props.name}</span>
    </li>
  )
}
