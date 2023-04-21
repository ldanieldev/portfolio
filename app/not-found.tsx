import { TbError404 } from 'react-icons/tb'

export default function NotFound() {
  return (
    <div className="p-12 h-full w-full">
      <TbError404 className="text-primary mx-auto mb-6" size={150} />

      <h1 className="text-4xl font-bold text-center">
        Oops, Unable to Locate That Page
      </h1>
    </div>
  )
}
