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
      <Nav lang="en" />

      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            // ελαφρύτερα in light, πιο “μαλακά” σε dark
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
              MODEN Development — Luxury Meets Sustainability. High-efficiency homes blending architectural clarity,
              timeless materials, and refined detailing.
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

      {/* Philosophy – moved ABOVE Projects */}
      <section id="philosophy" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-semibold">Philosophy</h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                We combine minimalism, natural materials, and advanced technology to create homes that are warm,
                functional, and energy-efficient. Our focus lies on orientation, natural light, cross-ventilation,
                and build quality.
              </p>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Luxury Meets Sustainability',
                  desc:
                    'Premium aesthetics with sustainable choices — from insulation to windows and HVAC systems.',
                },
                {
                  title: 'Pure Architecture',
                  desc:
                    'Balanced lines and harmonious proportions. Clean forms that highlight space and light.',
                },
                {
                  title: 'Performance & Comfort',
                  desc:
                    'Net-zero approaches, A+ energy ratings where possible, and smart design for low operating costs.',
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 bg-neutral-50 border border-neutral-200 text-neutral-700
                             dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300"
                >
                  <h3 className="text-xl font-medium">{f.title}</h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold">Projects</h2>
                <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-2xl">
                  Selected ongoing and completed projects. (Can link to dynamic /projects page.)
                </p>
              </div>
              <Button asChild className="hidden md:inline-flex">
                <a href="/en/projects">All Projects</a>
              </Button>
            </div>

            <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <article
                  key={i}
                  className="group rounded-2xl overflow-hidden border border-neutral-200 bg-white
                             dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="aspect-[4/3] bg-neutral-100 dark:bg-neutral-800" />
                  <div className="p-5">
                    <h3 className="text-lg font-medium">MODEN Residence {i}</h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Location • Type • Stage</p>
                    <div className="mt-4">
                      <a
                        href={`/en/projects/${i}`}
                        className="inline-flex items-center gap-2 text-sm font-medium underline-offset-2 hover:underline"
                      >
                        View details <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-semibold">Sustainability</h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-3xl">
              From material selection to HVAC and photovoltaics, we design for low footprint and high performance.
              Incorporating heat pumps, VRF/VRV, underfloor systems, heat recovery ventilation, and smart controls.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                'A+ / NZEB target',
                'Materials with Environmental Product Declarations (EPD)',
                'Energy performance studies & consulting',
              ].map((t, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 bg-neutral-50 border border-neutral-200 text-neutral-700
                             dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300"
                >
                  {t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <h3 className="text-3xl sm:text-4xl font-semibold">Ready to design your next MODEN project?</h3>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">
              Contact us for concept, preliminary design, and budget estimation. We deliver clear proposals with defined ranges.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <a href="#contact">Book an intro call</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-4 max-w-7xl grid md:grid-cols-3 gap-8 text-neutral-700 dark:text-neutral-300">
          <div>
            <div className="text-xl font-semibold">MODEN Development</div>
            <p className="mt-2 text-sm">Luxury Meets Sustainability</p>
          </div>
          <div>
            <div className="font-medium">Contact</div>
            <p className="mt-2 text-sm">info@moden.dev • +30 210 0000000</p>
          </div>
          <div>
            <div className="font-medium">Links</div>
            <ul className="mt-2 text-sm space-y-1">
              <li><a href="#philosophy" className="hover:underline">Philosophy</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#sustainability" className="hover:underline">Sustainability</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
