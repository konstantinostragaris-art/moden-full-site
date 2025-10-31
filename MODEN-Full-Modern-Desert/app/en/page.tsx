// app/en/page.tsx
'use client'
import { motion } from 'framer-motion'
import Section from '@/components/Section'
import Nav from '@/components/Nav'
import { Button } from '@/components/ui'

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav lang="en" />

      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(circle at top left, rgba(167,131,93,0.18), transparent 40%), radial-gradient(circle at bottom right, rgba(0,0,0,0.08), transparent 35%)',
          }}
        />

        <Section className="pt-16 pb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Modern homes with
                <span className="block mt-2 grad-title">timeless luxury</span>
                and a clean footprint.
              </h1>

              <p className="mt-6 text-lg text-neutral-700 max-w-xl">
                MODEN develops and modernizes sustainable villas, townhouses and apartments.
                Minimal aesthetics, premium materials and net-zero solutions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  onClick={() =>
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Our Philosophy
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden border bg-white shadow-soft">
                <div className="aspect-[4/3] grid place-items-center bg-gradient-to-br from-desert-beige via-white to-desert-sand text-neutral-500">
                  Hero Image — stock
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <div className="text-sm uppercase tracking-widest text-white/80">Case Study</div>
                  <div className="text-xl font-medium">Nordic Luxe Villa — A+</div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>

      <Section id="projects" className="py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">Projects</h2>
          <Button
            variant="outline"
            onClick={() => location.assign('/en/projects')}
            className="gap-2"
          >
            See more
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {['Modern Desert Villa', 'Ocean Stone Residence', 'Black & Brass Loft'].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card overflow-hidden"
            >
              <div className="aspect-[4/3] grid place-items-center bg-gradient-to-br from-desert-beige via-white to-desert-sand text-neutral-500">
                Stock photo
              </div>
              <div className="p-5">
                <div className="text-lg font-medium">{t}</div>
                <div className="text-sm text-neutral-500">Coming soon</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="philosophy" className="py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Philosophy</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            ['Luxury', 'Aesthetics that stand the test of time.'],
            ['Sustainability', 'Low-impact materials and systems.'],
            ['Design', 'Clean, modern architecture.'],
          ].map(([k, v], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card p-6"
            >
              <div className="text-xl font-medium">{k}</div>
              <div className="text-neutral-600 mt-2">{v}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="contact" className="py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Contact</h2>
            <p className="mt-6 text-neutral-700 max-w-xl">
              Send us a few lines about your project and we’ll get back with ideas and proposals.
            </p>
            <div className="mt-6 text-sm text-neutral-600">Email: info@modendevelopment.gr</div>
          </div>

          <form action="/api/contact" method="POST" className="card p-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Name"
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brass)]"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brass)]"
                required
              />
            </div>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us a few words about your project"
              className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brass)]"
              required
            ></textarea>
            <Button>Send</Button>
          </form>
        </div>
      </Section>

      <footer className="border-t bg-white/60 backdrop-blur">
        <Section className="py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© 2025 MODEN Development — Luxury Meets Sustainability</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-neutral-900" href="/en/philosophy">
              Philosophy
            </a>
            <a className="hover:text-neutral-900" href="/en/projects">
              Projects
            </a>
            <a className="hover:text-neutral-900" href="/en/contact">
              Contact
            </a>
          </div>
        </Section>
      </footer>
    </div>
  )
}
