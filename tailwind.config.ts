
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#000000',
					foreground: '#ffffff',
					container: '#001b3d',
					fixed: '#d6e3ff',
					'fixed-dim': '#b1c7f2',
				},
				secondary: {
					DEFAULT: '#585f6c',
					foreground: '#ffffff',
					container: '#dce2f3',
					'fixed-dim': '#c0c7d6',
					fixed: '#dce2f3',
				},
				tertiary: {
					DEFAULT: '#000000',
					foreground: '#ffffff',
					container: '#261900',
					fixed: '#ffdea5',
					'fixed-dim': '#e9c176',
				},
				error: {
					DEFAULT: '#ba1a1a',
					foreground: '#ffffff',
					container: '#ffdad6',
				},
				surface: {
					DEFAULT: '#f9f9f7',
					dim: '#dadad8',
					bright: '#f9f9f7',
					variant: '#e2e3e1',
					container: '#eeeeec',
					'container-low': '#f4f4f2',
					'container-lowest': '#ffffff',
					'container-high': '#e8e8e6',
					'container-highest': '#e2e3e1',
					tint: '#495f84',
				},
				'on-primary': {
					DEFAULT: '#ffffff',
					container: '#6f84ac',
					fixed: '#001b3d',
					'fixed-variant': '#31476b',
				},
				'on-secondary': {
					DEFAULT: '#ffffff',
					container: '#5e6572',
					fixed: '#151c27',
					'fixed-variant': '#404754',
				},
				'on-tertiary': {
					DEFAULT: '#ffffff',
					container: '#a17f3b',
					fixed: '#261900',
					'fixed-variant': '#5d4201',
				},
				'on-surface': {
					DEFAULT: '#1a1c1b',
					variant: '#44474e',
				},
				'on-error': {
					DEFAULT: '#ffffff',
					container: '#93000a',
				},
				'on-background': '#1a1c1b',
				outline: '#74777f',
				'outline-variant': '#c4c6cf',
				'inverse-surface': '#2f3130',
				'inverse-on-surface': '#f1f1ef',
				'inverse-primary': '#b1c7f2',
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: '#E5F1FF',
					foreground: '#C60505'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				headline: ['Noto Serif', 'serif'],
				body: ['Manrope', 'sans-serif'],
				label: ['Manrope', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				'fade-out': {
					"0%": {
						opacity: "1",
						transform: "translateY(0)"
					},
					"100%": {
						opacity: "0",
						transform: "translateY(10px)"
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
