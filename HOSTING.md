# Deployment Guide: Akshat Yadav Portfolio

This portfolio is built as a zero-dependency static site with client-side interactive canvas animations, SVG fracture shaders, and clean URLs. It is ready for one-click hosting on any major static site provider.

---

## Option 1: GitHub Pages (Recommended - Free & Instant)

Since your GitHub username is `Akshat-Yadav09`:

1. **Initialize Git inside this folder**:
   ```bash
   cd /home/aman/akshatportfolio
   git init
   git add .
   git commit -m "feat: complete Akshat Yadav game dev portfolio with itch.io projects and swarm animations"
   ```

2. **Create a new repository on GitHub**:
   - For a user site: name it `Akshat-Yadav09.github.io`
   - Or for a project site: name it `portfolio`

3. **Push to GitHub**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/Akshat-Yadav09/Akshat-Yadav09.github.io.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository **Settings** → **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select Branch: `main` / `/(root)` and click **Save**.
   - Your site will be live at `https://akshat-yadav09.github.io` in ~60 seconds!

*(A `.nojekyll` file is already included in this directory to ensure `_astro/` asset folders are served properly by GitHub Pages without being ignored).*

---

## Option 2: Vercel (Instant CLI Deploy)

1. Deploy directly using `npx vercel`:
   ```bash
   cd /home/aman/akshatportfolio
   npx vercel
   ```
2. Follow the on-screen prompts (accept defaults). Vercel will output a live production preview URL instantly.

---

## Option 3: Netlify Drop / CLI

1. Run:
   ```bash
   cd /home/aman/akshatportfolio
   npx netlify deploy --prod --dir=.
   ```
   Or drag-and-drop the `/home/aman/akshatportfolio` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

---

## Option 4: Cloudflare Pages

1. In Cloudflare Dashboard: **Workers & Pages** → **Create application** → **Pages** → **Connect to Git** (or direct upload).
2. Root directory: `/`
3. Build command: *(leave empty)*
4. Output directory: `/`
