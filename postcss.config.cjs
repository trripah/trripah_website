module.exports = {
  plugins: [
    // Tailwind v4 moved the PostCSS plugin into @tailwindcss/postcss
    require('@tailwindcss/postcss')(),
    require('autoprefixer')(),
  ],
}
// PostCSS is configured to use Tailwind CSS and Autoprefixer directly.
// Using `tailwindcss` plugin avoids requiring the internal @tailwindcss/postcss package.
