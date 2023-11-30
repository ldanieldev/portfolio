import { ProjectCategory } from '@/types'

type props = {
  categories: ProjectCategory[]
  activeKey: string
  onClickHandler: (category: ProjectCategory) => void
}

export default function CategorySelector({
  categories,
  activeKey,
  onClickHandler,
}: props) {
  return (
    <div className="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center">
      {categories.map((category, idx) => (
        <button
          key={idx}
          className={`h-12 px-8 py-2 -mb-px text-sm text-center  bg-transparent whitespace-nowrap border-b-2 sm:text-base focus:outline-none hover:border-gray-400 ${
            activeKey === category.key
              ? 'text-blue-600 bg-transparent border-blue-500'
              : 'text-gray-700 border-gray-700'
          }`}
          onClick={() => onClickHandler(category)}
        >
          {category.title}
        </button>
      ))}
    </div>
  )
}
