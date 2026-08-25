# Sea Coast Shipping LLC — Digital Business Cards

A small Next.js site that gives each person a mobile-friendly digital
business card at its own URL (e.g. `/bhabani`). Every row is tappable —
call, WhatsApp, email, website, address — plus a **Save Contact** button
that drops the person straight into the visitor's phone contacts.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 for the directory, or go straight to
http://localhost:3000/bhabani

## Edit the details

Two files, and nothing else:

| What                                            | File                  |
| ----------------------------------------------- | --------------------- |
| A person's name, title, phone, WhatsApp, email  | `src/data/employees.js` |
| Company name, address, services, website, logo  | `src/data/company.js`   |

### Adding someone new

1. Open `src/data/employees.js` and copy the commented `{ ... }` block.
2. Change the details. `slug` becomes the URL, so slug `nimal` → `/nimal`.
3. Save their photo as `public/employees/<slug>.jpg` — square, around
   512×512 looks best.
4. Save. Their card is live.

### Things that are intentionally blank

The printed card carries no email address or website, so both are empty:

- **Email** — set `email` on the person in `src/data/employees.js`.
- **Website** — set `website` in `src/data/company.js`.

Each row only appears once you fill it in, so the card never shows an
empty field. The same goes for `officePhone` (a landline) and
`countries` in `company.js` (adds a "Where we operate" row).

## The links

- **Mobile / Office** → `tel:` opens the phone dialer.
- **WhatsApp** → opens WhatsApp with a pre-filled greeting.
- **Email** → opens the mail app. Set `emailMode` in `company.js`:
  - `"mailto"` (default) → the visitor's default mail app.
  - `"outlook"` → always opens Outlook-on-the-web compose.
- **Website / Address** → open the site / Google Maps.
- **Save Contact** → downloads a `.vcf` the phone offers to add to contacts.
  It carries the name, title, company, numbers, address, and a note with
  his qualifications and the company's services.

## Logo files

All generated from the logo in `public/`:

| File                      | Used for                                     |
| ------------------------- | -------------------------------------------- |
| `logo-lockup-white.png`   | The navy card header (white knockout)        |
| `logo-lockup.png`         | The directory page (full colour, horizontal) |
| `logo-full.png`           | Stacked logo, full colour — spare            |
| `logo-white.png`          | Stacked logo, white knockout — spare         |
| `icon.png`, `apple-touch-icon.png` | Browser tab + phone home screen     |

## QR codes

Point each QR at the card URL, e.g. `https://cards.seacoastshipping.com/bhabani`.
Generate the images from any QR generator once the site is deployed.

## Deploy

### Vercel (simplest, custom domain)

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project**, import the repo. Next.js is detected
   automatically. Deploy.
3. Add the custom domain in Project → Settings → Domains.

> This is a commercial site, so use a Vercel **Pro** plan — the free Hobby
> plan is for non-commercial use only.

### GitHub Pages (free)

The workflow in `.github/workflows/nextjs.yml` builds and publishes on
every push to `main`. Two things to check:

1. In `next.config.mjs`, `repoName` must match the repository name
   exactly — it becomes the URL prefix.
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
