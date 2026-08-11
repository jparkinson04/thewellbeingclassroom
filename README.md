# The Wellbeing Classroom — website starter

A static-site starter for thewellbeingclassroom.co.uk, ready to build on with Claude Code.

## What's inside
```
wellbeing-classroom/
├── index.html            Finished one-page site with all approved content
├── styles/tokens.css     Brand colours & fonts (edit here to change the whole theme)
├── styles/main.css       The "notepad" design system
├── content/site-copy.md  All approved messaging — the source of truth for copy
├── CLAUDE.md             Project brief Claude Code reads automatically
└── README.md             This file
```

## Preview it right now
Just open `index.html` in a browser — no build step, no install.
(For live-reload while editing: `npx serve .` or VS Code's Live Server extension.)

## Setting up Claude Code
You'll need a Claude subscription (Pro, Max, Team or Enterprise) or a Claude Console
account — Claude Code isn't included on the free plan.

Install (macOS / Linux / WSL):
```
curl -fsSL https://claude.ai/install.sh | bash
```
Windows (PowerShell):
```
irm https://claude.ai/install.ps1 | iex
```
Then, from this folder:
```
cd wellbeing-classroom
claude
```
On first run it opens your browser to sign in. Claude Code reads `CLAUDE.md`
automatically, so it will already know the brand, design system and roadmap.

Full docs: https://code.claude.com/docs/en/quickstart
(Claude Code is also available as a desktop app and VS Code extension if you
prefer not to work in a terminal.)

## Good first prompts
- "Add a mobile hamburger menu for the nav, matching the notepad design system."
- "Split index.html into the multi-page structure described in CLAUDE.md,
   with a shared nav and footer on every page."
- "Switch the palette to the Raspberry & Custard alternate in tokens.css and
   check colour contrast still passes."
- "Build a contact page with a form (suggest a static-friendly form service),
   keeping the placeholders marked until we have real details."
- "Add SEO meta tags and LocalBusiness structured data for a Yorkshire service area."

## Before launch — checklist
- [ ] Confirm final colourway with Clare (default is Rose & Mint)
- [ ] Replace placeholder testimonials with genuine quotes
- [ ] Real email, phone number and domain (check availability!)
- [ ] Photos of Clare / sessions (with any required permissions)
- [ ] Proofread pricing against Clare's latest figures
- [ ] Privacy policy & accessibility statement pages
- [ ] Choose hosting (any static host works: Netlify, Cloudflare Pages, GitHub Pages…)
# thewellbeingclassroom
