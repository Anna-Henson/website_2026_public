// Shared Tailwind configuration
// Load this AFTER the Tailwind CDN script

tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Light Japanese-inspired palette
                paper: '#fafafa',
                ink: '#1a1a1a',
                stone: '#404040',
                muted: '#6b6b6b',
                border: '#e5e5e5',
                accent: '#c23a3a',
                surface: '#ffffff',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                none: '0',
                DEFAULT: '0',
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1.5' }],
                'sm': ['0.8125rem', { lineHeight: '1.5' }],
                'base': ['0.875rem', { lineHeight: '1.6' }],
                'lg': ['1rem', { lineHeight: '1.5' }],
                'xl': ['1.125rem', { lineHeight: '1.4' }],
                '2xl': ['1.5rem', { lineHeight: '1.3' }],
                '3xl': ['2rem', { lineHeight: '1.2' }],
                '4xl': ['2.5rem', { lineHeight: '1.1' }],
            },
            spacing: {
                '18': '4.5rem',
            },
            typography: {
                DEFAULT: {
                    css: {
                        '--tw-prose-body': '#404040',
                        '--tw-prose-headings': '#1a1a1a',
                        '--tw-prose-links': '#c23a3a',
                        '--tw-prose-bold': '#1a1a1a',
                        '--tw-prose-quotes': '#6b6b6b',
                        '--tw-prose-quote-borders': '#e5e5e5',
                    },
                },
            },
        }
    }
};
