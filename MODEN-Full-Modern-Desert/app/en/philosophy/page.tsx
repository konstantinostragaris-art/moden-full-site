// app/en/philosophy/page.tsx
import Nav from '@/components/Nav'
import Section from '@/components/Section'

export const metadata = {
  title: 'Philosophy — MODEN Development',
}

export default function Page() {
  return (
    <div>
      <Nav  />

      <Section className="py-14">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-8">Philosophy</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="text-xl font-medium">Luxury Meets Sustainability</h3>
            <p className="mt-3 text-neutral-700">
              We design with a balance of aesthetics and responsibility. 
              Low-impact materials, high-performance energy systems, 
              and clean architectural lines define our approach.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-medium">Net-zero Thinking</h3>
            <p className="mt-3 text-neutral-700">
              We integrate high-efficiency HVAC, photovoltaics, thermal insulation, 
              and smart controls — aiming for A+/nZEB performance standards.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
