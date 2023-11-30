export default function Loading() {
  return (
    <div className="container mx-auto mb-16">
      <div className="skeleton h-20 w-2/3 my-16 mx-auto" />

      <div className="lg:flex flex-row justify-around">
        <div className="carousel w-full space-x-4 bg-neutral rounded-box drop-shadow-lg lg:w-[700px] lg:h-[700px]">
          <div className="carousel-item relative w-full">
            <div className="skeleton w-full rounded-md" />
          </div>
        </div>

        <div className="my-12 lg:mt-0 lg:w-1/2 lg:ml-4 ">
          <section className="mb-12">
            <h3 className="text-2xl font-bold">Project Description</h3>
            <hr className="mb-4" />
            <p className="pl-4 leading-loose">
              <div className="skeleton h-4 w-full" />
            </p>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold">Project Details</h3>
            <hr className="mb-4" />

            <div className="skeleton h-4 w-full mb-2" />
            <div className="skeleton h-4 w-full mb-2" />
            <div className="skeleton h-4 w-full mb-2" />
            <div className="skeleton h-4 w-full mb-2" />
            <div className="skeleton h-4 w-full" />
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold">Tech Stack</h3>
            <hr className="mb-4" />

            <div className="skeleton h-4 w-full mb-2" />
            <div className="skeleton h-4 w-full mb-2" />
            <div className="skeleton h-4 w-full" />
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold">Links</h3>
            <hr className="mb-4" />

            <div className="skeleton h-4 w-full" />
          </section>
        </div>
      </div>
    </div>
  )
}
