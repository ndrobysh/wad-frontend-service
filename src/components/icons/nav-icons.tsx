// Navigation icons drawn on a 16x16 pixel grid using PICO-8-inspired retro style.
// Fill uses `currentColor` so icons inherit text color from their parent.

import type { PixelIconProps } from './types'

export function DashboardIcon({ className, size = 16 }: PixelIconProps) {
  // Pixel house — classic home icon with roof, door, and windows
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Dashboard"
      role="img"
    >
      {/* Roof peak */}
      <rect x="7"  y="1"  width="2" height="2" fill="currentColor" />
      {/* Roof slope */}
      <rect x="5"  y="3"  width="6" height="2" fill="currentColor" />
      <rect x="3"  y="5"  width="10" height="2" fill="currentColor" />
      {/* Chimney */}
      <rect x="11" y="2"  width="2" height="3" fill="currentColor" />
      {/* Walls */}
      <rect x="2"  y="7"  width="12" height="8" fill="currentColor" />
      {/* Door cutout — use opacity to darken, simulating an opening */}
      <rect x="6"  y="11" width="4" height="4" fill="currentColor" opacity="0" />
      {/* Left window */}
      <rect x="3"  y="9"  width="3" height="3" fill="currentColor" opacity="0.35" />
      {/* Right window */}
      <rect x="10" y="9"  width="3" height="3" fill="currentColor" opacity="0.35" />
      {/* Door */}
      <rect x="6"  y="11" width="4" height="4" fill="currentColor" opacity="0.35" />
    </svg>
  )
}

export function CollectionIcon({ className, size = 16 }: PixelIconProps) {
  // Pixel treasure chest — rounded lid, latch, side handles
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Collection"
      role="img"
    >
      {/* Lid */}
      <rect x="2"  y="3"  width="12" height="4" fill="currentColor" />
      {/* Hinge band across lid */}
      <rect x="2"  y="5"  width="12" height="1" fill="currentColor" opacity="0.4" />
      {/* Chest body */}
      <rect x="1"  y="7"  width="14" height="7" fill="currentColor" />
      {/* Front band */}
      <rect x="1"  y="9"  width="14" height="2" fill="currentColor" opacity="0.4" />
      {/* Latch */}
      <rect x="6"  y="8"  width="4" height="3" fill="currentColor" />
      <rect x="7"  y="9"  width="2" height="2" fill="currentColor" opacity="0.35" />
      {/* Feet */}
      <rect x="2"  y="14" width="3" height="2" fill="currentColor" />
      <rect x="11" y="14" width="3" height="2" fill="currentColor" />
    </svg>
  )
}

export function InvocationIcon({ className, size = 16 }: PixelIconProps) {
  // Portal / star-burst — central diamond with radiating spikes
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Invocation"
      role="img"
    >
      {/* Central diamond */}
      <rect x="7"  y="6"  width="2" height="4" fill="currentColor" />
      <rect x="6"  y="7"  width="4" height="2" fill="currentColor" />
      {/* Cardinal spikes */}
      <rect x="7"  y="1"  width="2" height="4" fill="currentColor" />
      <rect x="7"  y="11" width="2" height="4" fill="currentColor" />
      <rect x="1"  y="7"  width="4" height="2" fill="currentColor" />
      <rect x="11" y="7"  width="4" height="2" fill="currentColor" />
      {/* Diagonal sparkles */}
      <rect x="3"  y="3"  width="2" height="2" fill="currentColor" />
      <rect x="11" y="3"  width="2" height="2" fill="currentColor" />
      <rect x="3"  y="11" width="2" height="2" fill="currentColor" />
      <rect x="11" y="11" width="2" height="2" fill="currentColor" />
      {/* Outer ring dots — inner orbit feel */}
      <rect x="5"  y="5"  width="1" height="1" fill="currentColor" opacity="0.6" />
      <rect x="10" y="5"  width="1" height="1" fill="currentColor" opacity="0.6" />
      <rect x="5"  y="10" width="1" height="1" fill="currentColor" opacity="0.6" />
      <rect x="10" y="10" width="1" height="1" fill="currentColor" opacity="0.6" />
    </svg>
  )
}

export function CombatIcon({ className, size = 16 }: PixelIconProps) {
  // Two swords crossed — classic battle icon
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Combat"
      role="img"
    >
      {/* Sword 1: top-left tip to bottom-right pommel */}
      <rect x="1"  y="1"  width="3" height="2" fill="currentColor" />
      <rect x="3"  y="3"  width="2" height="2" fill="currentColor" />
      <rect x="5"  y="5"  width="2" height="2" fill="currentColor" />
      {/* Crossguard 1 */}
      <rect x="4"  y="6"  width="5" height="2" fill="currentColor" />
      {/* Grip + pommel 1 */}
      <rect x="8"  y="8"  width="2" height="3" fill="currentColor" />
      <rect x="7"  y="11" width="4" height="2" fill="currentColor" />
      {/* Sword 2: top-right tip to bottom-left pommel */}
      <rect x="12" y="1"  width="3" height="2" fill="currentColor" />
      <rect x="11" y="3"  width="2" height="2" fill="currentColor" />
      <rect x="9"  y="5"  width="2" height="2" fill="currentColor" />
      {/* Crossguard 2 */}
      <rect x="7"  y="6"  width="5" height="2" fill="currentColor" />
      {/* Grip + pommel 2 */}
      <rect x="6"  y="8"  width="2" height="3" fill="currentColor" />
      <rect x="5"  y="11" width="4" height="2" fill="currentColor" />
    </svg>
  )
}

export function BestiaryIcon({ className, size = 16 }: PixelIconProps) {
  // Open book — two pages, spine in centre, page lines
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Bestiary"
      role="img"
    >
      {/* Book cover / outer shape */}
      <rect x="1"  y="2"  width="14" height="12" fill="currentColor" />
      {/* Spine centre line */}
      <rect x="7"  y="2"  width="2" height="12" fill="currentColor" opacity="0.5" />
      {/* Left page lines */}
      <rect x="2"  y="5"  width="4" height="1" fill="currentColor" opacity="0.35" />
      <rect x="2"  y="7"  width="4" height="1" fill="currentColor" opacity="0.35" />
      <rect x="2"  y="9"  width="4" height="1" fill="currentColor" opacity="0.35" />
      <rect x="2"  y="11" width="3" height="1" fill="currentColor" opacity="0.35" />
      {/* Right page lines */}
      <rect x="10" y="5"  width="4" height="1" fill="currentColor" opacity="0.35" />
      <rect x="10" y="7"  width="4" height="1" fill="currentColor" opacity="0.35" />
      <rect x="10" y="9"  width="4" height="1" fill="currentColor" opacity="0.35" />
      <rect x="10" y="11" width="3" height="1" fill="currentColor" opacity="0.35" />
      {/* Corner tabs (top-right bookmark) */}
      <rect x="13" y="2"  width="2" height="3" fill="currentColor" opacity="0.6" />
    </svg>
  )
}

export function ProfileIcon({ className, size = 16 }: PixelIconProps) {
  // Pixel person — round head, body, arms suggestion
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
      className={className}
      aria-label="Profile"
      role="img"
    >
      {/* Head */}
      <rect x="5"  y="1"  width="6" height="2" fill="currentColor" />
      <rect x="4"  y="3"  width="8" height="4" fill="currentColor" />
      <rect x="5"  y="7"  width="6" height="2" fill="currentColor" />
      {/* Neck */}
      <rect x="6"  y="9"  width="4" height="1" fill="currentColor" />
      {/* Shoulders */}
      <rect x="3"  y="10" width="10" height="2" fill="currentColor" />
      {/* Body */}
      <rect x="4"  y="12" width="8" height="2" fill="currentColor" />
      {/* Legs */}
      <rect x="4"  y="14" width="3" height="2" fill="currentColor" />
      <rect x="9"  y="14" width="3" height="2" fill="currentColor" />
    </svg>
  )
}
