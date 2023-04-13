'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { BsFillEnvelopeAtFill } from 'react-icons/bs'
import { FaIdCard, FaLinkedin } from 'react-icons/fa'
import { Person, WithContext } from 'schema-dts'
import Typed from 'typed.js'
import AboutSvg from '../public/img/home/about.svg'
import HeroSvg from '../public/img/home/hero.svg'
import PortfolioSvg from '../public/img/home/portfolio.svg'
import portrait from '../public/img/le-andris-daniel.png'
import { Meta } from './data'
import './page.css'

export default function Home() {
  const jsonLd: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Le-Andris Daniel',
    alternateName: 'Lee Daniel',
    description: 'JavaScript Web Developer',
    email: Meta.email,
    image: Meta.url + portrait.src,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Saint Peters',
      addressRegion: 'MO',
      postalCode: '63373',
    },
    birthPlace: 'Saint Kitts',
    gender: 'male',
    nationality: 'American/Kittitian',
    url: Meta.url,
    sameAs: [
      'https://www.linkedin.com/in/ldaniel38/',
      'https://github.com/ldanieldev',
    ],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Lindenwood University',
        sameAs: 'https://www.lindenwood.edu/',
      },
    ],
  }

  const TypedElement = useRef(null)

  useEffect(() => {
    if (!TypedElement.current) {
      return
    }

    const typed = new Typed(TypedElement.current, {
      stringsElement: '.typed-strings',
      typeSpeed: 100,
      backDelay: 1000,
      loop: true,
      contentType: 'html',
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div
        className="hero bg-base-200 gradientBg"
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        <div className="hero-content text-center relative z-10">
          <div className="max-w-md">
            <h1 className="text-xl md:text-4xl font-bold text-white mb-4">
              Hello I&apos;m <br />
              <div className="typed-wrapper">
                <div className="typed-strings hidden">
                  <p>Le-Andris Daniel</p>
                  <p>Professional</p>
                  <p>Reliable</p>
                </div>
                <span
                  ref={TypedElement}
                  className="text-primary uppercase font-bold"
                >
                  Le-Andris Daniel
                </span>
              </div>
            </h1>
            <HeroSvg
              className="mx-auto w-1/2 lg:w-auto"
              alt="programmer illustration"
            />
            <h2 className="py-6 text-white text-xl border-t-2">
              Javascript Web Application Developer
            </h2>

            <div className="flex flex-row justify-around">
              <Link href={`mailto:${Meta.email}`} title="Contact Me">
                <BsFillEnvelopeAtFill
                  className="text-white hover:text-secondary"
                  size={36}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ldaniel38/"
                target="_blank"
                title="View My LinkedIn Profile"
              >
                <FaLinkedin
                  className="text-white hover:text-secondary"
                  size={36}
                />
              </Link>
              <Link
                href="/Le-Andris-Daniel-Resume.pdf"
                target="_blank"
                title="View My Resume"
              >
                <FaIdCard
                  className="text-white hover:text-secondary"
                  size={36}
                />
              </Link>
            </div>
            <p className="py-6 text-white text-lg">
              I am a web developer with a passion for building web applications.
              I love to learn new technologies, and I love learning new
              technologies.
            </p>

            <div className="xl:hidden flex flex-row justify-around">
              <Link href="/about">
                <button className="btn btn-primary">Get to know me</button>
              </Link>
              <Link href="/portfolio">
                <button className="btn btn-primary">View my Portfolio</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="z-0 text-white hidden xl:flex px-5 max-w-screen-2xl imgCardContainer absolute animate-bounce mx-auto top-1/3 right-0 left-0 flex-row justify-between">
          <div className="card w-96 glass -skew-y-6 center cursor-pointer opacity-60 hover:opacity-100 hover:shadow-2xl hover:shadow-base-400">
            <Link href="/about">
              <figure className="px-10 pt-10">
                <AboutSvg width={350} height={250} alt="about illustration" />
              </figure>
              <div className="card-body mx-auto">
                <h2 className="card-title block text-center">About</h2>
                <p>
                  Learn more about my skills and experience that I&apos;m
                  confident will bring invaluable benefits to your business.
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-secondary text-white">
                    Get to know me
                  </button>
                </div>
              </div>
            </Link>
          </div>

          <div className="card w-96 glass skew-y-6 cursor-pointer opacity-60 hover:opacity-100 hover:shadow-2xl hover:shadow-base-400">
            <Link href="/portfolio">
              <figure className="px-10 pt-10">
                <PortfolioSvg
                  className="w-auto"
                  width={350}
                  height={250}
                  alt="portfolio illustration"
                />
              </figure>
              <div className="card-body mx-auto">
                <h2 className="card-title block text-center">Portfolio</h2>
                <p>
                  View my portfolio, to see some of the projects I&apos;ve
                  designed and developed.
                </p>
                <div className="card-actions justify-center">
                  <button className="btn btn-secondary text-white">
                    View my Portfolio
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
