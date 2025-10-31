// app/contact/page.tsx
'use client'
import Nav from '@/components/Nav'
import Section from '@/components/Section'
import { Button } from '@/components/ui'

export default function Page() {
  return (
    <div>
      <Nav />

      <Section className="py-14">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-8">Επικοινωνία</h1>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="card p-6">
            <p className="text-neutral-700">
              Θέλεις να συζητήσουμε ένα οικόπεδο ή αναβάθμιση κατοικίας; Στείλε μας λίγες γραμμές
              και θα επανέλθουμε με προτάσεις.
            </p>
            <div className="mt-6 text-sm text-neutral-700">
              Email: info@modendevelopment.gr
            </div>
          </div>

          <form action="/api/contact" method="POST" className="card p-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Όνομα"
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
              placeholder="Πες μας δυο λόγια για το project σου"
              className="rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--brass)]"
              required
            />
            <Button>Αποστολή</Button>
          </form>
        </div>
      </Section>
    </div>
  )
}
