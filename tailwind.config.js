module.exports = {
  purge: {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
        ]
    },
    darkMode: 'media',
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
            "primaryLight": "var(--primaryLight)",
            "primaryFrom": "var(--primaryFrom)",
            "primaryTo": "var(--primaryTo)",
            "secondary": "var(--secondary)",
            "backgroundMain": "var(--backgroundMain)",
            "backgroundLight": "var(--backgroundLight)",
            "backgroundLighter": "var(--backgroundLighter)",
            "backgroundPrimary": "var(--backgroundPrimary)",
            "backgroundShape": "var(--backgroundShape)",
            "txtMain": "var(--txtMain)",
            "txtLight": "var(--txtLight)",
            "txtLighter": "var(--txtLighter)",
            "txtInverse": "var(--txtInverse)",
            "border": "var(--border)",
            "borderPrimary": "var(--borderPrimary)",
            "borderDark": "var(--borderDark)",
            "backendColor": "var(--backendColor)",
            "frontendColor": "var(--frontendColor)",
            "designColor": "var(--designColor)",
            "uxColor": "var(--uxColor)",
            "businessColor": "var(--businessColor)"
        },
        backgroundImage: theme => ({
            'hero-mesh': "url('/assets/hero-mesh-alt.png')",
        }),
        typography: (theme) => ({
            light: {
              css: [
                {
                  color: "var(--txtLight)",
                  a: {
                    color: "var(--txtMain)",
                  },
                  strong: {
                    color: "var(--txtMain)",
                  },
                  'ol > li::before': {
                    color: "var(--txtLighter)",
                  },
                  'ul > li::before': {
                    backgroundColor: "var(--backgroundLight)",
                  },
                  hr: {
                    borderColor: "var(--borderLight)",
                  },
                  blockquote: {
                    color: "var(--txtLight)",
                    borderLeftColor: "var(--border)",
                  },
                  h1: {
                    color: "var(--txtMain)",
                  },
                  h2: {
                    color: "var(--txtMain)",
                  },
                  h3: {
                    color: "var(--txtMain)",
                  },
                  h4: {
                    color: "var(--txtMain)",
                  },
                  'figure figcaption': {
                    color: "var(--txtMain)",
                  },
                  code: {
                    color: "var(--txtMain)",
                  },
                  'a code': {
                    color: "var(--txtMain)",
                  },
                  pre: {
                    color: "var(--txtMain)",
                    backgroundColor: theme('var(--backgroundLight)'),
                  },
                  thead: {
                    color: "var(--txtMain)",
                    borderBottomColor: "var(--borderLight)",
                  },
                  'tbody tr': {
                    borderBottomColor: "var(--border)",
                  },
                },
              ],
            },
          }),
          animation: {
            'animate-hover': 'hover 3s linear infinite',
           },
           hover: {
            '0%, 100%': { transform: 'translateY(0deg)' },
            '50%': { transform: 'translateY(100deg)' },
          }
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
            typography: ['dark'],
            animation: ['motion-safe', 'motion-reduce']
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
