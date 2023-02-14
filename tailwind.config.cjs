/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			blueGray: colors.blueGray,
			gray: colors.gray,
			purple: colors.purple,
			emerald: colors.emerald,
			red: colors.red,
			pink: colors.pink,
			cyan: colors.cyan,
			lime: colors.lime,
			blue: colors.blue
		},
		extend: {
			transitionProperty: {
				'background-size': 'background-size'
			},
			rotate: {
				'neg-1/8': '-.125deg'
			},
			zIndex: {
				'1': '1'
			},
			backgroundSize: {
				'0%-20%': '0% 20%',
				'100%-20%': '100% 20%',
				'12': '3rem'
			},
			backgroundPosition: {
				'x-0-y-60': '0 60%',
				'x-100-y-60': '100% 60%'
			},
			backgroundImage: theme => ({
				'la-croix': "url('/assets/img/la-croix.png')"
			}),
		},
	},
	variants: {
		extend: {
			textColor: ['unicorn'],
			backgroundColor: ['unicorn'],
			gradientColorStops: ['unicorn'],
			backgroundImage: ['hover'],
			fontWeight: ['hover']
		}
	  },
	  plugins: [
		  plugin(function({ addVariant, e }) {
			addVariant('unicorn', ({ modifySelectors, separator }) => {
			  modifySelectors(({ className }) => {
				return `.unicorn .${e(`unicorn${separator}${className}`)}`
			  })
			})
		  })
	  ],
	  corePlugins: {
		  ringWidth: false,
	  }
}
