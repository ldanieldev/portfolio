type props = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  text: string
}

export default function Hobby({ Icon, title, text }: props) {
  return (
    <>
      <div className="mb-20">
        <Icon className="mx-auto" width={300} height={300} />
        <h3 className="text-center font-bold text-lg my-4">{title}</h3>
        <p className="text-lg">{text}</p>
      </div>
    </>
  )
}
