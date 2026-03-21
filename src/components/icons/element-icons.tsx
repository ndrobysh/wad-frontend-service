// Element icons drawn on a 16x16 pixel grid using PICO-8-inspired retro style.
// Fill uses `currentColor` so icons inherit text color from their parent.

import type { PixelIconProps } from './types'

export function FireIcon({ className, size = 16 }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Fire"
      role="img"
    >
      {/* Tip */}
      <rect x="7" y="1"  width="2" height="2" fill="currentColor" />
      {/* Upper flame */}
      <rect x="6" y="3"  width="4" height="2" fill="currentColor" />
      {/* Left tongue reaching up */}
      <rect x="4" y="5"  width="2" height="2" fill="currentColor" />
      {/* Main mid body */}
      <rect x="5" y="5"  width="6" height="2" fill="currentColor" />
      {/* Right tongue */}
      <rect x="10" y="5" width="2" height="2" fill="currentColor" />
      {/* Wider mid section */}
      <rect x="4" y="7"  width="8" height="2" fill="currentColor" />
      {/* Wide lower body */}
      <rect x="3" y="9"  width="10" height="2" fill="currentColor" />
      {/* Base */}
      <rect x="3" y="11" width="10" height="2" fill="currentColor" />
      <rect x="4" y="13" width="8"  height="2" fill="currentColor" />
    </svg>
  )
}

export function WaterIcon({ className, size = 16 }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Water"
      role="img"
    >
      {/* Droplet tip */}
      <rect x="7" y="1"  width="2" height="2" fill="currentColor" />
      <rect x="6" y="3"  width="4" height="2" fill="currentColor" />
      {/* Widening body */}
      <rect x="5" y="5"  width="6" height="2" fill="currentColor" />
      <rect x="4" y="7"  width="8" height="2" fill="currentColor" />
      <rect x="3" y="9"  width="10" height="2" fill="currentColor" />
      {/* Rounded base */}
      <rect x="4" y="11" width="8" height="2" fill="currentColor" />
      <rect x="5" y="13" width="6" height="2" fill="currentColor" />
      {/* Inner highlight pixel */}
      <rect x="5" y="7"  width="2" height="2" fill="currentColor" opacity="0.35" />
    </svg>
  )
}

export function EarthIcon({ className, size = 16 }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Earth"
      role="img"
    >
      {/* Big mountain peak */}
      <rect x="9"  y="2"  width="2" height="2" fill="currentColor" />
      <rect x="8"  y="4"  width="4" height="2" fill="currentColor" />
      <rect x="7"  y="6"  width="6" height="2" fill="currentColor" />
      <rect x="6"  y="8"  width="8" height="2" fill="currentColor" />
      {/* Small left hill */}
      <rect x="3"  y="8"  width="2" height="2" fill="currentColor" />
      <rect x="2"  y="10" width="4" height="2" fill="currentColor" />
      {/* Ground row */}
      <rect x="1"  y="12" width="14" height="2" fill="currentColor" />
      {/* Bottom fill */}
      <rect x="1"  y="14" width="14" height="2" fill="currentColor" />
    </svg>
  )
}

export function WindIcon({ className, size = 16 }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Wind"
      role="img"
    >
      {/* Top line — sweeps right then curls up */}
      <rect x="1"  y="3"  width="10" height="2" fill="currentColor" />
      <rect x="11" y="3"  width="2"  height="1" fill="currentColor" />
      <rect x="12" y="2"  width="2"  height="2" fill="currentColor" />
      {/* Middle line — full width */}
      <rect x="1"  y="7"  width="13" height="2" fill="currentColor" />
      {/* Bottom line — shorter, curls down */}
      <rect x="2"  y="11" width="9"  height="2" fill="currentColor" />
      <rect x="11" y="12" width="2"  height="1" fill="currentColor" />
      <rect x="12" y="12" width="2"  height="2" fill="currentColor" />
    </svg>
  )
}

export function LightIcon({ className, size = 16 }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Light"
      role="img"
    >
      {/* Centre core 4x4 */}
      <rect x="6"  y="6"  width="4" height="4" fill="currentColor" />
      {/* Cardinal rays */}
      <rect x="7"  y="1"  width="2" height="4" fill="currentColor" />
      <rect x="7"  y="11" width="2" height="4" fill="currentColor" />
      <rect x="1"  y="7"  width="4" height="2" fill="currentColor" />
      <rect x="11" y="7"  width="4" height="2" fill="currentColor" />
      {/* Diagonal ray dots */}
      <rect x="3"  y="3"  width="2" height="2" fill="currentColor" />
      <rect x="11" y="3"  width="2" height="2" fill="currentColor" />
      <rect x="3"  y="11" width="2" height="2" fill="currentColor" />
      <rect x="11" y="11" width="2" height="2" fill="currentColor" />
    </svg>
  )
}

export function DarkIcon({ className, size = 16 }: PixelIconProps) {
  // Crescent moon drawn as a C-shape: only the left arc columns are filled.
  // No cutout tricks needed — we simply don't draw the right side.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Dark"
      role="img"
    >
      {/* Crescent top cap */}
      <rect x="5"  y="2"  width="5" height="2" fill="currentColor" />
      {/* Upper-left arc */}
      <rect x="3"  y="4"  width="3" height="2" fill="currentColor" />
      {/* Left straight edges */}
      <rect x="2"  y="6"  width="2" height="4" fill="currentColor" />
      {/* Lower-left arc */}
      <rect x="3"  y="10" width="3" height="2" fill="currentColor" />
      {/* Crescent bottom cap */}
      <rect x="5"  y="12" width="5" height="2" fill="currentColor" />
      {/* Right curve inner (thickens the crescent tips) */}
      <rect x="8"  y="4"  width="2" height="2" fill="currentColor" />
      <rect x="9"  y="6"  width="2" height="1" fill="currentColor" />
      <rect x="8"  y="10" width="2" height="2" fill="currentColor" />
      <rect x="9"  y="9"  width="2" height="1" fill="currentColor" />
      {/* Stars */}
      <rect x="13" y="2"  width="2" height="2" fill="currentColor" />
      <rect x="12" y="7"  width="1" height="1" fill="currentColor" />
      <rect x="13" y="11" width="2" height="2" fill="currentColor" />
    </svg>
  )
}
