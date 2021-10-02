module.exports = {
  purge: {
    content: [
      './resources/**/*.antlers.html',
      './resources/**/*.blade.php',
      './content/**/*.md'
    ]
  },
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
            "primary": "#121620",
            "secondary": "#948993",
            "backgroundMain": "#fff",
            "backgroundLight": "#f5f3f3",
            "backgroundLighter": "#fdfdfd",
            "backgroundPrimary": "#fafafa",
            "txtMain": "#141516",
            "txtLight": "#5a5f64",
            "txtLighter": "#a2acb5",
            "txtInverse": "#ffffff",
            "border": "#ededed",
            "borderPrimary": "#d7e2ff",
            "backendColor": "#e7183d",
            "frontendColor": "#ff8d00",
            "designColor": "#5b89e9",
            "uxColor": "#aa97eb",
            "companyColor": "#0d1466"
        },
    },
  },
    variants: {
        extend: {
            translate: ['group-hover', 'group-focus'],
            filter: ['hover', 'focus'],
            saturate: ['hover', 'focus'],
            borderRadius:  ['focus']
        },
    },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-hero-patterns'),
  ]
}
