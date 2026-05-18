import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TimeSync — Find the Best Meeting Times for Global Teams',
  description: 'Analyze team timezones, work preferences, and calendar data to detect scheduling conflicts and suggest optimal meeting windows.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="621f5a81-7fc0-4fb4-b8e1-4d9027defe9e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
