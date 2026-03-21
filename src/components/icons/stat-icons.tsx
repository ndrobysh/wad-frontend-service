// Stat icons drawn on a 16x16 pixel grid using PICO-8-inspired retro style.
// Fill uses `currentColor` so icons inherit text color from their parent.

import type { PixelIconProps } from './types'

export function HpIcon({ className, size = 16 }: PixelIconProps) {
  // Classic pixel heart shape
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="HP"
      role="img"
    >
      {/* Top two bumps of the heart */}
      <rect x="2"  y="3"  width="4" height="2" fill="currentColor" />
      <rect x="10" y="3"  width="4" height="2" fill="currentColor" />
      <rect x="1"  y="5"  width="6" height="2" fill="currentColor" />
      <rect x="9"  y="5"  width="6" height="2" fill="currentColor" />
      {/* Full-width middle row */}
      <rect x="1"  y="7"  width="14" height="2" fill="currentColor" />
      {/* Tapering down */}
      <rect x="2"  y="9"  width="12" height="2" fill="currentColor" />
      <rect x="3"  y="11" width="10" height="2" fill="currentColor" />
      <rect x="5"  y="13" width="6"  height="2" fill="currentColor" />
      {/* Bottom point */}
      <rect x="7"  y="15" width="2"  height="1" fill="currentColor" />
    </svg>
  )
}

export function AtkIcon({ className, size = 16 }: PixelIconProps) {
  // Pixel sword — blade pointing top-right, grip bottom-left
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="ATK"
      role="img"
    >
      {/* Blade — diagonal top-right to bottom-left */}
      <rect x="11" y="1"  width="3" height="2" fill="currentColor" />
      <rect x="10" y="2"  width="2" height="2" fill="currentColor" />
      <rect x="9"  y="3"  width="2" height="2" fill="currentColor" />
      <rect x="8"  y="4"  width="2" height="2" fill="currentColor" />
      <rect x="7"  y="5"  width="2" height="2" fill="currentColor" />
      <rect x="6"  y="6"  width="2" height="2" fill="currentColor" />
      <rect x="5"  y="7"  width="2" height="2" fill="currentColor" />
      {/* Crossguard */}
      <rect x="3"  y="8"  width="6" height="2" fill="currentColor" />
      {/* Grip */}
      <rect x="4"  y="10" width="2" height="3" fill="currentColor" />
      {/* Pommel */}
      <rect x="3"  y="13" width="4" height="2" fill="currentColor" />
    </svg>
  )
}

export function DefIcon({ className, size = 16 }: PixelIconProps) {
  // Pixel shield — kite shape with a centre boss
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="DEF"
      role="img"
    >
      {/* Top flat edge */}
      <rect x="3"  y="1"  width="10" height="2" fill="currentColor" />
      {/* Upper body */}
      <rect x="2"  y="3"  width="12" height="2" fill="currentColor" />
      <rect x="2"  y="5"  width="12" height="2" fill="currentColor" />
      {/* Mid body */}
      <rect x="2"  y="7"  width="12" height="2" fill="currentColor" />
      {/* Lower taper */}
      <rect x="3"  y="9"  width="10" height="2" fill="currentColor" />
      <rect x="4"  y="11" width="8"  height="2" fill="currentColor" />
      <rect x="5"  y="13" width="6"  height="2" fill="currentColor" />
      {/* Point */}
      <rect x="7"  y="15" width="2"  height="1" fill="currentColor" />
      {/* Centre boss (small raised emblem) */}
      <rect x="6"  y="5"  width="4" height="4" fill="currentColor" opacity="0.45" />
    </svg>
  )
}

export function VitIcon({ className, size = 16 }: PixelIconProps) {
  // Pixel boot — side profile, toe pointing right
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="VIT"
      role="img"
    >
      {/* Shaft of the boot */}
      <rect x="3"  y="1"  width="5" height="2" fill="currentColor" />
      <rect x="3"  y="3"  width="5" height="2" fill="currentColor" />
      <rect x="3"  y="5"  width="5" height="2" fill="currentColor" />
      <rect x="3"  y="7"  width="5" height="2" fill="currentColor" />
      {/* Ankle transition */}
      <rect x="3"  y="9"  width="6" height="2" fill="currentColor" />
      {/* Foot sole extending right */}
      <rect x="3"  y="11" width="10" height="2" fill="currentColor" />
      <rect x="3"  y="13" width="12" height="2" fill="currentColor" />
      {/* Toe cap */}
      <rect x="12" y="11" width="2"  height="2" fill="currentColor" />
      {/* Speed motion lines behind the boot */}
      <rect x="1"  y="5"  width="2"  height="1" fill="currentColor" opacity="0.6" />
      <rect x="1"  y="7"  width="2"  height="1" fill="currentColor" opacity="0.6" />
      <rect x="1"  y="9"  width="2"  height="1" fill="currentColor" opacity="0.4" />
    </svg>
  )
}
