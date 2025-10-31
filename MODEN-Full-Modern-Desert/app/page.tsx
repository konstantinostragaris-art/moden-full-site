'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Section from '@/components/Section'
import Nav from '@/components/Nav'
import { Button } from '@/components/ui'

export default function Page() {
  // helpers για smooth scroll
  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen">
      {/* Sticky header */}
      <Nav />

      {/* Hero (ΧΩΡΙΣ background overlay/λευκό κείμενο εκτός περιοχής) */}
      <section
        aria-labelledby="home-title"
        className="relative overflow-hidden"
      >
        {/* Διακριτικό decorative background (όχι έντονο) */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(circle at 10% 10%, rgba(167,131,93,0.12), transparent 35%), radial-gradient(circle at 90% 85%, rgba(0,0,0,0.06), transparent 30%)',
          }}
        />

        {/* Περισσότερο top padding ώστε να μη «σκιάζει» ο sticky header */}
        <Section className="pt-24 md:pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Αριστερά: τίτλος/περιγραφή/CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                id="home-title"
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
              >
                Σύγχρονες κατοικίες με{' '}
                <span className="block mt-2 grad-title">
                  διαχρονική πολυτέλεια
                </span>{' '}
                και καθαρό αποτύπωμα.
              </h1>

              <p className="mt-6 text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
                Η MODEN αναπτύσσει και εκσυγχρονίζει βιώσιμες βίλες, μεζονέτες
                και διαμερίσματα. Minimal αισθητική, premium υλικά και λύσεις
                net-zero.
              </p>

              {/* Κουμπιά: πρώτα Φιλοσοφία, μετά Έργα */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Button onClick={() => scrollToId('philosophy')}>
                  Φιλοσοφία
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToId('projects')}
                >
                  Δες Έργα
                </Button>
              </div>
            </motion.div>

            {/* Δεξιά: κάρτα προεπισκόπησης (χωρίς overlay/λευκά κείμενα) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden border bg-white dark:bg-neutral-900 shadow-soft">
               <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-md border dark:border-white/10">
  <Image
    src="/1897+Lilac+Ln-44.jpg.webp"
    alt="Minimal luxury villa by MODEN Development"
    fill
    priority
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover object-center"
  />
  {/* Προαιρετικό ελαφρύ gradient overlay για βάθος */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
</div>
                {/* Αφαιρέθηκε το παλιό gradient footer/overlay */}
              </div>
            </motion.div>
          </div>
        </Section>
      </section>

      {/* Φιλοσοφία — ΠΑΝΩ από τα Έργα */}
      <Section id="philosophy" className="py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Φιλοσοφία</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            ['Luxury', 'Αισθητική που αντέχει στο χρόνο.'],
            ['Sustainability', 'Υλικά με χαμηλό αποτύπωμα.'],
            ['Design', 'Καθαρή αρχιτεκτονική.'],
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
              <div className="text-neutral-600 dark:text-neutral-300 mt-2">
                {v}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Έργα */}
      <Section id="projects" className="py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">Έργα</h2>
          <Button
            variant="outline"
            onClick={() => (location.href = '/projects')}
            className="gap-2"
          >
            Περισσότερα
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            'Modern Desert Villa',
            'Ocean Stone Residence',
            'Black & Brass Loft',
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card overflow-hidden"
            >
              <div className="aspect-[4/3] grid place-items-center bg-gradient-to-br from-desert-beige via-white to-desert-sand text-neutral-500 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950">
                Stock photo
              </div>
              <div className="p-5">
                <div className="text-lg font-medium">{t}</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  Coming soon
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Επικοινωνία */}
      <Section id="contact" className="py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Επικοινωνία</h2>
            <p className="mt-6 text-neutral-700 dark:text-neutral-300 max-w-xl">
              Στείλε μας λίγες γραμμές για το project σου και θα επανέλθουμε με
              ιδέες και προτάσεις.
            </p>
            <div className="mt-6 text-sm text-neutral-600 dark:text-neutral-400">
              Email: info@modendevelopment.gr
            </div>
          </div>

          <form
            action="/api/contact"
            method="POST"
            className="card p-6 grid gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Όνομα"
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brass)] bg-white dark:bg-neutral-900 dark:border-white/10"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brass)] bg-white dark:bg-neutral-900 dark:border-white/10"
                required
              />
            </div>
            <textarea
              name="message"
              rows={5}
              placeholder="Πες μας δυο λόγια για το project σου"
              className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brass)] bg-white dark:bg-neutral-900 dark:border-white/10"
              required
            />
            <Button>Αποστολή</Button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t bg-white/60 dark:bg-neutral-950/60 backdrop-blur">
        <Section className="py-8 text-sm text-neutral-600 dark:text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© 2025 MODEN Development — Luxury Meets Sustainability</div>
          <div className="flex items-center gap-4">
            <a
              className="hover:text-neutral-900 dark:hover:text-neutral-200"
              href="/philosophy"
            >
              Philosophy
            </a>
            <a
              className="hover:text-neutral-900 dark:hover:text-neutral-200"
              href="/projects"
            >
              Projects
            </a>
            <a
              className="hover:text-neutral-900 dark:hover:text-neutral-200"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </Section>
      </footer>
    </div>
  )
}
