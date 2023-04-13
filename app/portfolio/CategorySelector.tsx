export default function CategorySelector(props: {
  activeCategory: string
  onClickHandler: (category: string) => void
}) {
  const { activeCategory, onClickHandler } = props
  const categories = [
    ['All', 'all'],
    ['Websites', 'website'],
    ['E-Commerce', 'eCommerce'],
    ['Content Management Systems', 'cms'],
    ['Web Apps', 'webApp'],
  ]

  return (
    <div className="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center">
      {categories.map(([title, category], idx) => (
        <button
          key={idx}
          className={`h-12 px-8 py-2 -mb-px text-sm text-center  bg-transparent whitespace-nowrap border-b-2 sm:text-base focus:outline-none hover:border-gray-400 ${
            activeCategory === category
              ? 'text-blue-600 bg-transparent border-blue-500'
              : 'text-gray-700 border-gray-700'
          }`}
          onClick={() => onClickHandler(category)}
        >
          {title}
        </button>
      ))}
    </div>
  )
}
