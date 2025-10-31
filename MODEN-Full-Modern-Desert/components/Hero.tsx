'use client'

import Image from 'next/image'
import Section from '@/components/Section'
import { Button } from '@/components/ui'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image (LCP) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-desert.avif"
          alt="Minimal luxury villa by MODEN"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover"
        />
        {/* subtle gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent dark:from-black/45" />
      </div>

      <Section className="pt-24 md:pt-32 pb-24 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1
            className={clsx(
              'text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight',
              'text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]'
            )}
          >
            Σύγχρονες κατοικίες με καθαρό αποτύπωμα
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl">
            Μινιμαλιστική αισθητική, premium υλικά, λύσεις net-zero.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact">
              <Button className="px-5 py-2.5 text-[15px] shadow-md">
                Ζήτησε Πρόταση
              </Button>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-xl px-5 py-2.5 border text-white border-white/80 hover:border-white"
            >
              Δες Έργα
            </a>
          </div>
        </motion.div>
      </Section>
    </section>
  )
}
