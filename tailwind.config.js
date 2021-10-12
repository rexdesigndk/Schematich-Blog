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
                default: {
                    css: {
                        color: theme('var(--txtMain)'),
                        a: {
                            color: theme('var(--primary)'),
                            '&:hover': {
                                color: theme('var(--primaryLight)'),
                            },
                        },
                    },
                },
    
                dark: {
                    css: {
                        color: theme('var(--txtMain)'),
                        a: {
                            color: theme('var(--primary)'),
                            '&:hover': {
                                color: theme('var(--primaryLight)'),
                            },
                        },
    
                        h1: {
                            color: theme('var(--txtMain)'),
                        },
                        h2: {
                            color: theme('var(--txtMain)'),
                        },
                        h3: {
                            color: theme('var(--txtMain)'),
                        },
                        h4: {
                            color: theme('var(--txtMain)'),
                        },
                        h5: {
                            color: theme('var(--txtMain)'),
                        },
                        h6: {
                            color: theme('var(--txtMain)'),
                        },
    
                        strong: {
                            color: theme('var(--txtMain'),
                        },
    
                        code: {
                            color: theme('var(--txtMain'),
                        },
    
                        figcaption: {
                            color: theme('var(--txtMain'),
                        },
                    },
                },
            }),
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
