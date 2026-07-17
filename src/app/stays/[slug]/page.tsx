import Link from "next/link";
import { notFound } from "next/navigation";
import { getStay, stays } from "@/lib/stays";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";

export function generateStaticParams() {
  return stays.map((s) => ({ slug: s.slug }));
}

export default async function StayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stay = getStay(slug);
  if (!stay) notFound();

  return (
    <main style={{ backgroundColor: "#ffc0c0" }}>
      {/* Section 1: Info left / Image right */}
      <section
        style={{
          display: "flex",
          height: "100vh",
          backgroundColor: "#ffc0c0",
        }}
      >
        {/* Left — info */}
        <div
          style={{
            width: "45%",
            padding: "3.5rem 3rem 3.5rem 3.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Back link */}
          <Link
            href="/"
            style={{
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              color: "#cd4747",
              textDecoration: "none",
              opacity: 0.6,
            }}
          >
            ← THE COASTAL
          </Link>

          {/* Main content block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Eyebrow */}
            <p
              style={{
                fontFamily: FUTURA,
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                color: "#cd4747",
                opacity: 0.55,
              }}
            >
              THE {stay.kind.toUpperCase()}
            </p>

            {/* Name */}
            <h1
              style={{
                fontFamily: "Canela, serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)",
                color: "#cd4747",
                lineHeight: 1.05,
              }}
            >
              {stay.name}
            </h1>

            {/* Tagline */}
            <p
              style={{
                fontFamily: FUTURA,
                fontWeight: 700,
                fontSize: "clamp(0.65rem, 0.9vw, 0.85rem)",
                letterSpacing: "0.14em",
                color: "#cd4747",
                opacity: 0.7,
                textTransform: "uppercase",
              }}
            >
              {stay.tagline}
            </p>

            {/* Description */}
            <p
              style={{
                fontFamily: "Canela, serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1rem, 1.5vw, 1.35rem)",
                color: "#cd4747",
                lineHeight: 1.55,
                maxWidth: "42ch",
                opacity: 0.85,
              }}
            >
              {stay.description}
            </p>

            {/* Details list */}
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem 1.5rem",
              }}
            >
              {stay.details.map((d) => (
                <li
                  key={d}
                  style={{
                    fontFamily: FUTURA,
                    fontWeight: 700,
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    color: "#cd4747",
                    opacity: 0.55,
                    textTransform: "uppercase",
                  }}
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Enquire CTA */}
          <a
            href="mailto:hello@thecoastal.com.au"
            style={{
              display: "inline-block",
              fontFamily: FUTURA,
              fontWeight: 700,
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              color: "#ffc0c0",
              backgroundColor: "#cd4747",
              padding: "0.85rem 2rem",
              textDecoration: "none",
              alignSelf: "flex-start",
              textTransform: "uppercase",
            }}
          >
            ENQUIRE
          </a>
        </div>

        {/* Right — hero image */}
        <div style={{ width: "55%", position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={stay.image}
            alt={stay.name}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      {/* Section 2: Editorial spread — large left + stacked right */}
      <section style={{ height: "100vh", backgroundColor: "#ffc0c0", padding: "1.25rem", display: "flex", gap: "1.25rem" }}>
        {/* Left — full-height hero */}
        <div style={{ flex: "0 0 58%", position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={stay.photos[0]} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        {/* Right — three stacked */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ flex: 1, position: "relative", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={stay.photos[i]} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Mosaic — two portrait + wide landscape */}
      <section style={{ height: "100vh", backgroundColor: "#ffc0c0", padding: "1.25rem", display: "grid", gap: "1.25rem", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr" }}>
        {/* Photo 5 — tall, spans 2 rows */}
        <div style={{ gridColumn: "1", gridRow: "1 / 3", position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={stay.photos[4]} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        {/* Photo 6 — top middle */}
        <div style={{ gridColumn: "2", gridRow: "1", position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={stay.photos[5]} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        {/* Photo 7 — top right */}
        <div style={{ gridColumn: "3", gridRow: "1", position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={stay.photos[6]} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        {/* Photo 8 + 9 — wide bottom spanning 2 cols */}
        <div style={{ gridColumn: "2 / 4", gridRow: "2", position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={stay.photos[7]} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </section>
    </main>
  );
}
