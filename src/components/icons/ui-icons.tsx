// UI icons drawn on a 16x16 pixel grid using PICO-8-inspired retro style.
// Fill uses `currentColor` so icons inherit text color from their parent.

import type { PixelIconProps } from './types'

export function StarIcon({ className, size = 16 }: PixelIconProps) {
  // 5-point rarity star — classic pixel star shape
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Star"
      role="img"
    >
      {/* Top spike */}
      <rect x="7"  y="1"  width="2" height="3" fill="currentColor" />
      {/* Upper diagonal arms */}
      <rect x="5"  y="4"  width="6" height="2" fill="currentColor" />
      {/* Full-width mid band */}
      <rect x="1"  y="6"  width="14" height="2" fill="currentColor" />
      {/* Inner horizontal band */}
      <rect x="3"  y="8"  width="10" height="2" fill="currentColor" />
      {/* Lower two spikes */}
      <rect x="2"  y="10" width="4" height="2" fill="currentColor" />
      <rect x="10" y="10" width="4" height="2" fill="currentColor" />
      <rect x="2"  y="12" width="3" height="2" fill="currentColor" />
      <rect x="11" y="12" width="3" height="2" fill="currentColor" />
      {/* Bottom left/right points */}
      <rect x="2"  y="14" width="2" height="2" fill="currentColor" />
      <rect x="12" y="14" width="2" height="2" fill="currentColor" />
    </svg>
  )
}

export function ScrollIcon({ className, size = 16 }: PixelIconProps) {
  // Rolled parchment scroll — curved top and bottom rolls with lines inside
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Scroll"
      role="img"
    >
      {/* Top roll */}
      <rect x="2"  y="1"  width="12" height="2" fill="currentColor" />
      <rect x="1"  y="3"  width="14" height="2" fill="currentColor" />
      {/* Body */}
      <rect x="2"  y="5"  width="12" height="6" fill="currentColor" />
      {/* Text lines on the scroll */}
      <rect x="4"  y="6"  width="8" height="1" fill="currentColor" opacity="0.35" />
      <rect x="4"  y="8"  width="8" height="1" fill="currentColor" opacity="0.35" />
      <rect x="4"  y="10" width="5" height="1" fill="currentColor" opacity="0.35" />
      {/* Bottom roll */}
      <rect x="1"  y="11" width="14" height="2" fill="currentColor" />
      <rect x="2"  y="13" width="12" height="2" fill="currentColor" />
      {/* Roll shadow on top */}
      <rect x="2"  y="4"  width="12" height="1" fill="currentColor" opacity="0.4" />
      {/* Roll shadow on bottom */}
      <rect x="2"  y="11" width="12" height="1" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

export function PotionIcon({ className, size = 16 }: PixelIconProps) {
  // Potion bottle — round body, narrow neck, cork stopper
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Potion"
      role="img"
    >
      {/* Cork */}
      <rect x="6"  y="1"  width="4" height="2" fill="currentColor" />
      {/* Neck */}
      <rect x="6"  y="3"  width="4" height="3" fill="currentColor" />
      {/* Shoulder flare */}
      <rect x="4"  y="6"  width="8" height="2" fill="currentColor" />
      {/* Bottle body */}
      <rect x="3"  y="8"  width="10" height="5" fill="currentColor" />
      {/* Rounded bottom */}
      <rect x="4"  y="13" width="8"  height="2" fill="currentColor" />
      <rect x="5"  y="15" width="6"  height="1" fill="currentColor" />
      {/* Liquid fill line (upper portion of body slightly lighter = bubbles/highlight) */}
      <rect x="4"  y="8"  width="3" height="2" fill="currentColor" opacity="0.4" />
      {/* Bubble dot */}
      <rect x="5"  y="10" width="2" height="2" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

export function CoinIcon({ className, size = 16 }: PixelIconProps) {
  // Gold coin — flat circular disc with a centre symbol
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Coin"
      role="img"
    >
      {/* Outer coin disc */}
      <rect x="4"  y="1"  width="8" height="2" fill="currentColor" />
      <rect x="2"  y="3"  width="12" height="2" fill="currentColor" />
      <rect x="1"  y="5"  width="14" height="6" fill="currentColor" />
      <rect x="2"  y="11" width="12" height="2" fill="currentColor" />
      <rect x="4"  y="13" width="8"  height="2" fill="currentColor" />
      {/* Centre emblem — dollar/star cut-in */}
      <rect x="7"  y="4"  width="2" height="8" fill="currentColor" opacity="0.4" />
      <rect x="5"  y="6"  width="6" height="4" fill="currentColor" opacity="0.4" />
      {/* Top shine strip */}
      <rect x="5"  y="3"  width="4" height="1" fill="currentColor" opacity="0.5" />
    </svg>
  )
}
