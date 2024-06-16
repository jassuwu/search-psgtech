FROM oven/bun:latest AS base

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun i

COPY . .

RUN bun run build

FROM oven/bun:latest AS runner

WORKDIR /app

ENV NODE_ENV production

COPY --from=base /app/public ./public
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static
COPY --from=base /app/node_modules ./node_modules

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nodejs /app/.next

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD HOSTNAME="0.0.0.0" bun server.js
