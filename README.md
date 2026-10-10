# Aadishakti Yogshaala — आदिशक्ति योगशाला

Website for a traditional yoga shaala, built with Next.js 16 (App Router),
React 19, Tailwind CSS v4 and Motion.

## Running it

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint
```

## Pages

| Route       | Contents                                                      |
| ----------- | ------------------------------------------------------------- |
| `/`         | Hero, stats, about, classes, timetable, teachers, gallery, testimonials, pricing, FAQ |
| `/about`    | Story, 2007–today timeline, four principles                   |
| `/classes`  | All ten practices in detail, plus trainings and retreats      |
| `/schedule` | Full morning and evening timetable, Sunday satsang            |
| `/teachers` | The five teachers and how they teach                          |
| `/pricing`  | Four membership plans and course fees                         |
| `/gallery`  | Masonry gallery with a keyboard-navigable lightbox            |
| `/contact`  | Enquiry form, contact details and map                         |

## Editing content

Almost everything a studio owner needs to change lives in **`lib/data.ts`**:

- `SITE` — name, phone, WhatsApp, email, address, map location, opening hours, socials
- `CLASSES` — the ten practices (name, level, duration, intensity, description, benefits)
- `MORNING` / `EVENING` / `SUNDAY` — the timetable; each session has a start and end
  time in 24-hour form, teacher, hall, day pattern, mat count and whether it streams
- `TEACHERS`, `PROGRAMMES`, `PLANS`, `BENEFITS`, `TESTIMONIALS`, `FAQS`, `GALLERY`

Images are registered in **`lib/images.ts`**. The hero mural is a local file at
`public/images/hero-shiva-shakti.webp`; the photographs are remote and served
through `next/image`.

### Replacing the stock photography

The photographs are Unsplash placeholders. To use the shaala's own pictures, drop
them in `public/images/` and point the keys in `lib/images.ts` at the local paths —
nothing else needs to change.

Two worth replacing first:

- **Kids Yoga** uses an adult outdoor class as a stand-in (no suitable stock photo
  of a children's yoga class was available). It is marked with an `imageAlt` note
  in `lib/data.ts`.
- **Prenatal** uses a general meditation photograph.

## The enquiry form

`POST /api/enquiry` (`app/api/enquiry/route.ts`) validates name, email and phone
server-side and currently logs the enquiry to the server console. To receive
enquiries for real, send them on from that handler — to email, a CRM, a sheet or
WhatsApp.

## Notes

- Dark cosmic palette derived from the hero mural; tokens are defined in
  `app/globals.css` under `@theme`.
- Type is Cormorant Garamond (display), Jost (body) and Tiro Devanagari Hindi
  for the Sanskrit lines. The fonts are **self-hosted** from `public/fonts/`
  and declared in `app/fonts.css` — deliberately not `next/font/google`, which
  downloads at build time and fails on any host that cannot reach
  fonts.googleapis.com (this broke the Vercel build). The build now needs no
  network at all.
- Every animation is suppressed under `prefers-reduced-motion`.
- Placeholder details to change before launch: phone number, email, street
  address and the social links in `SITE`.
