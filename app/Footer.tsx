'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsFillEnvelopeAtFill } from 'react-icons/bs'
import { FaIdCard, FaLinkedin } from 'react-icons/fa'
import Logo from '../public/img/le-andris-daniel-logo.svg'
import { Meta } from './data'

export default function Footer() {
  const pathname: string = usePathname()

  return pathname === '/' ? (
    <></>
  ) : (
    <footer className="footer flex flex-col items-center p-4 border-t-2 border-b-slate-800 md:grid">
      <div className="items-center md:grid-flow-col">
        <Link href="/" className="text-4xl grid-cols-12">
          <Logo
            width={36}
            height={36}
            alt="le-andris daniel logo"
            className="inline-block"
          />
          <span className="font-cookie mx-2 font-bold italic">
            Le-Andris Daniel
          </span>
        </Link>
        <p>Copyright &copy; {new Date().getFullYear()} - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link
          href={`mailto:${Meta.email}`}
          title="Contact Me"
          className="hover:text-primary"
        >
          <BsFillEnvelopeAtFill size={28} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ldaniel38/"
          target="_blank"
          title="View My LinkedIn Profile"
          className="hover:text-primary"
        >
          <FaLinkedin size={28} />
        </Link>
        <Link
          href="/Le-Andris-Daniel-Resume.pdf"
          target="_blank"
          title="View My Resume"
          className="hover:text-primary"
        >
          <FaIdCard size={28} />
        </Link>
      </div>
    </footer>
  )
}
