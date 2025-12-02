
  # Designer-Ready Travel Website

  This is a code bundle for Designer-Ready Travel Website. The original project is available at https://www.figma.com/design/20Pb6qxkSPNwPdo2c81S9V/Designer-Ready-Travel-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  # Docker

  To build and run the site with Docker (multi-stage build + nginx static server):

  Build the image locally:

  ```powershell
  docker build -t trripah-website:latest .
  ```

  Run the container locally and map port 8080 -> 80:

  ```powershell
  docker run --rm -p 8080:80 trripah-website:latest
  # then visit http://localhost:8080
  ```

  Notes for DigitalOcean App Platform:

  - Option 1 (recommended): In the App Platform, choose "Web Service" and let App Platform build the Dockerfile from the repository root. The runtime will serve the static files via the included nginx configuration.
  - Option 2: Build and push the image to a container registry (Docker Hub / GitHub Container Registry / DO Container Registry) and point App Platform to the image.

  If you prefer not to use Docker, you can also deploy the built static site directly as a Static Site on App Platform (Build command: `npm run build`, Publish directory: `build`) — just make sure to configure a rewrite/fallback to `index.html` for SPA routes.

  Size / node_modules notes:

  - I removed an unused dependency (`docker`) and moved Tailwind build plugins into `devDependencies` to reduce install footprint when App Platform runs installs.
  - If you're deploying as a static site (no Docker), App Platform will run a full `npm install` during the build; to minimize size, you can:
    - Use a Docker build (recommended) so final image only contains the static `build/` output.
    - Or update the repo to use a lighter package manager (pnpm) or split out big optional packages.

  To refresh lockfile locally after these changes run:

  ```powershell
  npm install
  ```

  If you want to locally prune node_modules to only production deps (not needed for Docker-based deploy where build happens inside the image) run:

  ```powershell
  npm ci --omit=dev
  ```

  Check Docker image size locally (once you have Docker installed):

  ```powershell
  docker build -t trripah-website:latest .
  docker images trripah-website --format "{{.Repository}}: {{.Tag}} — {{.Size}}"
  ```

  If the image is larger than 120MB and you want me to help further reduce it, I can:

  - Remove or replace large runtime libraries (e.g. charts, icons) if those features aren't required.
  - Migrate the project to pnpm which drastically reduces disk usage in installs.
  - Add a CI job that builds a Docker image for you and prints the image size so you can monitor regressions.

# trripah_website
Main website of trripah
