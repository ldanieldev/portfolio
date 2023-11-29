import Link from 'next/link'

type props = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  buttonText: string
  title: string
  body: string
  url: string
  mirrored?: boolean
}

export default function AnimatedCard({
  Icon,
  body,
  title,
  buttonText,
  url,
  mirrored,
}: props) {
  return (
    <div
      className={`card w-96 glass cursor-pointer opacity-60 hover:opacity-100 hover:shadow-2xl hover:shadow-base-400 ${
        mirrored ? '-' : ''
      }skew-y-6`}
    >
      <Link href={url}>
        <figure className="px-10 pt-10">
          <Icon width={350} height={250} />
        </figure>
        <div className="card-body mx-auto">
          <h2 className="card-title block text-center">{title}</h2>
          <p className="text-center">{body}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-secondary text-white">
              {buttonText}
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}
