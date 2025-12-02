
  # Designer-Ready Travel Website

  This is a code bundle for Designer-Ready Travel Website. The original project is available at https://www.figma.com/design/20Pb6qxkSPNwPdo2c81S9V/Designer-Ready-Travel-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  # Notes
  - Docker support: a multi-stage `Dockerfile` is included so you can build a container and deploy using Docker.
  - Tailwind change: the project no longer uses the ESM-only `@tailwindcss/vite` plugin. Tailwind is now integrated via PostCSS using `@tailwindcss/postcss` and `autoprefixer` in `postcss.config.cjs`. This resolves ES module require() errors in some build environments (e.g. DigitalOcean App Platform).
# trripah_website
Main website of trripah
