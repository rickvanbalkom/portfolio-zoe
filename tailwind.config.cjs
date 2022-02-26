module.exports = {
    content: [
      './public/**/*.html',
      './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
    ],
    theme: {
      extend: {
        gridTemplateColumns: {
          'project': '36.4% 13.6% 50%'
        }
      },
      fontFamily: {
        'sans': ['Calibri', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Robot', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
      }
    }
  };