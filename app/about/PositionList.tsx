interface props {
  position: {
    date: string
    duties: string[]
    title: string
  }
}

export default function PositionList(props: props) {
  const {
    position: { date, title, duties },
  } = props

  return (
    <ul className="mt-2 ml-4">
      <li className="flex justify-between mb-4">
        <h4 className="font-bold">{title}</h4>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
          {date}
        </time>
      </li>
      <li>
        <ul className="list-disc mt-2 ml-7">
          {duties.map((duty, index) => (
            <li key={index} className="mb-4">
              {duty}
            </li>
          ))}
        </ul>
      </li>
    </ul>
  )
}
