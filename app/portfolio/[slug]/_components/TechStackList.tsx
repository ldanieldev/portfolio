import { IconType } from 'react-icons/lib'

type props = {
  label: string
  technologies: {
    name: string
    icon: IconType
    color: string
  }[]
}

export default function TechStackList({ label, technologies }: props) {
  return (
    <ul className="mb-6 flex flex-row items-start">
      <li className="pl-4 font-bold self-center">{label}</li>
      {technologies.map((technology, idx) => (
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
