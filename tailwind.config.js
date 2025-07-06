
export default {
  content: ['./index.html', './src/**/*.{vue, js, ts, jsx, tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'vt323': ['VT323', 'monospace'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}

