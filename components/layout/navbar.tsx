"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Zap, MessageCircle, User, Menu, X, Sun, Moon, DollarSign, Info } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
    { href: "/skills", label: "Skills", icon: <Search className="h-5 w-5" /> },
    { href: "/matchmaking", label: "AI Match", icon: <Zap className="h-5 w-5" /> },
    { href: "/chat", label: "Chat", icon: <MessageCircle className="h-5 w-5" /> },
    { href: "/profile", label: "Profile", icon: <User className="h-5 w-5" /> },
    { href: "/pricing", label: "Pricing", icon: <DollarSign className="h-5 w-5" /> },
    { href: "/about", label: "About Us", icon: <Info className="h-5 w-5" /> },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-all ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5L10 10V20L20 25L30 20V10L20 5Z" className="fill-primary" />
              <path d="M10 20V30L20 35L30 30V20L20 25L10 20Z" className="fill-primary dark:fill-primary/80" />
              <path d="M20 5L30 10L20 15L10 10L20 5Z" className="fill-primary/50" />
            </svg>
          </div>
          <span className="text-xl font-bold gradient-text">SkillBridge</span>
        </Link>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div
          className={`fixed inset-x-0 top-16 z-50 flex-col gap-4 border-b bg-background p-6 shadow-lg transition-all duration-300 ease-in-out md:static md:flex md:translate-y-0 md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none md:opacity-100 ${
            isMenuOpen ? "flex translate-y-0 opacity-100" : "invisible -translate-y-10 opacity-0 md:visible"
          }`}
        >
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                  pathname === item.href
                    ? "bg-primary/10 text-primary dark:bg-primary/20"
                    : "text-foreground/80 hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-4 md:mt-0 md:ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="hidden md:flex md:items-center md:gap-4">
              <Link
                href="/login"
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                Log In
              </Link>
              <Link href="/signup">
                <Button className="rounded-full bg-gradient-to-r from-primary to-secondary">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
