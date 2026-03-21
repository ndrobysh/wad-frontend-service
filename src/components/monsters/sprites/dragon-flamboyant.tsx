export interface SpriteProps {
  size?: number
  className?: string
}

// Dragon Flamboyant — 14x12 8-bit pixel art
// Classic Western Dragon, facing forward with wings spread and fire breath.
export function DragonFlamboyantSprite({ size = 128, className }: SpriteProps) {
  const cols = 14
  const rows = 12
  return (
    <svg
      viewBox="0 0 14 12"
      width={size}
      height={Math.round(size * (rows / cols))}
      shapeRendering="crispEdges"
      style={{ imageRendering: 'pixelated' as const }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Row 0: Horn tips ── */}
      <rect x={4} y={0} width={1} height={1} fill="#ffcd75" />
      <rect x={9} y={0} width={1} height={1} fill="#ffcd75" />

      {/* ── Row 1: Horn shafts + head top ── */}
      <rect x={4} y={1} width={1} height={1} fill="#ffcd75" />
      <rect x={5} y={1} width={1} height={1} fill="#8c3620" />
      <rect x={6} y={1} width={1} height={1} fill="#8c3620" />
      <rect x={7} y={1} width={1} height={1} fill="#8c3620" />
      <rect x={8} y={1} width={1} height={1} fill="#8c3620" />
      <rect x={9} y={1} width={1} height={1} fill="#ffcd75" />

      {/* ── Row 2: Head face — brow ── */}
      <rect x={4} y={2} width={1} height={1} fill="#8c3620" />
      <rect x={5} y={2} width={1} height={1} fill="#be4a2f" />
      <rect x={6} y={2} width={1} height={1} fill="#ffa53c" />
      <rect x={7} y={2} width={1} height={1} fill="#ffa53c" />
      <rect x={8} y={2} width={1} height={1} fill="#be4a2f" />
      <rect x={9} y={2} width={1} height={1} fill="#8c3620" />

      {/* ── Row 3: Eyes ── */}
      <rect x={4} y={3} width={1} height={1} fill="#8c3620" />
      <rect x={5} y={3} width={1} height={1} fill="#fff" />
      <rect x={6} y={3} width={1} height={1} fill="#f77622" />
      <rect x={7} y={3} width={1} height={1} fill="#f77622" />
      <rect x={8} y={3} width={1} height={1} fill="#fff" />
      <rect x={9} y={3} width={1} height={1} fill="#8c3620" />

      {/* ── Row 4: Fire breath + jaw ── */}
      {/* fire breath extending left */}
      <rect x={0} y={4} width={1} height={1} fill="#ffcd75" />
      <rect x={1} y={4} width={1} height={1} fill="#ffa53c" />
      <rect x={2} y={4} width={1} height={1} fill="#f77622" />
      {/* jaw / snout */}
      <rect x={3} y={4} width={1} height={1} fill="#8c3620" />
      <rect x={4} y={4} width={1} height={1} fill="#be4a2f" />
      <rect x={5} y={4} width={1} height={1} fill="#ffcd75" />
      <rect x={6} y={4} width={1} height={1} fill="#ffcd75" />
      <rect x={7} y={4} width={1} height={1} fill="#ffcd75" />
      <rect x={8} y={4} width={1} height={1} fill="#be4a2f" />
      <rect x={9} y={4} width={1} height={1} fill="#8c3620" />

      {/* ── Row 5: Neck ── */}
      <rect x={5} y={5} width={1} height={1} fill="#8c3620" />
      <rect x={6} y={5} width={1} height={1} fill="#f77622" />
      <rect x={7} y={5} width={1} height={1} fill="#f77622" />
      <rect x={8} y={5} width={1} height={1} fill="#8c3620" />

      {/* ── Row 6: Wings upper — bat wing frame ── */}
      <rect x={0} y={6} width={1} height={1} fill="#8c3620" />
      <rect x={1} y={6} width={1} height={1} fill="#be4a2f" />
      <rect x={2} y={6} width={1} height={1} fill="#f77622" />
      <rect x={3} y={6} width={1} height={1} fill="#be4a2f" />
      <rect x={4} y={6} width={1} height={1} fill="#8c3620" />
      <rect x={5} y={6} width={1} height={1} fill="#f77622" />
      <rect x={6} y={6} width={1} height={1} fill="#ffcd75" />
      <rect x={7} y={6} width={1} height={1} fill="#ffcd75" />
      <rect x={8} y={6} width={1} height={1} fill="#f77622" />
      <rect x={9} y={6} width={1} height={1} fill="#8c3620" />
      <rect x={10} y={6} width={1} height={1} fill="#be4a2f" />
      <rect x={11} y={6} width={1} height={1} fill="#f77622" />
      <rect x={12} y={6} width={1} height={1} fill="#be4a2f" />
      <rect x={13} y={6} width={1} height={1} fill="#8c3620" />

      {/* ── Row 7: Wings lower membrane ── */}
      <rect x={0} y={7} width={1} height={1} fill="#8c3620" />
      <rect x={1} y={7} width={1} height={1} fill="#f77622" />
      <rect x={2} y={7} width={1} height={1} fill="#be4a2f" />
      <rect x={3} y={7} width={1} height={1} fill="#8c3620" />
      <rect x={4} y={7} width={1} height={1} fill="#f77622" />
      <rect x={5} y={7} width={1} height={1} fill="#ffa53c" />
      <rect x={6} y={7} width={1} height={1} fill="#ffcd75" />
      <rect x={7} y={7} width={1} height={1} fill="#ffcd75" />
      <rect x={8} y={7} width={1} height={1} fill="#ffa53c" />
      <rect x={9} y={7} width={1} height={1} fill="#f77622" />
      <rect x={10} y={7} width={1} height={1} fill="#8c3620" />
      <rect x={11} y={7} width={1} height={1} fill="#be4a2f" />
      <rect x={12} y={7} width={1} height={1} fill="#f77622" />
      <rect x={13} y={7} width={1} height={1} fill="#8c3620" />

      {/* ── Row 8: Body center — gold belly ── */}
      <rect x={4} y={8} width={1} height={1} fill="#8c3620" />
      <rect x={5} y={8} width={1} height={1} fill="#f77622" />
      <rect x={6} y={8} width={1} height={1} fill="#ffcd75" />
      <rect x={7} y={8} width={1} height={1} fill="#ffcd75" />
      <rect x={8} y={8} width={1} height={1} fill="#f77622" />
      <rect x={9} y={8} width={1} height={1} fill="#8c3620" />

      {/* ── Row 9: Lower body ── */}
      <rect x={4} y={9} width={1} height={1} fill="#8c3620" />
      <rect x={5} y={9} width={1} height={1} fill="#be4a2f" />
      <rect x={6} y={9} width={1} height={1} fill="#ffa53c" />
      <rect x={7} y={9} width={1} height={1} fill="#ffa53c" />
      <rect x={8} y={9} width={1} height={1} fill="#be4a2f" />
      <rect x={9} y={9} width={1} height={1} fill="#8c3620" />

      {/* ── Row 10: Legs separated ── */}
      <rect x={3} y={10} width={1} height={1} fill="#8c3620" />
      <rect x={4} y={10} width={1} height={1} fill="#be4a2f" />
      <rect x={5} y={10} width={1} height={1} fill="#8c3620" />
      <rect x={8} y={10} width={1} height={1} fill="#8c3620" />
      <rect x={9} y={10} width={1} height={1} fill="#be4a2f" />
      <rect x={10} y={10} width={1} height={1} fill="#8c3620" />

      {/* ── Row 11: Clawed feet + tail tip ── */}
      <rect x={2} y={11} width={1} height={1} fill="#8c3620" />
      <rect x={3} y={11} width={1} height={1} fill="#8c3620" />
      <rect x={4} y={11} width={1} height={1} fill="#8c3620" />
      <rect x={8} y={11} width={1} height={1} fill="#8c3620" />
      <rect x={9} y={11} width={1} height={1} fill="#8c3620" />
      <rect x={10} y={11} width={1} height={1} fill="#8c3620" />
      {/* tail extending right */}
      <rect x={11} y={11} width={1} height={1} fill="#be4a2f" />
      <rect x={12} y={11} width={1} height={1} fill="#be4a2f" />
      <rect x={13} y={11} width={1} height={1} fill="#ffcd75" />
    </svg>
  )
}
