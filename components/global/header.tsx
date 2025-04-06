"use client"

import { useState } from "react"
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react"
import { ArrowPathIcon, Bars3Icon, ChartPieIcon, SquaresPlusIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    name: "Playlist Spotify",
    description: "Ajouter votre playlist au voyage",
    href: "tracks",
    icon: ChartPieIcon,
    color: "bg-pink-100",
  },
  { name: "Albums", description: "Partagez vos photos", href: "/photo", icon: SquaresPlusIcon, color: "bg-blue-100" },
  {
    name: "Programme",
    description: "Les prgrammes du jour",
    href: "/programme",
    icon: ArrowPathIcon,
    color: "bg-yellow-100",
  },
]

const company = [{ name: "Tozeur", href: "/tozeur", description: "Découvrez Tozeur" }]

const allLinks = [
  { name: "Dépenses", href: "/depenses", color: "bg-yellow-100" },
  { name: "Informations", href: "/a-savoir", color: "bg-pink-100" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-purple-50 border-b-[8px] border-black relative">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo section */}
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 border-4 border-black bg-pink-100 hover:bg-black hover:text-white transition-colors duration-200"
          >
            <span className="sr-only">Valentine Ltd</span>
            <div className="relative">
              <Image
                alt=""
                src="/Valentine's Day Heart Favicon.jpg"
                className="h-12 w-auto contrast-125 hover:invert transition-all duration-300"
              />
              {/* Aggressive geometric accent */}
              <div className="absolute -right-2 -bottom-2 w-4 h-4 border-4 border-black bg-yellow-200 rotate-45"></div>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-black border-4 border-black bg-green-100 hover:bg-black hover:text-white transition-colors duration-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-1">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-black uppercase tracking-wider text-black px-4 py-2 border-4 border-black bg-blue-100 hover:bg-black hover:text-white transition-colors duration-200">
              Fun
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-1 w-screen max-w-md overflow-hidden bg-purple-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-0">
                {products.map((item, index) => (
                  <div
                    key={index}
                    className={`group relative flex gap-x-6 p-4 text-sm/6 hover:bg-black hover:text-white border-b-4 border-black last:border-b-0 transition-colors duration-200 ${item.color}`}
                  >
                    <div className="mt-1 flex size-12 flex-none items-center justify-center bg-white group-hover:bg-black border-4 border-black">
                      <item.icon aria-hidden="true" className="size-6 text-black group-hover:text-white" />
                    </div>
                    <div className="flex-auto">
                      <Link href={item.href} className="block font-black uppercase text-black group-hover:text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 font-bold">{item.description}</p>
                    </div>
                    <div className="absolute top-4 right-4 font-mono text-xs">0{index + 1}</div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link
            href="/depenses"
            className="text-sm/6 font-black uppercase tracking-wider text-black px-4 py-2 border-4 border-black bg-yellow-100 hover:bg-black hover:text-white transition-colors duration-200"
          >
            Dépenses
          </Link>

          <Link
            href="/a-savoir"
            className="text-sm/6 font-black uppercase tracking-wider text-white px-4 py-2 border-4 border-black bg-pink-400 hover:bg-black hover:text-white transition-colors duration-200"
          >
            Informations
          </Link>

          <Link
            href="/tozeur"
            className="text-sm/6 font-black uppercase tracking-wider text-black px-4 py-2 border-4 border-black bg-green-100 hover:bg-black hover:text-white transition-colors duration-200"
          >
            Tozeur
          </Link>
        </PopoverGroup>

        {/* Login button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#"
            className="text-sm/6 font-black uppercase tracking-wider text-black px-6 py-2 border-4 border-black bg-blue-200 hover:bg-black hover:text-white transition-colors duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
          >
            Log in{" "}
            <span aria-hidden="true" className="ml-1 font-mono">
              →
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu dialog - FIXED VERSION WITH IMPROVED Z-INDEX */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden relative z-50">
        {/* Backdrop with higher z-index */}
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" aria-hidden="true" />

        {/* Dialog panel with higher z-index */}
        <DialogPanel className="fixed inset-y-0 right-0 z-50 flex w-full flex-col overflow-y-auto bg-purple-50 sm:max-w-sm border-l-8 border-black">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-4 border-b-4 border-black">
            <Link href="/" className="p-1 border-4 border-black bg-pink-100">
              <span className="sr-only">Valentine</span>
              <Image alt="" src="/Valentine's Day Heart Favicon.jpg" className="h-8 w-auto contrast-125" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-black border-4 border-black bg-red-100 hover:bg-black hover:text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-5" />
            </button>
          </div>

          {/* Mobile menu content */}
          <div className="overflow-y-auto">
            {/* Fun section with dropdown items */}
            <div className="p-2 border-b-4 border-black bg-blue-100">
              <div className="font-black uppercase text-sm px-2 py-1">Fun</div>
              <div className="mt-1">
                {products.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`group flex items-center gap-x-3 p-2 text-sm font-bold text-black hover:bg-black hover:text-white border-2 border-black mb-1 last:mb-0 transition-colors duration-200 ${item.color}`}
                  >
                    <div className="flex size-8 flex-none items-center justify-center bg-white group-hover:bg-black border-2 border-black">
                      <item.icon aria-hidden="true" className="size-4 text-black group-hover:text-white" />
                    </div>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Other links */}
            <div className="p-2 border-b-4 border-black">
              {allLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`block p-2 text-sm font-black uppercase text-black hover:bg-black hover:text-white border-2 border-black mb-1 transition-colors duration-200 ${link.color}`}
                >
                  {link.name}
                </Link>
              ))}

              {company.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block p-2 text-sm font-black uppercase text-black hover:bg-black hover:text-white border-2 border-black mb-1 transition-colors duration-200 bg-green-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Login button */}
            <div className="p-2">
              <Link
                href="/signin"
                className="block py-2 text-sm font-black uppercase text-black bg-blue-200 border-4 border-black px-4 text-center hover:bg-black hover:text-white transition-colors duration-200"
              >
                Log in
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

