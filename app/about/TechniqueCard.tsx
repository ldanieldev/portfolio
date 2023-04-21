import { IconType } from 'react-icons/lib'

interface props {
  title: string
  text: string
  icon: IconType
}

export default function TechniqueCard(props: props) {
  return (
    <div className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl bg-gray-800">
      <div className="inline-block p-3 fill-white rounded-full text-white bg-blue-500">
        <props.icon size={32} />
      </div>

      <h1 className="text-xl font-semibold  capitalize text-white">
        {props.title}
      </h1>

      <p className="text-gray-300">{props.text}</p>
    </div>
  )
}
