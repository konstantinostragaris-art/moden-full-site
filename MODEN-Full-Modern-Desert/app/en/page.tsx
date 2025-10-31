'use client'

import { motion } from 'framer-motion'
import Nav from '@/components/Nav'
import { Button } from '@/components/ui'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <Nav />

      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(167,131,93,0.08), transparent 40%), radial-gradient(circle at bottom right, rgba(0,0,0,0.06), transparent 35%)',
        }}
      />

      {/* Hero */}
      <header className="pt-24 sm:pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-7xl grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              Contemporary residences with
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
                luxurious minimalist design
              </span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">
              MODEN Development — Luxury Meets Sustainability. High-efficiency homes blending
              architectural clarity, timeless materials, and refined detailing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#philosophy" className="inline-flex items-center gap-2">
                  Our Philosophy <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-neutral-100 dark:bg-neutral-900" />
          </motion.div>
        </div>
      </header>
    </div>
  )
}
