"use client"
import React from 'react';
import ThemeChanger from './ThemeChanger';
import Link from 'next/link';
import Logo from './Logo';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useTheme } from 'next-themes';
import { logo_path } from "@/app/config.jigao"

const arr = [
  "Getting Started",
  "Guides",
  "Community",
  "Pricing",
  "Contact",
]

export default function NavigationBar() {
  const { theme } = useTheme()
  console.log(theme)
  return <main className={`w-[1200px] flex flex-col justify-center items-center`}>
    <div className={`flex w-full  h-[100px] justify-between items-center`}>
      <div className="flex">
        <Logo src={logo_path} />
      </div>
      <div className="flex w-full h-full justify-center items-center">
        {arr.map((item, index) => {
          return < NavigationMenu key={index}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu >
        })}
      </div>
      <div className={`flex gap-x-2 w-[200]`}>
        <ThemeChanger />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <span
            className={`
              bg-jigao hover:bg-jigao/70 text-black font-bold rounded rounded-sm
              flex justify-center items-center px-2 py-1
            `}>
            <SignInButton />
          </span>
        </SignedOut>
      </div>
    </div>
  </main>
}
