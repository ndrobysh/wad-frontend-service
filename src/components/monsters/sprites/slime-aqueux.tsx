import type { SpriteProps } from './dragon-flamboyant'

// Slime Aqueux — 12x10 8-bit pixel art
// King Slime with golden crown, stern eyes, and water puddle base.
export function SlimeAqueuxSprite({ size = 128, className }: SpriteProps) {
  const cols = 12
  const rows = 10
  return (
    <svg
      viewBox="0 0 12 10"
      width={size}
      height={Math.round(size * (rows / cols))}
      shapeRendering="crispEdges"
      style={{ imageRendering: 'pixelated' as const }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Row 0: Crown peaks ── */}
      <rect x={2} y={0} width={1} height={1} fill="#ffcd75" />
      <rect x={4} y={0} width={1} height={1} fill="#ffcd75" />
      <rect x={6} y={0} width={1} height={1} fill="#ffcd75" />
      <rect x={8} y={0} width={1} height={1} fill="#ffcd75" />

      {/* ── Row 1: Crown upper with jewel accents ── */}
      <rect x={1} y={1} width={1} height={1} fill="#ffcd75" />
      <rect x={2} y={1} width={1} height={1} fill="#ffcd75" />
      <rect x={3} y={1} width={1} height={1} fill="#f77622" />
      <rect x={4} y={1} width={1} height={1} fill="#ffcd75" />
      <rect x={5} y={1} width={1} height={1} fill="#ffcd75" />
      <rect x={6} y={1} width={1} height={1} fill="#f77622" />
      <rect x={7} y={1} width={1} height={1} fill="#ffcd75" />
      <rect x={8} y={1} width={1} height={1} fill="#ffcd75" />
      <rect x={9} y={1} width={1} height={1} fill="#ffcd75" />

      {/* ── Row 2: Crown base meeting slime dome ── */}
      <rect x={1} y={2} width={1} height={1} fill="#ffcd75" />
      <rect x={2} y={2} width={1} height={1} fill="#ffcd75" />
      <rect x={3} y={2} width={1} height={1} fill="#ffcd75" />
      <rect x={4} y={2} width={1} height={1} fill="#ffcd75" />
      <rect x={5} y={2} width={1} height={1} fill="#ffcd75" />
      <rect x={6} y={2} width={1} height={1} fill="#ffcd75" />
      <rect x={7} y={2} width={1} height={1} fill="#ffcd75" />
      <rect x={8} y={2} width={1} height={1} fill="#ffcd75" />
      <rect x={9} y={2} width={1} height={1} fill="#ffcd75" />

      {/* ── Row 3: Upper dome — highlight at upper-left ── */}
      <rect x={2} y={3} width={1} height={1} fill="#5fcde4" />
      <rect x={3} y={3} width={1} height={1} fill="#a0e8f0" />
      <rect x={4} y={3} width={1} height={1} fill="#a0e8f0" />
      <rect x={5} y={3} width={1} height={1} fill="#5fcde4" />
      <rect x={6} y={3} width={1} height={1} fill="#5fcde4" />
      <rect x={7} y={3} width={1} height={1} fill="#5fcde4" />
      <rect x={8} y={3} width={1} height={1} fill="#4ab8d4" />
      <rect x={9} y={3} width={1} height={1} fill="#5fcde4" />

      {/* ── Row 4: Eyes — white with black pupils, wide apart, stern ── */}
      <rect x={1} y={4} width={1} height={1} fill="#4ab8d4" />
      <rect x={2} y={4} width={1} height={1} fill="#5fcde4" />
      <rect x={3} y={4} width={1} height={1} fill="#fff" />
      <rect x={4} y={4} width={1} height={1} fill="#1a1c2c" />
      <rect x={5} y={4} width={1} height={1} fill="#5fcde4" />
      <rect x={6} y={4} width={1} height={1} fill="#5fcde4" />
      <rect x={7} y={4} width={1} height={1} fill="#fff" />
      <rect x={8} y={4} width={1} height={1} fill="#1a1c2c" />
      <rect x={9} y={4} width={1} height={1} fill="#5fcde4" />
      <rect x={10} y={4} width={1} height={1} fill="#4ab8d4" />

      {/* ── Row 5: Stern horizontal mouth ── */}
      <rect x={1} y={5} width={1} height={1} fill="#4ab8d4" />
      <rect x={2} y={5} width={1} height={1} fill="#5fcde4" />
      <rect x={3} y={5} width={1} height={1} fill="#5fcde4" />
      <rect x={4} y={5} width={1} height={1} fill="#38a0b8" />
      <rect x={5} y={5} width={1} height={1} fill="#38a0b8" />
      <rect x={6} y={5} width={1} height={1} fill="#38a0b8" />
      <rect x={7} y={5} width={1} height={1} fill="#38a0b8" />
      <rect x={8} y={5} width={1} height={1} fill="#5fcde4" />
      <rect x={9} y={5} width={1} height={1} fill="#5fcde4" />
      <rect x={10} y={5} width={1} height={1} fill="#4ab8d4" />

      {/* ── Row 6: Body expanding ── */}
      <rect x={0} y={6} width={1} height={1} fill="#38a0b8" />
      <rect x={1} y={6} width={1} height={1} fill="#4ab8d4" />
      <rect x={2} y={6} width={1} height={1} fill="#5fcde4" />
      <rect x={3} y={6} width={1} height={1} fill="#5fcde4" />
      <rect x={4} y={6} width={1} height={1} fill="#7dd8ed" />
      <rect x={5} y={6} width={1} height={1} fill="#7dd8ed" />
      <rect x={6} y={6} width={1} height={1} fill="#7dd8ed" />
      <rect x={7} y={6} width={1} height={1} fill="#5fcde4" />
      <rect x={8} y={6} width={1} height={1} fill="#5fcde4" />
      <rect x={9} y={6} width={1} height={1} fill="#4ab8d4" />
      <rect x={10} y={6} width={1} height={1} fill="#4ab8d4" />
      <rect x={11} y={6} width={1} height={1} fill="#38a0b8" />

      {/* ── Row 7: Wide body ── */}
      <rect x={0} y={7} width={1} height={1} fill="#38a0b8" />
      <rect x={1} y={7} width={1} height={1} fill="#4ab8d4" />
      <rect x={2} y={7} width={1} height={1} fill="#5fcde4" />
      <rect x={3} y={7} width={1} height={1} fill="#7dd8ed" />
      <rect x={4} y={7} width={1} height={1} fill="#7dd8ed" />
      <rect x={5} y={7} width={1} height={1} fill="#5fcde4" />
      <rect x={6} y={7} width={1} height={1} fill="#5fcde4" />
      <rect x={7} y={7} width={1} height={1} fill="#7dd8ed" />
      <rect x={8} y={7} width={1} height={1} fill="#5fcde4" />
      <rect x={9} y={7} width={1} height={1} fill="#4ab8d4" />
      <rect x={10} y={7} width={1} height={1} fill="#4ab8d4" />
      <rect x={11} y={7} width={1} height={1} fill="#38a0b8" />

      {/* ── Row 8: Base of slime body ── */}
      <rect x={0} y={8} width={1} height={1} fill="#38a0b8" />
      <rect x={1} y={8} width={1} height={1} fill="#4ab8d4" />
      <rect x={2} y={8} width={1} height={1} fill="#4ab8d4" />
      <rect x={3} y={8} width={1} height={1} fill="#5fcde4" />
      <rect x={4} y={8} width={1} height={1} fill="#5fcde4" />
      <rect x={5} y={8} width={1} height={1} fill="#5fcde4" />
      <rect x={6} y={8} width={1} height={1} fill="#5fcde4" />
      <rect x={7} y={8} width={1} height={1} fill="#5fcde4" />
      <rect x={8} y={8} width={1} height={1} fill="#4ab8d4" />
      <rect x={9} y={8} width={1} height={1} fill="#4ab8d4" />
      <rect x={10} y={8} width={1} height={1} fill="#38a0b8" />

      {/* ── Row 9: Water puddle ── */}
      <rect x={1} y={9} width={1} height={1} fill="#38a0b8" />
      <rect x={2} y={9} width={1} height={1} fill="#38a0b8" />
      <rect x={3} y={9} width={1} height={1} fill="#38a0b8" />
      <rect x={4} y={9} width={1} height={1} fill="#4ab8d4" />
      <rect x={5} y={9} width={1} height={1} fill="#4ab8d4" />
      <rect x={6} y={9} width={1} height={1} fill="#4ab8d4" />
      <rect x={7} y={9} width={1} height={1} fill="#38a0b8" />
      <rect x={8} y={9} width={1} height={1} fill="#38a0b8" />
      <rect x={9} y={9} width={1} height={1} fill="#38a0b8" />
    </svg>
  )
}
