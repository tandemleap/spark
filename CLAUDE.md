# SPARK — CLAUDE.md

## Project Overview
**SPARK** (Student Pathways to Adventure, Resilience and Knowledge) is a youth drop-in center in Ashland, WI. Scott Griffiths is Program Director.

- **Live site:** lightyourspark.org
- **Repo:** github.com/tandemleap/spark
- **Local:** /Users/scottgriffiths/spark
- **Deployed via:** Vercel (auto-deploy from main branch)
- **DNS:** Namecheap — A record @ → 216.198.79.1, CNAME www → cname.vercel-dns.com

## Files
- `index.html` — main public-facing site (single-page)
- `stafflinks.html` — password-protected internal staff tools page
- `spark-logo.png` — official logo (used in nav top-left and stafflinks gate)
- `treat-bike.png` — treat bike illustration

## Stack
Plain HTML/CSS/JS. No framework, no build step. Edit files directly and push to deploy.

## Design System
**Fonts:** Fredoka One (headings/display) + Nunito (body)

**Colors:**
```
--navy:   #1B2E4A
--yellow: #FFD000
--orange: #FF6B2B
--sky:    #4A90D9
--green:  #4BAF47
--cream:  #FDF8F2
--warm-white: #FFFDF9
--text:   #1B2E4A
--muted:  #5a6a7a
```

## index.html — Page Sections (in order)
1. Nav (sticky, with spark-logo.png top-left)
2. Hero — logo, tagline, registration + reservations CTAs
3. About SPARK
4. What We Offer (activity cards)
5. Calendar (Airtable embed)
6. Family Workshops
7. Contact / Visit Us
8. Footer

**Key links in index.html:**
- Registration: https://form.fillout.com/t/ns2zhYqgdgus
- Reservations: https://bit.ly/go2spark3
- Airtable calendar embed view: shr1dFAzIrdvs7p2d (base: app8YHLM4yub0RLu8)
- Family Workshops signup: http://forms.gle/thT9yw4PppGc8jgx9
- Facebook: facebook.com/sparkashlandcounty

**Contact info:**
- Phone/text: 715.600.3001 (Scott or Liesl)
- Text only: 715.227.9911
- Email: info@lightyourspark.org
- Address: 422 3rd St. W., Ashland WI (south end of Ashland Area Enterprise Center)

## stafflinks.html — Staff Tools Page
Password-protected page for internal staff use only.

**Password gate:** Password stored in JS (`checkPw()` function), uses `sessionStorage` key `spark-staff` to persist for the session. Ask Scott for the password.

**Embedded tools (in order):**
1. Today's Reservations — Airtable embed (app8YHLM4yub0RLu8/shrDRqH2cNlFjsuLn)
2. Tomorrow's Reservations — Airtable embed (app8YHLM4yub0RLu8/shrLnfsc2YqwqpEaj)
3. Create a New Event — Airtable form (app8YHLM4yub0RLu8/shrNDxc7q8cMpPonv)
4. Simple Attendance Form — Fillout embed (7hdK2vyxFeus)
5. Off-Site Hours Tracking — Airtable form (appCy2sV6TsbkDyE2/pagWa9umW9X6BI52I/form)
6. Record a Receipt — Airtable form (appYTWAOIQBu89BBj/shrHMVMx2YSojBeZ5)

**Quick links (open in new tab):**
- Add single-day event: https://airtable.com/app8YHLM4yub0RLu8/shrNDxc7q8cMpPonv
- Add overnight event: https://airtable.com/app8YHLM4yub0RLu8/shrdPbq9fki6d5hL9
- Simple attendance: https://form.fillout.com/t/7hdK2vyxFeus
- Record a receipt: https://airtable.com/appYTWAOIQBu89BBj/shrHMVMx2YSojBeZ5
- Track off-site hours: https://airtable.com/appCy2sV6TsbkDyE2/pagWa9umW9X6BI52I/form

## Airtable
- Main events base ID: `app8YHLM4yub0RLu8`
- Current calendar embed view: `shr1dFAzIrdvs7p2d`
- **Pending:** Replace Airtable calendar embed with a custom-built visual calendar
  - Need: Airtable personal access token + field names from the events table
  - Plan: fetch via Airtable API, render custom monthly calendar styled to match SPARK site

## Git / Deploy
```bash
git add index.html stafflinks.html   # or specific files
git commit -m "description"
git push
```
Vercel auto-deploys on push to main. No build command needed.
