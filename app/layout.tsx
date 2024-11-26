import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import BootstrapClient from '@/components/BootstrapClient'
import '@/styles/bootstrap.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SOBA - SOL Bastard',
  description: 'Token made by a Bastard for Community of Pure Bastards',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BootstrapClient />
        {children}
      </body>
    </html>
  )
}

