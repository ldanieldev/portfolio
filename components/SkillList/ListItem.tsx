import { IconType } from 'react-icons/lib'

type props = {
  name: string
  Icon: IconType
  color: string
}

export default function ListItem({ name, Icon, color }: props) {
  return (
    <li className="skills-item mb-4 grow basis-1/2 sm:basis-1/3">
      <Icon className="inline mr-2" size={28} fill={color} />
      <span className="skills-name font-semibold">{name}</span>
    </li>
  )
}
