import catppuccin from "@catppuccin/tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}", // only if you're using the /app directory (Next.js 13+)
  ],
  theme: {
    extend: {},
  },
  plugins: [
    catppuccin({
      // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
      // default is `false`, which means no prefix
      prefix: "ctp",
      // which flavour of colours to use by default, in the `:root`
      defaultFlavour: "latte",
    }),
  ],
};
