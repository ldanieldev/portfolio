export default function Hobby(props: {
  icon: React.ElementType
  title: string
  text: string
  altText: string
}) {
  return (
    <div className="mb-20">
      <props.icon
        className="mx-auto"
        width={300}
        height={300}
        alt={props.altText}
      />
      <h3 className="text-center font-bold text-lg my-4">{props.title}</h3>
      <p className="text-lg">{props.text}</p>
    </div>
  )
}
