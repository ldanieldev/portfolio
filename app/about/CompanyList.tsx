import { BsBuildingsFill } from 'react-icons/bs'
import PositionList from './PositionList'

interface props {
  company: {
    location: string
    name: string
    positions: {
      date: string
      duties: string[]
      title: string
    }[]
  }
}

export default function EmploymentHistoryList(props: props) {
  const { company } = props
  return (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-info rounded-full -left-3 ring-8 ring-base-100">
        <BsBuildingsFill className="text-secondary" size={16} />
      </span>
      <h3>
        <span className="text-lg font-bold">{company.name}</span>&nbsp;
        {company.location}
      </h3>
      {company.positions.map((position, idx) => (
        <PositionList key={idx} position={position} />
      ))}
    </li>
  )
}
