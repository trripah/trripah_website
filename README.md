
  # Designer-Ready Travel Website

  This is a code bundle for Designer-Ready Travel Website. The original project is available at https://www.figma.com/design/20Pb6qxkSPNwPdo2c81S9V/Designer-Ready-Travel-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  # Notes
  - Docker support: a multi-stage `Dockerfile` is included so you can build a container and deploy using Docker.
  - Tailwind change: the project no longer uses the ESM-only `@tailwindcss/vite` plugin. Tailwind is now integrated via PostCSS using `@tailwindcss/postcss` and `autoprefixer` in `postcss.config.cjs`. This resolves ES module require() errors in some build environments (e.g. DigitalOcean App Platform).

  ## Deploying as a static site on DigitalOcean App Platform

  If you want the project to be deployed as a static site in DigitalOcean App Platform, use the following settings when creating the App Platform component:

  - Build & Run commands:
    - Build command: npm ci --no-audit --no-fund && npm run build
    - Start command: (none) — App Platform will serve the built static files
  - Output directory (absolute path inside the build container): /app/build

  Notes:
  - The project requires Node 18+ for the build (see `engines` in package.json). App Platform will automatically pick the Node version if set in the project config.
  - Alternatively you can use the included `Dockerfile` to build a container image and deploy that as a service.
# trripah_website
Main website of trripah
