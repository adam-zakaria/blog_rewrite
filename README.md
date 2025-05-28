# Install dependencies
`npm i`

# Run
`npm run dev`

# Additional Notes
This explains how this template was created, not what an end user should do to use the template :)

## Install Tailwind

https://tailwindcss.com/docs/installation/using-postcss

* Update postcss.config.js to postcss.config.cjs

* For tailwind.config.js, we want to also build .html and .js in /, so we added the second element to content.

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

## DNS Configuration
This is route53 specific. Route53 is a registrar where a domain can be paid for. It stores DNS records - where a group of DNS records for a domain is called a 'hosted zone'. Upon domain creation, two records are created automatically. 'NS' (a group of NS for the domain) and 'SOA' (a DNS authority for the domain). Ideally, a previous configuration can be used for the other records needed: A, TXT, and CNAME. 

A - maps domain to IP
TXT - used for certs
CNAME - used to get www.<domain>.com to resolve to <domain>.com

A - adamzakaria.org : 54.167.31.12
TXT -  _acme-challenge.fluent.monster : "337bvLGk3x4X8N_Y9o41ybGo-BZmJiYR5QGzystKVEw" "3IPxlg1rHevT0YQa8oArxNoW_uOTQd15Iy5_DJIjREs"
CNAME - www.fluent.monster : fluent.monster

For TXT the server (nginx) needs to be configured so that certbot can generate certs for it. This involves adding a server block for nginx, which right now is being done by creating a symlink here:
sudo ln -sf /etc/nginx/sites-enabled/default ~/nginx-config/default
There is some weird issue where the file can be created with touch and can be written with tee, but vim cannot write the file. Disconcerting, but don't dwell on it and make do happily.
```
echo 'server { listen 80; server_name adamzakaria.org; location / { proxy_pass http://localhost:5174; proxy_http_version 1.1; proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection "upgrade"; proxy_set_header Host $host; proxy_cache_bypass $http_upgrade; } }' | sudo tee /etc/nginx/sites-available/adamzakaria_org
```



DNS configuration is confusing - don't try to understand their language, use your own.
