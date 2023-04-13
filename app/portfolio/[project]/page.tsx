import { Meta, Projects } from '@/app/data'
import type Project from '@/app/interfaces/Project'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPlaiceholder } from 'plaiceholder'
import { FaCode, FaGithub, FaGlobe } from 'react-icons/fa'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { WebSite, WithContext } from 'schema-dts'
import LinkListItem from './LinkListItem'
import './page.css'
import TechListing from './TechListing'

export async function generateStaticParams() {
  return Projects.map((project: Project) => ({
    project: project.slug,
  }))
}

export default async function Project({
  params,
}: {
  params: { project: string; hash: string }
}) {
  const project: Project | undefined = Projects.filter(
    (project) => project.slug === params.project
  )[0]

  if (!project) {
    notFound()
  }

  const {
    slug,
    title,
    featureImg,
    projectDetails,
    description,
    liveUrl,
    demoUrl,
    codeUrl,
    frameworks,
    languages,
    tools,
    imageList,
  } = project

  const jsonLd: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: `${Meta.url}/portfolio/${slug}`,
    name: title,
    image: featureImg,
    description: description,
  }

  const formattedImgList = await Promise.all(
    imageList.map(async (image) => {
      const { base64, img } = await getPlaiceholder(
        `/img/portfolio/${slug}/${image}`,
        {
          size: 10,
        }
      )

      return {
        src: img.src,
        placeholder: base64,
      }
    })
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto mb-16">
        <h1 className="text-5xl underline text-center my-16 font-bold capitalize">
          {title}
        </h1>

        <div className="lg:flex flex-row justify-around">
          <div className="carousel w-full space-x-4 bg-neutral rounded-box drop-shadow-lg lg:w-[700px] lg:h-[700px]">
            {formattedImgList.map((img, idx, list) => (
              <div
                key={idx}
                id={'slide' + (idx + 1)}
                className="carousel-item relative w-full"
              >
                <Image
                  className="w-full rounded-md"
                  src={img.src}
                  alt={title}
                  width={700}
                  height={700}
                  placeholder="blur"
                  blurDataURL={img.placeholder}
                />

                {list.length > 1 && (
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href={'#slide' + (idx - 1 < 0 ? list.length : idx)}
                      className="btn btn-circle"
                    >
                      <SlArrowLeft />
                    </a>
                    <a
                      href={'#slide' + (idx + 2 > list.length ? '1' : idx + 2)}
                      className="btn btn-circle"
                    >
                      <SlArrowRight />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="my-12 lg:mt-0 lg:w-1/2 lg:ml-4 ">
            <section className="mb-12">
              <h3 className="text-2xl font-bold">Project Description</h3>
              <hr className="mb-4" />
              <p className="pl-4 leading-loose">{description}</p>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold">Project Details</h3>
              <hr className="mb-4" />
              <ul>
                {projectDetails.map((projectDetail, idx) => (
                  <li key={idx} className="pl-4 leading-loose">
                    <FaCode
                      className="inline mr-2 text-secondary mb-1"
                      size={16}
                    />
                    <span dangerouslySetInnerHTML={{ __html: projectDetail }} />
                  </li>
                ))}
              </ul>
            </section>

            {(languages || frameworks || tools) && (
              <section className="mb-12">
                <h3 className="text-2xl font-bold">Tech Stack</h3>
                <hr className="mb-4" />
                {languages && (
                  <TechListing
                    label="Coding Languages:"
                    technologies={languages}
                  />
                )}
                {frameworks && (
                  <TechListing
                    label="Frameworks / Libraries / CMSs:"
                    technologies={frameworks}
                  />
                )}
                {tools && (
                  <TechListing
                    label="Tools / Platforms:"
                    technologies={tools}
                  />
                )}
              </section>
            )}

            {(liveUrl || demoUrl || codeUrl) && (
              <section className="mb-12">
                <h3 className="text-2xl font-bold">Links</h3>
                <hr className="mb-4" />
                <ul className="flex flex-row">
                  {liveUrl && (
                    <LinkListItem
                      url={liveUrl}
                      linkText="Visit the Website"
                      icon={FaGlobe}
                    />
                  )}
                  {demoUrl && (
                    <LinkListItem
                      url={demoUrl}
                      linkText="View the Demo"
                      icon={FaGlobe}
                    />
                  )}
                  {codeUrl && (
                    <LinkListItem
                      url={codeUrl}
                      linkText="View the Demo"
                      icon={FaGithub}
                    />
                  )}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
