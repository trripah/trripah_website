
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

# trripah_website
Main website of trripah
