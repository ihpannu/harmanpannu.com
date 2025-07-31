"use client"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { siteConfig } from "@/config/site"

import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { useEffect, useState } from "react"

const navigation = siteConfig.nav

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Remove admin route check since no auth
  // const isAdminRoute = pathname?.startsWith("/admin")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-transparent backdrop-blur-md shadow-sm"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <nav
        className="flex items-center justify-between p-4 lg:px-8 mx-auto max-w-7xl"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">{siteConfig.name}</span>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500  flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <GlobeAsiaAustraliaIcon className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                {siteConfig.name}
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-slate-700 hover:bg-slate-100 transition-colors duration-200">
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </MenubarTrigger>
              <MenubarContent className="min-w-[200px]">
                {navigation.map((item) => (
                  <MenubarItem key={item.name} asChild>
                    <Link href={item.href} className="cursor-pointer">
                      {item.name}
                    </Link>
                  </MenubarItem>
                ))}
                {/* Auth components removed */}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link
                      href={item.href}
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  )
}
