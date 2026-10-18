# Akshat's Portfolio (`akshatportfolio`)

A faithful, high-performance static clone and architectural setup of [werlinger.dev](https://werlinger.dev/) ready for personalization.

## 📁 What's Included

- **Complete Site Structure & Assets**:
  - `index.html`: Main landing page with the interactive particle/swarm canvas, typewriter cursor, project showcase grid, writing index, and footer.
  - `projects/`: Detailed subpages for all showcase projects (`lific`, `omnith`, `imagineapp`, `rebang`, `autogpt`, `colonycopilot`, `banana-farmer-tower`).
  - `writing/`: Full blog/article pages and writing index.
  - `ai/`: Autonomous AI policy page (`/ai`).
  - `_astro/`: Original compiled CSS stylesheets, JavaScript interactive runtime (swarm simulation canvas), and IBM Plex Mono / Archivo web fonts.
  - `swarm/`: Spritesheets and JSON animation mappings for the little workers (`crew`), the desk programmer (`programmer-rework`), and scene items (`props`).
  - `assets/` & `media/`: Project images, WebP assets, and demo media.

## 🚀 How to Run Locally

You can run the portfolio server with either Node.js or Python without needing any external dependencies:

### With Node.js:
```bash
cd /home/aman/akshatportfolio
npm start
# or: node serve.js
```

### With Python:
```bash
cd /home/aman/akshatportfolio
python3 serve.py
```

Then open your browser at **`http://localhost:3000`**.

## 🛠️ Customizing for Akshat

1. **Header & Name**: Edit `index.html` lines containing `Blake Werlinger` and glyph spans (`glyph-0`, `glyph-1`, etc.) to spell `Akshat`.
2. **Skills & Tagline**: Update the `.catalogue` list (`c#`, `python`, `typescript`, etc.).
3. **Projects**: Edit `.plate-grid` items in `index.html` and markdown/HTML in `projects/` with your own projects, screenshots, and live links.
4. **Writing / Blog**: Add or replace articles in `writing/`.
5. **Contact & Socials**: Update email address and GitHub link in `index.html` and footer.
