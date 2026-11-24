// Ghayyer hadchi bach tbdel ma3lomat l'brand f ga3 l'site.
export const site = {
  name: "Ma3jbnich",
  nameAr: "ما عجبنيش",
  tagline: "Kolchi ma3jbnich. Ghir hadchi 3jbni.",
  description:
    "Ma3jbnich: streetwear mkhedem f Lmghrib. Qmash mzyan, qiyas mrtah, taman m3qol, w khlass 3nd tsel.",
  // Nmra dyal WhatsApp b l'format dowali bla "+" (mital: 212612345678)
  whatsapp: "212600000000",
  whatsappDisplay: "+212 6 00 00 00 00",
  instagram: "ma3jbnich",
  email: "salut@ma3jbnich.ma",
};

export const links = [
  { href: "/", label: "Dar" },
  { href: "/about", label: "3lina" },
  { href: "/services", label: "Khadamat" },
  { href: "/contact", label: "Tawasel m3ana" },
];

export function whatsappUrl(text = "") {
  const q = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${site.whatsapp}${q}`;
}
