# Virendra Singh Fruits Shop (Virendra Fruits & Juice Corner, Agra)

A premium, modern, responsive website built for **Virendra Singh Fruits Shop** (Brand Name: **Virendra Fruits & Juice Corner**), located in **Agra, Uttar Pradesh, India**.

---

## 🌟 Business Overview

- **Business Name**: Virendra Singh Fruits Shop
- **Brand Display Name**: Virendra Fruits & Juice Corner
- **Location**: Agra, Uttar Pradesh, India
- **Phone**: [+91 8923404646](tel:+918923404646)
- **WhatsApp**: [+91 8923404646](https://wa.me/918923404646)
- **Google Maps Listing**: [Virendra Singh Fruits Shop on Google Maps](https://www.google.com/maps/place/Virendra+Singh+Fruits+Shop/@27.1729617,77.9727776,12124m/data=!3m1!1e3!4m10!1m2!2m1!1sfruits+shop+in+agra!3m6!1s0x397471eaff27dfdf:0x80cef515816430b7!8m2!3d27.1519109!4d78.0340868!15sChNmcnVpdHMgc2hvcCBpbiBhZ3JhWhUiE2ZydWl0cyBzaG9wIGluIGFncmGSAQ5wcm9kdWNlX21hcmtldOABAA!16s%2Fg%2F11zkrwb2n9)
- **Tagline**: *"Fresh Fruits. Beautiful Baskets. Friendly Service."*
- **Specialty**: Daily fresh seasonal fruits, local delivery in nearby areas in Agra, and custom celebration fruit baskets for weddings (shagun tokri), engagements (roka hampers), festivals, and bulk orders.

---

## 🎨 Visual Design System

Built strictly following the brand aesthetic:
- **Deep Forest Green** (`#173D2B`)
- **Fresh Leaf Green** (`#4F7D46`)
- **Warm Cream** (`#F7F3E8`)
- **Soft White** (`#FFFEFA`)
- **Citrus Orange** (`#F4A340`)
- **Subtle Berry Red** (`#C94C4C`)
- **Typography**: Google Fonts (*Outfit*, *Plus Jakarta Sans*, *Playfair Display*)

---

## 📁 Project Structure

```
Virendra-Fruits-Website/
├── index.html            # Semantic, SEO-optimized HTML5 structure with bilingual data attributes
├── style.css             # Vanilla CSS design system, responsive breakpoints, sliding toggles
├── script.js             # Bilingual dictionary (Hindi/English), nav, filters, modal, WhatsApp handoffs
├── README.md             # Documentation, setup & deployment instructions
└── assets/
    └── images/           # Audited, verified high-resolution photographic assets
        ├── hero_fruits.jpg        # Hero banner fruit arrangement
        ├── basket_wedding.jpg     # Royal wedding shagun basket
        ├── basket_engagement.jpg  # Engagement & celebration wicker hamper
        ├── basket_celebration.jpg # Festive fruit tray hamper
        ├── apple.jpg              # Red apples
        ├── banana.jpg             # Naturally ripened yellow bananas
        ├── orange.jpg             # Juicy citrus oranges
        ├── grapes.jpg             # Seedless fresh grapes
        ├── mango.jpg              # Sweet seasonal mangoes
        ├── pomegranate.jpg        # Audited genuine ruby-red pomegranates
        ├── pineapple.jpg          # Audited fresh golden pineapples
        ├── watermelon.jpg         # Audited sliced sweet watermelon
        ├── papaya.jpg             # Audited fresh sliced papaya
        └── seasonal.jpg           # Assorted seasonal fruits
```

---

## ⚡ UI/UX Features & Functionality

1. **Compact, Un-Cluttered Navbar**:
   - Single-line navigation links without text wrapping.
   - Logo and brand name aligned compactly (`Virendra Fruits`).
   - Top strip displays contact phone number once, with a single compact WhatsApp icon.
   - Removed duplicate side-by-side WhatsApp buttons from the header.
2. **Instant Hindi / English Bilingual Language Switch**:
   - Segmented sliding toggle switch (`[ English | हिंदी ]`) on desktop navbar and mobile drawer.
   - Synchronized real-time translation across all headings, fruit cards, basket cards, delivery instructions, forms, and validation alerts.
   - Persistent language choice saved in local storage.
3. **Audited Fruit Photography**:
   - 100% verified photography matching each fruit (Apples, Bananas, Oranges, Grapes, Mangoes, Pomegranates, Pineapples, Watermelons, Papayas, Seasonal Fruits).
   - Corrected pomegranate image (pure ruby-red pomegranates) and pineapple image.
   - Softened claims to honest, accurate descriptions (*"In Season"*, *"Ask for today's price"*).
4. **Tasteful Brand Panel (No Fabricated Shop Photos)**:
   - Replaced AI-generated shop front with an elegant brand panel and direct link: *"View Real Shop Photos on Google Maps"*.
5. **Interactive Fruit Basket Customizer**:
   - Customizable Shagun Tokris, Roka Hampers, and Celebration Trays.
   - Structured WhatsApp inquiry generation with prefilled occasion, tier, locality, and preferred date in user's selected language.
6. **Local Delivery Guide**:
   - 3-step ordering process for nearby localities across Agra with direct locality-check WhatsApp CTA.
7. **Contact & Enquiry Form**:
   - Direct Call (`tel:+918923404646`) and WhatsApp (`https://wa.me/918923404646`).
   - Client-side validation (Name, 10-digit Indian mobile number, Locality).
   - Seamless WhatsApp handoff formatting all details into a ready-to-send message.
8. **Single Floating WhatsApp Action**:
   - Fixed, unobtrusive floating WhatsApp button with subtle pulse animation, positioned to never cover form controls.

---

## 🚀 Running Locally

```bash
python -m http.server 8080
```
Then visit: [http://localhost:8080](http://localhost:8080)

---

## 🌐 Deployment Instructions

Deployable on GitHub Pages, Vercel, or Netlify with zero build step required.
