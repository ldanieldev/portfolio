'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  TiHome,
  TiHomeOutline,
  TiImage,
  TiImageOutline,
  TiUser,
  TiUserOutline,
} from 'react-icons/ti'
import Logo from '../public/img/le-andris-daniel-logo.svg'

export default function Header() {
  const pathname: string = usePathname()
  const pathMatchRoute = (route: string, match = true) =>
    match ? pathname === route : pathname.includes(route)

  return (
    <nav>
      <div className="navbar bg-base-100 drop-shadow-md">
        <div className="flex-1">
          <Link href="/" className="text-4xl hidden xs:inline">
            <Logo
              width={36}
              height={36}
              alt="le-andris daniel logo"
              className="inline-block"
            />
            <span className="font-cookie ml-2 font-bold italic hidden sm:inline">
              Le-Andris Daniel
            </span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li className="">
              <Link href="/" className={pathMatchRoute('/') ? 'active' : ''}>
                {pathMatchRoute('/') ? (
                  <TiHome size={20} />
                ) : (
                  <TiHomeOutline size={20} />
                )}
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <Link
                href="/portfolio"
                className={pathMatchRoute('/portfolio', false) ? 'active' : ''}
              >
                {pathMatchRoute('/portfolio', false) ? (
                  <TiImage size={20} />
                ) : (
                  <TiImageOutline size={20} />
                )}
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathMatchRoute('/about') ? 'active' : ''}
              >
                {pathMatchRoute('/about') ? (
                  <TiUser size={20} />
                ) : (
                  <TiUserOutline size={20} />
                )}
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
