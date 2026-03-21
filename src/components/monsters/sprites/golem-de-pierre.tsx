import type { SpriteProps } from './dragon-flamboyant'

// Golem de Pierre — 14x11 8-bit pixel art
// Classic humanoid golem. Massive shoulders, blocky head, glowing amber eyes,
// thick column legs. Dramatic V-taper from shoulder width to narrow waist.
export function GolemDePierreSprite({ size = 128, className }: SpriteProps) {
  const cols = 14
  const rows = 11
  return (
    <svg
      viewBox="0 0 14 11"
      width={size}
      height={Math.round(size * (rows / cols))}
      shapeRendering="crispEdges"
      style={{ imageRendering: 'pixelated' as const }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Row 0: Flat-topped head — 6px wide centered ── */}
      <rect x={4} y={0} width={1} height={1} fill="#8c6a4a" />
      <rect x={5} y={0} width={1} height={1} fill="#a77b5b" />
      <rect x={6} y={0} width={1} height={1} fill="#c09070" />
      <rect x={7} y={0} width={1} height={1} fill="#c09070" />
      <rect x={8} y={0} width={1} height={1} fill="#a77b5b" />
      <rect x={9} y={0} width={1} height={1} fill="#8c6a4a" />

      {/* ── Row 1: Head mid — blocky stone face ── */}
      <rect x={4} y={1} width={1} height={1} fill="#8c6a4a" />
      <rect x={5} y={1} width={1} height={1} fill="#a77b5b" />
      <rect x={6} y={1} width={1} height={1} fill="#c09070" />
      <rect x={7} y={1} width={1} height={1} fill="#c09070" />
      <rect x={8} y={1} width={1} height={1} fill="#a77b5b" />
      <rect x={9} y={1} width={1} height={1} fill="#6b5040" />

      {/* ── Row 2: Glowing amber eyes ── */}
      <rect x={4} y={2} width={1} height={1} fill="#6b5040" />
      <rect x={5} y={2} width={1} height={1} fill="#ffcd75" />
      <rect x={6} y={2} width={1} height={1} fill="#a77b5b" />
      <rect x={7} y={2} width={1} height={1} fill="#a77b5b" />
      <rect x={8} y={2} width={1} height={1} fill="#ffcd75" />
      <rect x={9} y={2} width={1} height={1} fill="#6b5040" />

      {/* ── Row 3: Dark jaw crevice ── */}
      <rect x={4} y={3} width={1} height={1} fill="#8c6a4a" />
      <rect x={5} y={3} width={1} height={1} fill="#6b5040" />
      <rect x={6} y={3} width={1} height={1} fill="#6b5040" />
      <rect x={7} y={3} width={1} height={1} fill="#6b5040" />
      <rect x={8} y={3} width={1} height={1} fill="#6b5040" />
      <rect x={9} y={3} width={1} height={1} fill="#8c6a4a" />

      {/* ── Row 4: Very broad shoulders — nearly full 14px width ── */}
      <rect x={0} y={4} width={1} height={1} fill="#6b5040" />
      <rect x={1} y={4} width={1} height={1} fill="#8c6a4a" />
      <rect x={2} y={4} width={1} height={1} fill="#a77b5b" />
      <rect x={3} y={4} width={1} height={1} fill="#a77b5b" />
      <rect x={4} y={4} width={1} height={1} fill="#c09070" />
      <rect x={5} y={4} width={1} height={1} fill="#c09070" />
      <rect x={6} y={4} width={1} height={1} fill="#c09070" />
      <rect x={7} y={4} width={1} height={1} fill="#c09070" />
      <rect x={8} y={4} width={1} height={1} fill="#c09070" />
      <rect x={9} y={4} width={1} height={1} fill="#c09070" />
      <rect x={10} y={4} width={1} height={1} fill="#a77b5b" />
      <rect x={11} y={4} width={1} height={1} fill="#a77b5b" />
      <rect x={12} y={4} width={1} height={1} fill="#8c6a4a" />
      <rect x={13} y={4} width={1} height={1} fill="#6b5040" />

      {/* ── Row 5: Massive arms + body ── */}
      <rect x={0} y={5} width={1} height={1} fill="#6b5040" />
      <rect x={1} y={5} width={1} height={1} fill="#8c6a4a" />
      <rect x={2} y={5} width={1} height={1} fill="#a77b5b" />
      <rect x={3} y={5} width={1} height={1} fill="#6b5040" />
      <rect x={4} y={5} width={1} height={1} fill="#a77b5b" />
      <rect x={5} y={5} width={1} height={1} fill="#c09070" />
      <rect x={6} y={5} width={1} height={1} fill="#c09070" />
      <rect x={7} y={5} width={1} height={1} fill="#c09070" />
      <rect x={8} y={5} width={1} height={1} fill="#c09070" />
      <rect x={9} y={5} width={1} height={1} fill="#a77b5b" />
      <rect x={10} y={5} width={1} height={1} fill="#6b5040" />
      <rect x={11} y={5} width={1} height={1} fill="#a77b5b" />
      <rect x={12} y={5} width={1} height={1} fill="#8c6a4a" />
      <rect x={13} y={5} width={1} height={1} fill="#6b5040" />

      {/* ── Row 6: Arms + fists + body ── */}
      <rect x={0} y={6} width={1} height={1} fill="#6b5040" />
      <rect x={1} y={6} width={1} height={1} fill="#6b5040" />
      <rect x={2} y={6} width={1} height={1} fill="#6b5040" />
      <rect x={3} y={6} width={1} height={1} fill="#8c6a4a" />
      <rect x={4} y={6} width={1} height={1} fill="#a77b5b" />
      <rect x={5} y={6} width={1} height={1} fill="#c09070" />
      <rect x={6} y={6} width={1} height={1} fill="#c09070" />
      <rect x={7} y={6} width={1} height={1} fill="#c09070" />
      <rect x={8} y={6} width={1} height={1} fill="#c09070" />
      <rect x={9} y={6} width={1} height={1} fill="#a77b5b" />
      <rect x={10} y={6} width={1} height={1} fill="#8c6a4a" />
      <rect x={11} y={6} width={1} height={1} fill="#6b5040" />
      <rect x={12} y={6} width={1} height={1} fill="#6b5040" />
      <rect x={13} y={6} width={1} height={1} fill="#6b5040" />

      {/* ── Row 7: Body with light belly ── */}
      <rect x={4} y={7} width={1} height={1} fill="#8c6a4a" />
      <rect x={5} y={7} width={1} height={1} fill="#a77b5b" />
      <rect x={6} y={7} width={1} height={1} fill="#c09070" />
      <rect x={7} y={7} width={1} height={1} fill="#c09070" />
      <rect x={8} y={7} width={1} height={1} fill="#a77b5b" />
      <rect x={9} y={7} width={1} height={1} fill="#8c6a4a" />

      {/* ── Row 8: Narrow waist ── */}
      <rect x={5} y={8} width={1} height={1} fill="#8c6a4a" />
      <rect x={6} y={8} width={1} height={1} fill="#a77b5b" />
      <rect x={7} y={8} width={1} height={1} fill="#a77b5b" />
      <rect x={8} y={8} width={1} height={1} fill="#8c6a4a" />

      {/* ── Row 9: Thick legs ── */}
      <rect x={4} y={9} width={1} height={1} fill="#8c6a4a" />
      <rect x={5} y={9} width={1} height={1} fill="#a77b5b" />
      <rect x={6} y={9} width={1} height={1} fill="#a77b5b" />
      <rect x={7} y={9} width={1} height={1} fill="#6b5040" />
      <rect x={8} y={9} width={1} height={1} fill="#a77b5b" />
      <rect x={9} y={9} width={1} height={1} fill="#a77b5b" />
      <rect x={10} y={9} width={1} height={1} fill="#8c6a4a" />

      {/* ── Row 10: Wide flat feet ── */}
      <rect x={3} y={10} width={1} height={1} fill="#6b5040" />
      <rect x={4} y={10} width={1} height={1} fill="#6b5040" />
      <rect x={5} y={10} width={1} height={1} fill="#6b5040" />
      <rect x={6} y={10} width={1} height={1} fill="#6b5040" />
      <rect x={7} y={10} width={1} height={1} fill="#6b5040" />
      <rect x={8} y={10} width={1} height={1} fill="#6b5040" />
      <rect x={9} y={10} width={1} height={1} fill="#6b5040" />
      <rect x={10} y={10} width={1} height={1} fill="#6b5040" />
    </svg>
  )
}
