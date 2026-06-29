# SuccessPulse Staging Deployment

Target domain:

```text
https://successpulse.biacibenga.com
```

## Build

Install dependencies and build the Vite SPA:

```sh
npm install
npm run build
```

Output directory:

```text
dist/
```

## DNS Requirement

Create an `A` record for:

```text
successpulse.biacibenga.com
```

Point it to the public IP address of the staging web server. Wait for DNS propagation before requesting HTTPS certificates.

## Nginx SPA Config Example

```nginx
server {
    listen 80;
    server_name successpulse.biacibenga.com;

    root /var/www/successpulse-staging/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|webp|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    location = /robots.txt {
        try_files $uri =404;
    }

    location = /sitemap.xml {
        try_files $uri =404;
    }
}
```

Validate and reload Nginx:

```sh
sudo nginx -t
sudo systemctl reload nginx
```

## HTTPS With Certbot

After DNS resolves to the server:

```sh
sudo certbot --nginx -d successpulse.biacibenga.com
```

Verify renewal:

```sh
sudo certbot renew --dry-run
```

## Deployment Copy Example

From a CI runner or local machine:

```sh
npm run build
rsync -av --delete dist/ deploy@SERVER_IP:/var/www/successpulse-staging/dist/
```

## Rollback Steps

1. Keep the previous `dist` release as a timestamped folder, for example:

```text
/var/www/successpulse-staging/releases/2026-06-29-2300/dist
```

2. If the new release fails validation, repoint the active symlink:

```sh
sudo ln -sfn /var/www/successpulse-staging/releases/PREVIOUS_RELEASE/dist /var/www/successpulse-staging/dist
sudo nginx -t
sudo systemctl reload nginx
```

3. Re-run smoke checks:

```sh
curl -I https://successpulse.biacibenga.com
curl -I https://successpulse.biacibenga.com/platform
curl -I https://successpulse.biacibenga.com/sitemap.xml
```

## Post-Deploy Checks

Run from a machine that can access staging:

```sh
npm run milestone:assets -- https://successpulse.biacibenga.com
```

Expected Lighthouse targets:

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100
