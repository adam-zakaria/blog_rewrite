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

