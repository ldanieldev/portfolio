import { Meta } from '@/app/data'
import AnimatedCard from '@/components/AnimatedCard'
import SocialIconLink from '@/components/SocialIconLink'
import TypedWrapper from '@/components/TypedWrapper'
import AboutSvg from '@/public/img/home/about.svg'
import HeroSvg from '@/public/img/home/hero.svg'
import PortfolioSvg from '@/public/img/home/portfolio.svg'
import portrait from '@/public/img/le-andris-daniel.png'
import Link from 'next/link'
import { BsFillEnvelopeAtFill } from 'react-icons/bs'
import { FaIdCard, FaLinkedin } from 'react-icons/fa'
import { Person, WithContext } from 'schema-dts'

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div
        className="hero bg-base-200"
        style={{
          minHeight: 'calc(100vh - 64px)',
          backgroundImage: 'linear-gradient(to top, #a3bded 0%, #6991c7 100%)',
        }}
      >
        <div className="hero-content text-center relative z-10">
          <div className="max-w-md">
            <h1 className="text-xl md:text-4xl font-bold text-white mb-4">
              Hello I&apos;m <br />
              <TypedWrapper
                fallbackText="Le-Andris Daniel"
                stringList={['Le-Andris Daniel', 'Professional', 'Reliable']}
              />
            </h1>
            <HeroSvg
              className="mx-auto w-1/2 lg:w-auto"
              alt="programmer illustration"
            />
            <h2 className="py-6 text-white text-xl border-t-2">
              Javascript Web Application Developer
            </h2>

            <div className="flex flex-row justify-around">
              <SocialIconLink
                Icon={BsFillEnvelopeAtFill}
                tooltip="Email Me"
                url={`mailto:${Meta.email}`}
                iconSize={36}
                iconColorTwCls="text-white"
              />
              <SocialIconLink
                Icon={FaLinkedin}
                tooltip="Connect on LinkedIn"
                url="https://www.linkedin.com/in/ldaniel38/"
                iconSize={36}
                iconColorTwCls="text-white"
              />

              <SocialIconLink
                Icon={FaIdCard}
                tooltip="View My Resume"
                url="/Le-Andris-Daniel-Resume.pdf"
                iconSize={36}
                iconColorTwCls="text-white"
              />
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

        <div className="z-0 text-white hidden xl:flex px-5 max-w-screen-2xl absolute mx-auto top-1/3 right-0 left-0 flex-row justify-between animate-card-bounce">
          <AnimatedCard
            Icon={AboutSvg}
            title="About"
            body="Learn more about my skills and experience that I'm
                  confident will bring invaluable benefits to your business."
            buttonText="Get to know me"
            url="/about"
          />

          <AnimatedCard
            Icon={PortfolioSvg}
            title="Portfolio"
            body="View my portfolio, to see some of the projects I've
            designed and developed."
            buttonText="View my Portfolio"
            url="/portfolio"
            mirrored
          />
        </div>
      </div>
    </>
  )
}
