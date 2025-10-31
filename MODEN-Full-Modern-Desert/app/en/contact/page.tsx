// app/en/contact/page.tsx
import Nav from '@/components/Nav'
import Section from '@/components/Section'
import { Button } from '@/components/ui'

export const metadata = { title: 'Contact — MODEN Development' }

export default function Page() {
  return (
    <div>
      <Nav />

      <Section className="py-14">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-8">Contact</h1>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="card p-6">
            <p className="text-neutral-700">
              Want to discuss a plot or a home renovation? Send us a few lines about your
              project and we’ll get back to you with ideas and proposals.
            </p>
            <div className="mt-6 text-sm text-neutral-700">
              Email: info@modendevelopment.gr
            </div>
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
            />
            <Button>Send</Button>
          </form>
        </div>
      </Section>
    </div>
  )
}
