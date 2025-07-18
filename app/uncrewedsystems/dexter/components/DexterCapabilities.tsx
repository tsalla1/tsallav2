"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DexterCapabilities() {

  return (
    <section className="relative h-screen w-full flex items-center justify-start bg-black text-white overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://player.vimeo.com/progressive_redirect/playback/889008535/rendition/1080p/file.mp4?loc=external&signature=8a912138a2014f2a2454300b4cd0605d97c26167bdc3d6dc09d07286c5490b66"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* DEXTER text on the left */}
      <div className="relative z-20 pl-8 sm:pl-16 md:pl-24 lg:pl-32">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
          DEXTER
        </h1>
      </div>
    </section>
  )
}
