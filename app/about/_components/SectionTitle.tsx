type props = {
  text: string
}
export default function SectionTitle({ text }: props) {
  return (
    <>
      <h2 className="text-blue-500 text-2xl font-semibold text-center capitalize lg:text-3xl">
        {text}
      </h2>

      <hr className="mx-auto my-8 w-3/4 border-slate-400" />
    </>
  )
}
