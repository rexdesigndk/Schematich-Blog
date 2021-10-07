module.exports = {
  purge: {
    content: [
      './resources/**/*.antlers.html',
      './resources/**/*.blade.php',
      './content/**/*.md'
    ]
  },
  darkMode: 'media',
  important: true,
  theme: { 
    fontFamily: {
        'stack': [            
            "Inter",
            "Roboto",
            "San Francisco",
            "Akkurat",
            "Asap",
            "Lucida Grande",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "sans-serif"
        ],
    },
    container: {
        center: true
    },
    extend: {
        "colors": {
            "primary": "var(--primary)",
            "primaryFrom": "var(--primaryFrom)",
            "primaryTo": "var(--primaryTo)",
            "secondary": "var(--secondary)",
            "backgroundMain": "var(--backgroundMain)",
            "backgroundLight": "var(--backgroundLight)",
            "backgroundLighter": "var(--backgroundLighter)",
            "backgroundPrimary": "var(--backgroundPrimary)",
            "backgroundPrimary": "var(--backgroundShape)",
            "txtMain": "var(--txtMain)",
            "txtLight": "var(--txtLight)",
            "txtLighter": "var(--txtLighter)",
            "txtInverse": "var(--txtInverse)",
            "border": "var(--border)",
            "borderPrimary": "var(--borderPrimary)",
            "backendColor": "var(--backendColor)",
            "frontendColor": "var(--frontendColor)",
            "designColor": "var(--designColor)",
            "uxColor": "var(--uxColor)",
            "companyColor": "var(--companyColor)"
        },
    },
  },
    variants: {
        extend: {
            translate: ['group-hover', 'group-focus'],
            filter: ['hover', 'focus'],
            saturate: ['hover', 'focus'],
            borderRadius:  ['focus'],
            blur: ['group-hover', 'group-focus'],
            grayscale: ['hover', 'focus'],
        },
    },
  plugins: [
    require('@tailwindcss/typography'),
    require("@tailwindcss/forms")({
        strategy: 'class',
    }),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-hero-patterns'),
  ]
}
