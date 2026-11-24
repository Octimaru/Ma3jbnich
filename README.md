# Ma3jbnich

Brand website for Ma3jbnich (streetwear, Morocco). Next.js (App Router) + React, dark green and black theme, copy in Darija.

Pages: Dar (`/`), 3lina (`/about`), Khadamat (`/services`), Tawasel m3ana (`/contact`).

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Change your brand details

Open `lib/site.js` and replace:

- `whatsapp`: your number in international format, no `+` (example: `212612345678`)
- `whatsappDisplay`, `instagram`, `email`

Products, prices and Darija copy are placeholders. Edit them in `app/page.js`, `app/about/page.js` and `app/services/page.js`. Colors are CSS variables at the top of `app/globals.css`.

To use real product photos, put images in `public/` and swap the `<Garment />` component in `app/page.js` for `next/image`.

## Deploy: GitHub then Vercel

1. Create an empty repository on GitHub (for example `ma3jbnich`). Do not add a README there.
2. In this folder, run:

```bash
git init
git add .
git commit -m "First version"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ma3jbnich.git
git push -u origin main
```

3. Go to https://vercel.com/new, sign in with GitHub, and import the `ma3jbnich` repository.
4. Keep the default settings (Vercel detects Next.js automatically) and click Deploy.

From then on, every `git push` to `main` redeploys the site automatically.

To use your own domain (for example `ma3jbnich.ma`), open the project in Vercel, go to Settings, then Domains.
