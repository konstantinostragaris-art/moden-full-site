// app/en/page.tsx
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section className="hero">
        <h1>Luxury Meets Sustainability</h1>
        <p>
          We design and develop modern, energy-efficient residences with timeless aesthetics and a net-zero mindset.
        </p>
      </section>

      <section className="projects">
        <h2>Signature Projects</h2>
        <p>Minimal lines, premium materials, and exceptional energy performance.</p>
        <Image
          src="/images/villa-hero.jpg"
          alt="MODEN modern villa"
          width={2400}
          height={1350}
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </section>

      <section className="cta">
        <h2>Discover More</h2>
        <p>
          Explore our philosophy, projects, and sustainable design approach that defines modern living.
        </p>
      </section>
    </main>
  );
}
