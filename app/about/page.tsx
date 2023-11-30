import { EmploymentHistory, Meta, SkillLists, Techniques } from '@/app/data'
import EmploymentTimeline from '@/components/EmploymentTimeline'
import SkillList from '@/components/SkillList'
import AboutSvg from '@/public/img/about/about.svg'
import CookingSvg from '@/public/img/about/cooking.svg'
import GamesSvg from '@/public/img/about/games.svg'
import ReadingSvg from '@/public/img/about/reading.svg'
import WeightliftingSvg from '@/public/img/about/weightlifting.svg'
import type { Metadata } from 'next'
import { AboutPage, WithContext } from 'schema-dts'
import Hobby from './_components/Hobby'
import SectionTitle from './_components/SectionTitle'
import TechniqueCard from './_components/TechniqueCard'

export const metadata: Metadata = {
  description:
    "I'm a developer based in Saint Peters MO and I specialize in coding HTML5, CSS3, and Javascript webpages and web apps using clean and valid coding standards.",
}

export default function About() {
  const jsonLd: WithContext<AboutPage> = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: "Le-Andris Daniel's Portfolio",
    description: 'JavaScript Web Developer',
    url: Meta.url + '/about',
    author: {
      '@type': 'Person',
      name: 'Le-Andris Daniel',
      email: Meta.email,
      url: Meta.url,
    },
  }

  const { languages, frameworks, tools } = SkillLists

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="profile" className="hero py-8 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <AboutSvg
            className="max-w-md"
            alt="portrait of Le-Andris Daniel"
            size={500}
          />
          <div>
            <h1 className="text-5xl font-bold">Who Am I?</h1>
            <p className="py-2 text-lg">
              I am an independent, efficient, detail-oriented, and
              self-motivated individual prepared to excel in the field of
              Information Technology and seeking employment with a company where
              my skills and experience will be an asset to the business while
              furthering my knowledge and abilities in the process.
            </p>
            <p className="py-2 text-lg">
              From coding to development, I bring a wealth of programming skills
              and work experience to the table. With&nbsp;
              {new Date().getFullYear() - 2011}&nbsp;years of experience working
              on complex projects, I strive to create beautiful,
              well-constructed web solutions that satisfy customer needs and
              drive business growth.
            </p>
            <p className="py-2 text-lg">
              I am an eager, focused learner and constantly keep up to date with
              the latest web technologies and industry standards to ensure that
              the solution is reliable, accessible and secure. My skills span a
              broad range including web development, as well as experience in
              customer service, data analysis and project management.
            </p>
            <p className="py-2 text-lg">
              As an experienced professional, I am committed to providing
              excellent customer service and delivering high-quality results.
              Let&apos;s work together to bring your ideas to life and create
              solution that make a real impact.
            </p>
          </div>
        </div>
      </section>

      <section id="techniques" className="bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl text-white">
            See what I can <br />
            <span className="text-blue-500">Do</span>
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            {Techniques.map((technique, idx) => (
              <TechniqueCard
                key={idx}
                title={technique.title}
                text={technique.desc}
                Icon={technique.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="employment-skills-history"
        className="container mx-auto py-10 px-6 flex flex-col lg:flex-row"
      >
        <div className="flex-grow lg:w-3/5 mb-12">
          <section id="skills" className="mb-12">
            <SectionTitle text="Skills" />

            <SkillList title={languages.title} skillList={languages.skills} />
            <SkillList title={frameworks.title} skillList={frameworks.skills} />
            <SkillList title={tools.title} skillList={tools.skills} />
          </section>

          <section id="hobbies" className="mx-auto mb-12 lg:max-w-lg">
            <SectionTitle text="Hobbies" />

            <Hobby
              Icon={CookingSvg}
              title="Cooking"
              text="
                Cooking is one of my favorite hobbies. It's a great way to
                stay healthy and create delicious meals. I find it very
                satisfying to make something from scratch, and I'm
                constantly experimenting with flavors and techniques. Even when
                I make mistakes, I use those experiences to grow and become a
                better cook."
            />

            <Hobby
              Icon={GamesSvg}
              title="Video Games"
              text="Playing video games is one of my favorites ways to unwind,
                relax, and have a ton of fun. Who wouldn't love that? My
                favorite thing about video games is that they provide so much
                entertainment and challenges which can be both educational and
                rewarding, in settings outside of the norm which can provoke out
                of the box thinking."
            />

            <Hobby
              Icon={ReadingSvg}
              title="Reading"
              text="Reading is one of my favorite leisure activities because It
              helps me to expand my horizons and gain a new perspective on
              things. I get to escape into new worlds, learn about different
              cultures, go on exciting journeys, and explore the depths of a
              book. Reading has increased my appreciation for the written word
              and it opens up the door to opportunities."
            />

            <Hobby
              Icon={WeightliftingSvg}
              title="Weightlifting"
              text="I really enjoy weightlifting! It's a great way to stay fit,
              build strength and have fun doing it. I also love that I can
              challenge myself to progress and reach new goals. Whenever I
              feel down, hitting the gym helps me refocus and clear my mind.
              It's a great way to de-stress after a long day and I always
              walk away feeling accomplished and proud of myself."
            />
          </section>
        </div>

        <section id="employment-history" className="flex-grow lg:w-2/5">
          <SectionTitle text="Employment History" />

          <EmploymentTimeline data={EmploymentHistory} />
        </section>
      </section>
    </>
  )
}
