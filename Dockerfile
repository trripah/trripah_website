# Multi-stage Dockerfile for building the Vite React app and serving it with nginx

# --- Build stage ---
FROM node:18-alpine AS build
WORKDIR /app

# Copy only package manifests first for install caching
COPY package*.json ./

# If lockfile exists use npm ci, otherwise fallback to npm install
RUN if [ -f package-lock.json ]; then npm ci --no-audit --no-fund; else npm install --no-audit --no-fund; fi

# Copy app sources and run the build
COPY . .
RUN npm run build && npm cache clean --force


# --- Production stage ---
FROM nginx:stable-alpine AS prod

# Copy site built assets from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Replace default nginx configuration with our SPA-friendly config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
