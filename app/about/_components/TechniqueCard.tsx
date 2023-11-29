import { IconType } from 'react-icons/lib'

type props = {
  title: string
  text: string
  Icon: IconType
}

export default function TechniqueCard({ title, text, Icon }: props) {
  return (
    <div className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl bg-gray-800">
      <div className="inline-block p-3 fill-white rounded-full text-white bg-blue-500">
        <Icon size={32} />
      </div>

      <h1 className="text-xl font-semibold  capitalize text-white">{title}</h1>

      <p className="text-gray-300">{text}</p>
    </div>
  )
}
