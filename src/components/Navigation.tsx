"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, ChevronDown, Search } from "lucide-react"
import { useEffect, useState } from "react"

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [animatedText, setAnimatedText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const words = [
    "best hearing aids",
    "digital hearing aids",
    "top 5 hearing aids",
  ]

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Load animation
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  // Typing animation (only animates the second part of text)
  useEffect(() => {
    const currentWord = words[wordIndex]
    let typingSpeed = isDeleting ? 50 : 100

    const typing = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setAnimatedText(currentWord.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setAnimatedText(currentWord.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1200)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }, typingSpeed)

    return () => clearTimeout(typing)
  }, [charIndex, isDeleting, wordIndex, words])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 font-museo ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      } ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center ml-4">
          <Image
            src="/logo.webp"
            alt="Insono Hearing"
            width={120} // bigger logo
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-gray-800 font-medium text-[18px] leading-[18px]">
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("hearing")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1 px-3 py-1 rounded-md hover:text-[#023784] transition text-[18px] leading-[18px]">
              Hearing Aids <ChevronDown size={16} />
            </button>

            {openMenu === "hearing" && (
              <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 shadow-lg rounded-lg grid grid-cols-3 gap-6 p-6 min-w-[600px]">
                {/* Column 1 */}
                <div>
                  <h4 className="font-semibold text-[#023784] mb-2 text-[18px] leading-[18px]">
                    By Type
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>
                      <Link
                        href="/hearing-aids/type/ric"
                        className="hover:text-[#023784] text-[18px] leading-[18px]"
                      >
                        RIC
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hearing-aids/type/bte"
                        className="hover:text-[#023784] text-[18px] leading-[18px]"
                      >
                        BTE
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hearing-aids/type/ite"
                        className="hover:text-[#023784] text-[18px] leading-[18px]"
                      >
                        ITE
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Column 2 */}
                <div>
                  <h4 className="font-semibold text-[#023784] mb-2 text-[18px] leading-[18px]">
                    By Brand
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>
                      <Link
                        href="/hearing-aids/brand/signia"
                        className="hover:text-[#023784] text-[18px] leading-[18px]"
                      >
                        Signia
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hearing-aids/brand/phonak"
                        className="hover:text-[#023784] text-[18px] leading-[18px]"
                      >
                        Phonak
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hearing-aids/brand/widex"
                        className="hover:text-[#023784] text-[18px] leading-[18px]"
                      >
                        Widex
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Column 3 */}
                <div>
                  <h4 className="font-semibold text-[#023784] mb-2 text-[18px] leading-[18px]">
                    For User Type
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>
                      <Link
                        href="/hearing-aids/users/adults"
                        className="hover:text-[#023784] text-[18px] leading-[18px]"
                      >
                        Adults
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hearing-aids/users/children"
                        className="hover:text-[#023784] text-[18px] leading-[18px]"
                      >
                        Children
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/hearing-aids/users/seniors"
                        className="hover:text-[#023784] text-[18px] leading-[18px]"
                      >
                        Seniors
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/clinics"
            className="px-3 py-1 hover:text-[#023784] transition text-[18px] leading-[18px]"
          >
            Our Clinics
          </Link>
          <Link
            href="/hearing-aid-price"
            className="px-3 py-1 hover:text-[#023784] transition text-[18px] leading-[18px]"
          >
            Hearing Aid Price
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center relative mx-2 w-70">
          <Search className="absolute left-2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder={`Search for ${animatedText}`}
            className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#023784] focus:outline-none text-[16px]"
          />
        </div>

        {/* Call CTA */}
        <a
          href="tel:+916204260510"
          className="flex items-center gap-2 bg-[#f59e0b] text-black-600 font-medium px-4 py-2 rounded-md hover:bg-yellow-500 transition text-[18px] leading-[18px] mr-4"
        >
          <Phone size={16} />6204260510
        </a>
      </div>
    </header>
  )
}
