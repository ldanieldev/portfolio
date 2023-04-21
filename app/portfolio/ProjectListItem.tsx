import Link from 'next/link'

export default function ProjectListItem(props: {
  slug: string
  title: string
  summary: string
}) {
  const { slug, title, summary } = props

  return (
    <Link href={'/portfolio/' + slug}>
      <div
        className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
        style={{
          backgroundImage: `url('/img/portfolio/${slug}/thumbnail.jpg')`,
        }}
      >
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">
            {summary}
          </h2>
          <p className="mt-2 text-lg tracking-wider text-blue-400 capitalize">
            {title}
          </p>
        </div>
      </div>
    </Link>
  )
}
