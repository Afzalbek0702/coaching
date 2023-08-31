/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		screens: {
			"2xl": { max: "1535px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "400px" },
			// => @media (max-width: 639px) { ... }
		},
		extend: {
			colors: {
				primary: "#4A556C",
				lightPrimary: "#4A556C80",
				whitePrimary: "#667085",
				secondary: "#333461",
				green: "#20AD96",
				gray: "#041434",
			},
			backgroundColor: {
				primary: "#20AD96",
				secondary: "#FAF8F6",
			},
			borderColor: {
				primary: "#20AD96",
			},
		},
	},
	plugins: [],
};
