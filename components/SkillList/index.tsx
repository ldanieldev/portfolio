import { IconType } from 'react-icons/lib'
import GridItem from './ListItem'

type props = {
  title: string
  skillList: {
    [skill: string]: {
      name: string
      icon: IconType
      color: string
    }
  }
}

export default function SkillList({ title, skillList }: props) {
  return (
    <div>
      <h3 className="mt-6 text-lg font-semibold">{title}</h3>
      <hr className="my-6 w-3/4" />
      <ul className="flex flex-row flex-wrap">
        {Object.values(skillList).map((skill, idx) => (
          <GridItem
            key={idx}
            name={skill.name}
            Icon={skill.icon}
            color={skill.color}
          />
        ))}
      </ul>
    </div>
  )
}
