export const stays = [
  {
    slug: "the-headland-house",
    name: "The Headland House",
    kind: "House",
    tagline: "Four bedrooms. Open sky. Total privacy.",
    description:
      "The Headland House sits at the highest point of the estate, surrounded by bush on three sides and open sky on the fourth. With four bedrooms, a generous living area, and a pool that looks out over the hills, it's the estate's gathering place — made for long weekends with the people who matter most.",
    details: ["Sleeps 8", "4 Bedrooms", "Heated pool", "Full kitchen", "Outdoor dining"],
    image: "/frame1.png",
    photos: ["/frame1.png", "/frame2.png", "/frame3.png", "/frame4.png", "/frame1.png", "/frame2.png", "/frame3.png", "/frame4.png", "/frame1.png"],
  },
  {
    slug: "the-eucalypt-villa",
    name: "The Eucalypt Villa",
    kind: "Villa",
    tagline: "Two bedrooms. High ceilings. Deep quiet.",
    description:
      "The Eucalypt Villa is set among a stand of old gums, its high-pitched ceilings and wide windows pulling the bush inside. Two bedrooms, a private deck, and a timber bathtub that fills while the birds go still at dusk. A villa for those who know exactly what they need.",
    details: ["Sleeps 4", "2 Bedrooms", "Timber bathtub", "Private deck", "Outdoor shower"],
    image: "/frame2.png",
    photos: ["/frame2.png", "/frame1.png", "/frame3.png", "/frame4.png", "/frame2.png", "/frame3.png", "/frame1.png", "/frame4.png", "/frame2.png"],
  },
  {
    slug: "the-fern-villa",
    name: "The Fern Villa",
    kind: "Villa",
    tagline: "Two bedrooms. Tree ferns. Morning light.",
    description:
      "The Fern Villa is tucked into a gully where tree ferns grow tall and the morning light comes in slow. Two bedrooms open onto a private courtyard, and the kitchen is stocked with everything you need to eat well without going anywhere. Quiet, sheltered, entirely your own.",
    details: ["Sleeps 4", "2 Bedrooms", "Private courtyard", "Wood fire", "Full kitchen"],
    image: "/frame3.png",
    photos: ["/frame3.png", "/frame4.png", "/frame1.png", "/frame2.png", "/frame3.png", "/frame4.png", "/frame1.png", "/frame2.png", "/frame3.png"],
  },
  {
    slug: "the-paperbark-villa",
    name: "The Paperbark Villa",
    kind: "Villa",
    tagline: "One bedroom. Open fireplace. Just the two of you.",
    description:
      "The Paperbark Villa is the estate's most intimate stay — one bedroom, a stone fireplace, and a deep stone bath that practically demands you do nothing all weekend. The paperbark trees around it shed their bark in long quiet strips. You'll understand when you arrive.",
    details: ["Sleeps 2", "1 Bedroom", "Stone fireplace", "Deep stone bath", "Private garden"],
    image: "/frame4.png",
    photos: ["/frame4.png", "/frame3.png", "/frame2.png", "/frame1.png", "/frame4.png", "/frame3.png", "/frame2.png", "/frame1.png", "/frame4.png"],
  },
] as const;

export type Stay = (typeof stays)[number];

export function getStay(slug: string): Stay | undefined {
  return stays.find((s) => s.slug === slug);
}
