/* eslint-disable */
export type Token = "colors.black" | "colors.white" | "colors.light.1" | "colors.light.2" | "colors.light.3" | "colors.light.4" | "colors.light.5" | "colors.light.6" | "colors.light.7" | "colors.light.8" | "colors.light.9" | "colors.light.10" | "colors.light.11" | "colors.light.12" | "colors.dark.1" | "colors.dark.2" | "colors.dark.3" | "colors.dark.4" | "colors.dark.5" | "colors.dark.6" | "colors.dark.7" | "colors.dark.8" | "colors.dark.9" | "colors.dark.10" | "colors.dark.11" | "colors.dark.12" | "assets.airbus" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "colors.background" | "colors.background.alt" | "colors.interactive" | "colors.interactive.hover" | "colors.interactive.active" | "colors.border" | "colors.focusring" | "colors.button" | "colors.button.hovered" | "colors.links" | "colors.text" | "colors.colorPalette" | "colors.colorPalette.1" | "colors.colorPalette.2" | "colors.colorPalette.3" | "colors.colorPalette.4" | "colors.colorPalette.5" | "colors.colorPalette.6" | "colors.colorPalette.7" | "colors.colorPalette.8" | "colors.colorPalette.9" | "colors.colorPalette.10" | "colors.colorPalette.11" | "colors.colorPalette.12" | "colors.colorPalette.alt" | "colors.colorPalette.hover" | "colors.colorPalette.active" | "colors.colorPalette.hovered"

export type ColorPalette = "black" | "white" | "light" | "dark" | "background" | "interactive" | "border" | "focusring" | "button" | "links" | "text"

export type ColorToken = "black" | "white" | "light.1" | "light.2" | "light.3" | "light.4" | "light.5" | "light.6" | "light.7" | "light.8" | "light.9" | "light.10" | "light.11" | "light.12" | "dark.1" | "dark.2" | "dark.3" | "dark.4" | "dark.5" | "dark.6" | "dark.7" | "dark.8" | "dark.9" | "dark.10" | "dark.11" | "dark.12" | "background" | "background.alt" | "interactive" | "interactive.hover" | "interactive.active" | "border" | "focusring" | "button" | "button.hovered" | "links" | "text" | "colorPalette" | "colorPalette.1" | "colorPalette.2" | "colorPalette.3" | "colorPalette.4" | "colorPalette.5" | "colorPalette.6" | "colorPalette.7" | "colorPalette.8" | "colorPalette.9" | "colorPalette.10" | "colorPalette.11" | "colorPalette.12" | "colorPalette.alt" | "colorPalette.hover" | "colorPalette.active" | "colorPalette.hovered"

export type AssetToken = "airbus"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type SizeToken = "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type AnimationName = "spin" | "ping" | "pulse" | "bounce"

export type Tokens = {
		colors: ColorToken
		assets: AssetToken
		breakpoints: BreakpointToken
		sizes: SizeToken
		animationName: AnimationName
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"