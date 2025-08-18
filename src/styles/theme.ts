import { createTheme } from '@mantine/core'

const theme = createTheme({
	fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
	defaultRadius: 'md',
	primaryColor: 'teal',
	colors: {
		// keep defaults but ensure readable text by increasing contrast in gray scales via CSS overrides in index.css
	},
})

export default theme


