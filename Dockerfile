# -----------------------------
# Stage 1: Build the Next.js app
# -----------------------------
FROM node:22-alpine AS builder

WORKDIR /app

# Copy only dependency files first for layer caching
COPY package*.json ./
RUN npm ci

# Copy all source code
COPY . .

# Ensure a clean build output
RUN rm -rf .next
RUN npm run build

# -----------------------------
# Stage 2: Run the production build
# -----------------------------
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "run", "start"]
