import { IconType } from 'react-icons/lib'
import { HexColor } from '../types/HexColor'
import SkillListItem from './SkillListItem'

interface props {
  title: string
  skillList: {
    [skill: string]: {
      name: string
      icon: IconType
      color: HexColor
    }
  }
}

export default function SkillList(props: props) {
  return (
    <div>
      <h3 className="mt-6 text-lg font-semibold">{props.title}</h3>
      <hr className="my-6 w-3/4" />
      <ul className="flex flex-row flex-wrap">
        {Object.values(props.skillList).map((skill, idx) => (
          <SkillListItem
            key={idx}
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
          />
        ))}
      </ul>
    </div>
  )
}
