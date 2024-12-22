"use client"

import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from "next-themes"
import { Button } from '@/components/ui/button'
import { WalletConnection } from '@/components/wallet-connection'
import { Menu, Moon, Sun } from 'lucide-react'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              IP Marketplace
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/marketplace" className="text-sm font-medium transition-colors hover:text-primary">
              Marketplace
            </Link>
            <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link href="/create" className="text-sm font-medium transition-colors hover:text-primary">
              Create IP
            </Link>
            <WalletConnection />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
          <div className="flex md:hidden">
            <Button variant="ghost" size="sm" className="px-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link href="/marketplace" className="block px-3 py-2 text-base font-medium">
              Marketplace
            </Link>
            <Link href="/dashboard" className="block px-3 py-2 text-base font-medium">
              Dashboard
            </Link>
            <Link href="/create" className="block px-3 py-2 text-base font-medium">
              Create IP
            </Link>
            <div className="px-3 py-2">
              <WalletConnection />
            </div>
            <div className="px-3 py-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

