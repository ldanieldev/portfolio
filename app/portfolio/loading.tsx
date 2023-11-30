export default function Loading() {
  return (
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
        Latest Work
      </h1>

      <div className="skeleton h-4 w-2/3 mt-4 mx-auto" />

      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        <div className="skeleton rounded-lg h-96" />
        <div className="skeleton rounded-lg h-96" />
        <div className="skeleton rounded-lg h-96" />
        <div className="skeleton rounded-lg h-96" />
        <div className="skeleton rounded-lg h-96" />
      </div>
    </div>
  )
}
