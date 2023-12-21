const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./mdx-components.tsx",
		"content/**/*.mdx",
	],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
			fontFamily: {
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
				display: ["var(--font-calsans)"],
				plex: ["IBM Plex"],
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"fade-in": "fade-in 3s ease-in-out forwards",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 3s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
				/**"blur": "blur 10s ease-in-out infinite forwards",
				"blur1": "blur1 10s ease-in-out infinite forwards",
				"blur2": "blur2 10s ease-in-out infinite forwards",
				"blur3": "blur3 10s ease-in-out infinite forwards",
				"blur4": "blur4 10s ease-in-out infinite forwards",
				"blur5": "blur5 10s ease-in-out infinite forwards",
				"blur6": "blur6 10s ease-in-out infinite forwards",*/
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						"line-height": "100%",
						opacity: "100%",
					},
				},
				/**"blur": {
					"0%": {
						opacity: "100%",
					},
					"10%": {
						opacity: "80%",
					},
					"20%": {
						opacity: "20%",
					},
					"30%": {
						opacity: "80%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"blur1": {
					"0%": {
						opacity: "100%",
					},
					"12%": {
						opacity: "80%",
					},
					"22%": {
						opacity: "20%",
					},
					"32%": {
						opacity: "80%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"blur2": {
					"0%": {
						opacity: "100%",
					},
					"14%": {
						opacity: "80%",
					},
					"24%": {
						opacity: "20%",
					},
					"34%": {
						opacity: "80%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"blur3": {
					"0%": {
						opacity: "100%",
					},
					"16%": {
						opacity: "80%",
					},
					"26%": {
						opacity: "20%",
					},
					"36%": {
						opacity: "80%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"blur4": {
					"0%": {
						opacity: "100%",
					},
					"18%": {
						opacity: "80%",
					},
					"28%": {
						opacity: "20%",
					},
					"38%": {
						opacity: "80%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"blur5": {
					"0%": {
						opacity: "100%",
					},
					"20%": {
						opacity: "80%",
					},
					"30%": {
						opacity: "20%",
					},
					"40%": {
						opacity: "80%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"blur6": {
					"0%": {
						opacity: "100%",
					},
					"22%": {
						opacity: "80%",
					},
					"32%": {
						opacity: "20%",
					},
					"42%": {
						opacity: "80%",
					},
					"100%": {
						opacity: "100%",
					},
				},*/
			},
			colors: {
				"c-black": "#171717",
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-debug-screens"),
	],
};
