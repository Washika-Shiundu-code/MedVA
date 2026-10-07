# -------- Builder stage --------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev deps needed for build)
RUN npm ci

# Copy rest of source
COPY . .

# Build app
RUN npm run build


# -------- Runtime stage --------
FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production


# Copy standalone output
COPY --from=builder /app/.next/standalone ./

# Copy static assets
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Copy required static assets
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

#  start the app
CMD ["node", "server.js"]