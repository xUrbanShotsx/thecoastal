import Link from "next/link";

const FUTURA = "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif";

export default function OurStoreyPage() {
  return (
    <main>

      {/* Hero */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden", backgroundColor: "#2c3529" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Trialimage.png"
          alt="The Coastal estate"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)" }} />

        <Link href="/" style={{
          position: "absolute", top: "2rem", left: "2rem",
          fontFamily: FUTURA, fontWeight: 700, fontSize: "0.65rem",
          letterSpacing: "0.2em", color: "#ffc0c0", textDecoration: "none", opacity: 0.8,
        }}>
          ← THE COASTAL
        </Link>

        <div style={{ position: "absolute", bottom: "4rem", left: "2rem" }}>
          <p style={{
            fontFamily: FUTURA, fontWeight: 700, fontSize: "0.65rem",
            letterSpacing: "0.28em", color: "#ffc0c0", opacity: 0.65, marginBottom: "1rem",
          }}>
            MARK & RACHEL
          </p>
          <h1 style={{
            fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
            fontSize: "clamp(3.5rem, 8vw, 8rem)", color: "#ffc0c0", lineHeight: 0.95,
          }}>
            Our<br />Storey
          </h1>
        </div>

        <p style={{
          position: "absolute", bottom: "2.2rem", right: "2rem",
          fontFamily: FUTURA, fontWeight: 700, fontSize: "0.58rem",
          letterSpacing: "0.22em", color: "#ffc0c0", opacity: 0.4,
        }}>
          BERRY, NSW
        </p>
      </section>

      {/* Opening quote */}
      <section style={{
        backgroundColor: "#cd4747",
        padding: "7rem 2rem",
        display: "flex", justifyContent: "center",
      }}>
        <p style={{
          fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
          fontSize: "clamp(1.5rem, 2.8vw, 2.6rem)", color: "#ffc0c0",
          lineHeight: 1.5, maxWidth: "46ch", textAlign: "center",
        }}>
          Some places find you. This block of land, perched above Berry with bush
          on three sides and the valley stretching out below — it wasn&rsquo;t
          something we went looking for. It was something we couldn&rsquo;t walk away from.
        </p>
      </section>

      {/* The find — image left, text right */}
      <section style={{ display: "flex", height: "100vh" }}>
        <div style={{ flex: "0 0 50%", position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/exp1.jpg" alt="The land" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{
          flex: 1, backgroundColor: "#ffc0c0",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "4rem clamp(2rem, 5vw, 5rem)", gap: "1.8rem",
        }}>
          <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.58rem", letterSpacing: "0.28em", color: "#cd4747", opacity: 0.5 }}>
            THE BEGINNING
          </p>
          <h2 style={{
            fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
            fontSize: "clamp(2rem, 3.5vw, 3.5rem)", color: "#cd4747", lineHeight: 1,
          }}>
            The block that stopped us in our tracks
          </h2>
          <div style={{ width: "2.5rem", height: "1px", backgroundColor: "#cd4747", opacity: 0.25 }} />
          <p style={{
            fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
            fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)", color: "#cd4747",
            lineHeight: 1.8, maxWidth: "38ch", opacity: 0.85,
          }}>
            We&rsquo;d been coming to the South Coast for years — weekends away,
            long drives through the escarpment country, lunches in Berry that
            stretched into the afternoon. We knew this part of the world well.
            But the day we walked this land, something shifted. The light. The
            stillness. The way the bush held the property on every side. We knew
            before we got back to the car.
          </p>
        </div>
      </section>

      {/* Mark & Rachel — full width text section */}
      <section style={{
        backgroundColor: "#cd4747",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "70vh",
      }}>
        {/* Left — large label */}
        <div style={{
          padding: "6rem 4rem",
          display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.5rem",
          borderRight: "1px solid rgba(255,192,192,0.15)",
        }}>
          <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.58rem", letterSpacing: "0.28em", color: "#ffc0c0", opacity: 0.5 }}>
            MARK & RACHEL
          </p>
          <h2 style={{
            fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
            fontSize: "clamp(2.5rem, 4.5vw, 5rem)", color: "#ffc0c0", lineHeight: 0.95,
          }}>
            A shared vision, built by hand
          </h2>
          <div style={{ width: "2.5rem", height: "1px", backgroundColor: "#ffc0c0", opacity: 0.25 }} />
          <p style={{
            fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
            fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)", color: "#ffc0c0",
            lineHeight: 1.8, maxWidth: "36ch", opacity: 0.8,
          }}>
            Mark had spent twenty years in construction. Rachel in interior
            design. Between them, they had the skills to build something
            exceptional — but the ambition had always been the same: to create
            spaces where people could properly rest. Not just sleep. Rest.
          </p>
        </div>

        {/* Right — secondary copy */}
        <div style={{
          padding: "6rem 4rem",
          display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.5rem",
        }}>
          <p style={{
            fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
            fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)", color: "#ffc0c0",
            lineHeight: 1.8, opacity: 0.8,
          }}>
            The idea was never a resort. Never a development. It was always four
            stays — each one distinct, each one considered, each one designed to
            feel like it had grown from the land it sat on.
          </p>
          <p style={{
            fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
            fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)", color: "#ffc0c0",
            lineHeight: 1.8, opacity: 0.8,
          }}>
            They spent two years working with local architects and builders, sourcing
            materials that would age well and sit honestly in the landscape. Timber
            from a sawmill an hour north. Stone pulled from a property down the
            valley. Windows that opened the stays to the bush rather than keeping
            it at arm&rsquo;s length.
          </p>
          <p style={{
            fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
            fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)", color: "#ffc0c0",
            lineHeight: 1.8, opacity: 0.8,
          }}>
            Every decision started with the same question: would we want to stay here?
          </p>
        </div>
      </section>

      {/* The build — image right, text left */}
      <section style={{ display: "flex", flexDirection: "row-reverse", height: "100vh" }}>
        <div style={{ flex: "0 0 55%", position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/frame1.png" alt="The build" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{
          flex: 1, backgroundColor: "#ffc0c0",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "4rem clamp(2rem, 5vw, 5rem)", gap: "1.8rem",
        }}>
          <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.58rem", letterSpacing: "0.28em", color: "#cd4747", opacity: 0.5 }}>
            THE BUILD
          </p>
          <h2 style={{
            fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
            fontSize: "clamp(2rem, 3.5vw, 3.5rem)", color: "#cd4747", lineHeight: 1,
          }}>
            Two years of mornings on site
          </h2>
          <div style={{ width: "2.5rem", height: "1px", backgroundColor: "#cd4747", opacity: 0.25 }} />
          <p style={{
            fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
            fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)", color: "#cd4747",
            lineHeight: 1.8, maxWidth: "38ch", opacity: 0.85,
          }}>
            Mark was on site most mornings. Rachel spent weekends driving between
            suppliers, holding fabric samples up to the light, returning things
            that were almost right. The build was unhurried — not because it was
            easy, but because they refused to settle. Every join, every material,
            every view from every window was decided with intention.
          </p>
          <p style={{
            fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
            fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)", color: "#cd4747",
            lineHeight: 1.8, maxWidth: "38ch", opacity: 0.85,
          }}>
            When the last stay was finished, they spent a week there alone before
            opening the gates. Just to make sure it felt right.
          </p>
          <p style={{
            fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
            fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)", color: "#cd4747",
            lineHeight: 1.8, maxWidth: "38ch", opacity: 0.85,
          }}>
            It did.
          </p>
        </div>
      </section>

      {/* Philosophy — centred on pink */}
      <section style={{
        backgroundColor: "#ffc0c0",
        padding: "8rem 2rem",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "3rem",
      }}>
        <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.58rem", letterSpacing: "0.28em", color: "#cd4747", opacity: 0.5 }}>
          THE PHILOSOPHY
        </p>
        <p style={{
          fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
          fontSize: "clamp(1.6rem, 3vw, 3rem)", color: "#cd4747",
          lineHeight: 1.4, maxWidth: "32ch", textAlign: "center",
        }}>
          We didn&rsquo;t build The Coastal to fill it. We built it to give people
          somewhere worth going.
        </p>
        <div style={{ width: "3rem", height: "1px", backgroundColor: "#cd4747", opacity: 0.3 }} />
        <p style={{
          fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
          fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)", color: "#cd4747",
          lineHeight: 1.8, maxWidth: "44ch", textAlign: "center", opacity: 0.75,
        }}>
          The estate is small by design. Four stays, each with its own character.
          No reception. No check-in desk. Just a set of keys, a property that is
          entirely yours, and the kind of quiet that takes a day to settle into
          and a week to forget.
        </p>
      </section>

      {/* Estate today — full width image with overlay */}
      <section style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/exp2.jpg" alt="The estate today" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: "1.5rem", padding: "2rem",
        }}>
          <p style={{ fontFamily: FUTURA, fontWeight: 700, fontSize: "0.58rem", letterSpacing: "0.28em", color: "#ffc0c0", opacity: 0.65 }}>
            THE COASTAL, BERRY
          </p>
          <p style={{
            fontFamily: "Canela, serif", fontStyle: "italic", fontWeight: 300,
            fontSize: "clamp(1.8rem, 3.5vw, 3.8rem)", color: "#ffc0c0",
            lineHeight: 1.2, textAlign: "center", maxWidth: "20ch",
          }}>
            Four stays. One estate. Entirely yours.
          </p>
        </div>
      </section>

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
          Come and see what we made.
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
