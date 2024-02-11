'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../images/Valentine.png'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-pink backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Image src={Logo} className='w-[50px] rounded-lg' alt=''/>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap gap-5 items-center">
            <li>
              <Link href="/" className="flex font-medium w-full text-white hover:text-[#ef067a] py-2 justify-center" >Home</Link>
            </li>
            <li>
              <Link href="/#tokenomics" className="flex font-medium w-full text-white hover:text-[#ef067a] py-2 justify-center" >Tokenomics</Link>
            </li>
            <li>
              <Link href="/#htb" className="flex font-medium w-full text-white hover:text-[#ef067a] py-2 justify-center" >How to Buy</Link>
            </li>
            <li>
              <Link href="/airdrop" className="flex font-medium w-full text-white hover:text-[#ef067a] py-2 justify-center" >Airdrop</Link>
            </li>
              <li>
                <Link href="https://t.me/VAL_ON_ETH" className="btn-sm text-gray-200 bg-[#ef067a] hover:bg-gray-800 ml-3">
                  <span>Join Community</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
