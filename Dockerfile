FROM ghcr.io/hugomods/hugo:std-exts-0.139.0 AS builder

COPY . .
RUN npm install && npm run build

FROM nginx:alpine3.21-slim

COPY --from=builder /src/public /usr/share/nginx/html
