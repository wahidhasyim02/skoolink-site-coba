FROM ghcr.io/hugomods/hugo:std-exts-0.139.0 AS builder

COPY . .
RUN npm install && npm run build


FROM nginx:alpine3.21-slim AS static
COPY --from=builder /src/public /usr/share/nginx/html


FROM nginx:alpine3.21-slim
RUN apk add rsync openssh-client-default
COPY --from=builder /src/public /usr/share/nginx/html

ARG SITE_USER=skoolink_site

RUN --mount=type=secret,id=sshkey,dst=id_ssh \
    rsync -avz -e "ssh -i id_ssh -o StrictHostKeyChecking=no" \
    /usr/share/nginx/html/ ${SITE_USER}@skoolink.id:x-skoolink.id/
