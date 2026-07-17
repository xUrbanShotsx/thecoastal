import Link from "next/link";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";

const experiences = [
  {
    tag: "VILLAGE LIFE",
    title: "Berry Town",
    subtitle: "History, craft & slow mornings",
    body: "The main street of Berry is a rare thing — a town that still feels like itself. Heritage sandstone buildings, independent bookshops, weekend markets and coffee worth the drive. Wander Princes Street, stop in at the co-op, pick up something local to cook that night. It's fifteen minutes from the estate and could easily take up a whole day.",
    img: "/exp3.jpg",
    imgSide: "left" as const,
    bg: "#ffc0c0",
    textColor: "#cd4747",
  },
  {
    tag: "COASTLINE",
    title: "Seven Mile Beach",
    subtitle: "Open ocean, unbroken horizon",
    body: "One of the longest undeveloped beaches on the New South Wales coast. Swim in the patrolled areas near Gerroa, walk south until the world goes quiet, or simply sit and watch the waves come in. The drive through the headland is half the pleasure.",
    img: "/exp1.jpg",
    imgSide: "right" as const,
    bg: "#cd4747",
    textColor: "#ffc0c0",
  },
  {
    tag: "FOOD & WINE",
    title: "Dining",
    subtitle: "Farm gates, cellar doors & long tables",
    body: "The Shoalhaven grows exceptional produce and the restaurants around Berry know it. From casual wine bars to slow lunches at working farms, the food here is the kind that makes you book a return trip. We keep a list of favourites — just ask when you arrive.",
    img: "/exp2.jpg",
    imgSide: "left" as const,
    bg: "#ffc0c0",
    textColor: "#cd4747",
  },
  {
    tag: "ON FOOT",
    title: "Walks & Climbs",
    subtitle: "Rainforest, ridgelines & river valleys",
    body: "Kangaroo Valley is twenty minutes west — a green world of sandstone escarpments, suspension bridges and fern-lined trails. The Barrengarry Mountain track rewards the effort with views that reach the sea. Pack well, start early, and stop at the Kangaroo Valley pub on the way back.",
    img: null,
    imgSide: "right" as const,
    bg: "#cd4747",
    textColor: "#ffc0c0",
    imgColor: "#b83c3c",
  },
  {
    tag: "ACTIVE",
    title: "Adventures",
    subtitle: "Water, saddle & open sky",
    body: "Kayak the Kangaroo River through river gum corridors, ride through farmland on horseback at dusk, or take a guided canyon tour into the Budderoo escarpment. The South Coast moves slowly enough to notice everything — and wildly enough to make you feel it.",
    img: null,
    imgSide: "left" as const,
    bg: "#ffc0c0",
    textColor: "#cd4747",
    imgColor: "#e8a8a8",
  },
];

export default function ExperiencePage() {
  return (
    <main>

      {/* Hero */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/exp1.jpg"
          alt="Berry, NSW South Coast"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)" }} />

        {/* Back nav */}
        <Link
          href="/"
          style={{
            position: "absolute", top: "2rem", left: "2rem",
            fontFamily: FUTURA, fontWeight: 700, fontSize: "0.65rem",
            letterSpacing: "0.2em", color: "#ffc0c0", textDecoration: "none", opacity: 0.8,
          }}
        >
          ← THE COASTAL
        </Link>

        {/* Hero text */}
        <div style={{ position: "absolute", bottom: "4rem", left: "2rem" }}>
          <p style={{
            fontFamily: FUTURA, fontWeight: 700, fontSize: "0.65rem",
            letterSpacing: "0.28em", color: "#ffc0c0", opacity: 0.7, marginBottom: "1rem",
          }}>
            BERRY, NSW SOUTH COAST
          </p>
          <h1 style={{
            fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
            fontSize: "clamp(3.5rem, 8vw, 8rem)", color: "#ffc0c0", lineHeight: 0.95,
          }}>
            Berry<br />&amp; Beyond
          </h1>
        </div>

        {/* Scroll hint */}
        <p style={{
          position: "absolute", bottom: "2.2rem", right: "2rem",
          fontFamily: FUTURA, fontWeight: 700, fontSize: "0.58rem",
          letterSpacing: "0.22em", color: "#ffc0c0", opacity: 0.45,
        }}>
          SCROLL TO EXPLORE
        </p>
      </section>

      {/* Intro */}
      <section style={{
        backgroundColor: "#cd4747",
        padding: "6rem 2rem",
        display: "flex", justifyContent: "center",
      }}>
        <p style={{
          fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
          fontSize: "clamp(1.4rem, 2.6vw, 2.4rem)", color: "#ffc0c0",
          lineHeight: 1.5, maxWidth: "52ch", textAlign: "center",
        }}>
          The South Coast gives you back something most cities quietly take away.
          Time. Quiet. The pleasure of going somewhere without a plan and finding
          that everything you needed was already there.
        </p>
      </section>

      {/* Experience sections */}
      {experiences.map(({ tag, title, subtitle, body, img, imgSide, bg, textColor, imgColor }) => (
        <section
          key={title}
          style={{
            display: "flex",
            flexDirection: imgSide === "left" ? "row" : "row-reverse",
            height: "100vh",
          }}
        >
          {/* Image half */}
          <div style={{ flex: "0 0 52%", position: "relative", overflow: "hidden", backgroundColor: imgColor ?? bg }}>
            {img && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={img}
                alt={title}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
          </div>

          {/* Text half */}
          <div style={{
            flex: 1,
            backgroundColor: bg,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4rem clamp(2rem, 5vw, 5rem)",
            gap: "1.5rem",
          }}>
            <p style={{
              fontFamily: FUTURA, fontWeight: 700, fontSize: "0.58rem",
              letterSpacing: "0.28em", color: textColor, opacity: 0.5,
            }}>
              {tag}
            </p>
            <div>
              <h2 style={{
                fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
                fontSize: "clamp(2.2rem, 4vw, 4rem)", color: textColor, lineHeight: 1,
                marginBottom: "0.4rem",
              }}>
                {title}
              </h2>
              <p style={{
                fontFamily: FUTURA, fontWeight: 700, fontSize: "clamp(0.6rem, 0.9vw, 0.78rem)",
                letterSpacing: "0.14em", color: textColor, opacity: 0.55, textTransform: "uppercase",
              }}>
                {subtitle}
              </p>
            </div>
            <div style={{ width: "2.5rem", height: "1px", backgroundColor: textColor, opacity: 0.25 }} />
            <p style={{
              fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
              fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)", color: textColor,
              lineHeight: 1.7, maxWidth: "38ch", opacity: 0.85,
            }}>
              {body}
            </p>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{
        backgroundColor: "#cd4747",
        height: "50vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: "2rem",
      }}>
        <p style={{
          fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
          fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)", color: "#ffc0c0", textAlign: "center",
        }}>
          Ready to make it yours?
        </p>
        <Link
          href="/#accommodation"
          style={{
            fontFamily: FUTURA, fontWeight: 700, fontSize: "0.65rem",
            letterSpacing: "0.22em", color: "#cd4747", backgroundColor: "#ffc0c0",
            padding: "1rem 2.5rem", textDecoration: "none",
          }}
        >
          VIEW THE STAYS
        </Link>
      </section>

    </main>
  );
}
