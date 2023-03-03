"use client"
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from "next/link"

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={inter.className}>
      <div>
        <h1>Home page</h1>
        <Link href="/articles">Link to articles</Link>
      </div>
    </main>
  )
}
