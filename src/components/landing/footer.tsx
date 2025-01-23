"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="pt-16 pb-12 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2" />
      </div>
      <div className="container relative">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-white/90">nexus</span>
            <span className="text-lg font-medium text-blue-500">mind</span>
          </div>
          <p className="text-sm text-[#888]">
            © {new Date().getFullYear()} nexusmind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 