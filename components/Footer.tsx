'use client'
import { Meta } from '@/app/data'
import SocialIconLink from '@/components/SocialIconLink'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsFillEnvelopeAtFill } from 'react-icons/bs'
import { FaIdCard, FaLinkedin } from 'react-icons/fa'
import Logo from '../public/img/le-andris-daniel-logo.svg'

export default function Footer() {
  const pathname = usePathname()

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
        <SocialIconLink
          Icon={BsFillEnvelopeAtFill}
          tooltip="Email Me"
          url={`mailto:${Meta.email}`}
          iconSize={28}
          tooltipPosition="left"
          iconHoverColorTwCls="hover:text-primary"
        />
        <SocialIconLink
          Icon={FaLinkedin}
          tooltip="Connect on LinkedIn"
          url="https://www.linkedin.com/in/ldaniel38/"
          iconSize={28}
          tooltipPosition="left"
          iconHoverColorTwCls="hover:text-primary"
        />
        <SocialIconLink
          Icon={FaIdCard}
          tooltip="View My Resume"
          url="/Le-Andris-Daniel-Resume.pdf"
          iconSize={28}
          tooltipPosition="left"
          iconHoverColorTwCls="hover:text-primary"
        />
      </div>
    </footer>
  )
}
