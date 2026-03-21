import type { SpriteProps } from './dragon-flamboyant'

// Phénix Cendré — 16x12 8-bit pixel art
// Soaring phoenix in flight. Wings dominate full width, golden breast, ember tail.
export function PhenixCendreSprite({ size = 128, className }: SpriteProps) {
  const cols = 16
  const rows = 12
  return (
    <svg
      viewBox="0 0 16 12"
      width={size}
      height={Math.round(size * (rows / cols))}
      shapeRendering="crispEdges"
      style={{ imageRendering: 'pixelated' as const }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Row 0: Wing tips at far edges ── */}
      <rect x={0} y={0} width={1} height={1} fill="#8c3620" />
      <rect x={15} y={0} width={1} height={1} fill="#8c3620" />

      {/* ── Row 1: Wings spreading inward ── */}
      <rect x={0} y={1} width={1} height={1} fill="#8c3620" />
      <rect x={1} y={1} width={1} height={1} fill="#be4a2f" />
      <rect x={2} y={1} width={1} height={1} fill="#f77622" />
      <rect x={12} y={1} width={1} height={1} fill="#f77622" />
      <rect x={13} y={1} width={1} height={1} fill="#be4a2f" />
      <rect x={14} y={1} width={1} height={1} fill="#8c3620" />
      <rect x={15} y={1} width={1} height={1} fill="#8c3620" />

      {/* ── Row 2: Wings spreading further ── */}
      <rect x={0} y={2} width={1} height={1} fill="#be4a2f" />
      <rect x={1} y={2} width={1} height={1} fill="#f77622" />
      <rect x={2} y={2} width={1} height={1} fill="#ffa53c" />
      <rect x={3} y={2} width={1} height={1} fill="#f77622" />
      <rect x={11} y={2} width={1} height={1} fill="#f77622" />
      <rect x={12} y={2} width={1} height={1} fill="#ffa53c" />
      <rect x={13} y={2} width={1} height={1} fill="#f77622" />
      <rect x={14} y={2} width={1} height={1} fill="#be4a2f" />
      <rect x={15} y={2} width={1} height={1} fill="#8c3620" />

      {/* ── Row 3: Golden crest + widest wingspan row starts ── */}
      <rect x={0} y={3} width={1} height={1} fill="#be4a2f" />
      <rect x={1} y={3} width={1} height={1} fill="#f77622" />
      <rect x={2} y={3} width={1} height={1} fill="#ffa53c" />
      <rect x={3} y={3} width={1} height={1} fill="#ffa53c" />
      <rect x={4} y={3} width={1} height={1} fill="#f77622" />
      <rect x={6} y={3} width={1} height={1} fill="#ffcd75" />
      <rect x={7} y={3} width={1} height={1} fill="#ffcd75" />
      <rect x={8} y={3} width={1} height={1} fill="#ffcd75" />
      <rect x={10} y={3} width={1} height={1} fill="#f77622" />
      <rect x={11} y={3} width={1} height={1} fill="#ffa53c" />
      <rect x={12} y={3} width={1} height={1} fill="#ffa53c" />
      <rect x={13} y={3} width={1} height={1} fill="#f77622" />
      <rect x={14} y={3} width={1} height={1} fill="#be4a2f" />
      <rect x={15} y={3} width={1} height={1} fill="#8c3620" />

      {/* ── Row 4: Full wingspan — head center with white eye ── */}
      <rect x={0} y={4} width={1} height={1} fill="#8c3620" />
      <rect x={1} y={4} width={1} height={1} fill="#be4a2f" />
      <rect x={2} y={4} width={1} height={1} fill="#f77622" />
      <rect x={3} y={4} width={1} height={1} fill="#ffa53c" />
      <rect x={4} y={4} width={1} height={1} fill="#f77622" />
      <rect x={5} y={4} width={1} height={1} fill="#be4a2f" />
      <rect x={6} y={4} width={1} height={1} fill="#fff" />
      <rect x={7} y={4} width={1} height={1} fill="#ffa53c" />
      <rect x={8} y={4} width={1} height={1} fill="#ffa53c" />
      <rect x={9} y={4} width={1} height={1} fill="#fff" />
      <rect x={10} y={4} width={1} height={1} fill="#be4a2f" />
      <rect x={11} y={4} width={1} height={1} fill="#f77622" />
      <rect x={12} y={4} width={1} height={1} fill="#ffa53c" />
      <rect x={13} y={4} width={1} height={1} fill="#f77622" />
      <rect x={14} y={4} width={1} height={1} fill="#be4a2f" />
      <rect x={15} y={4} width={1} height={1} fill="#8c3620" />

      {/* ── Row 5: Head + dark beak + full wingspan ── */}
      <rect x={0} y={5} width={1} height={1} fill="#8c3620" />
      <rect x={1} y={5} width={1} height={1} fill="#be4a2f" />
      <rect x={2} y={5} width={1} height={1} fill="#f77622" />
      <rect x={3} y={5} width={1} height={1} fill="#ffa53c" />
      <rect x={4} y={5} width={1} height={1} fill="#be4a2f" />
      <rect x={5} y={5} width={1} height={1} fill="#be4a2f" />
      <rect x={6} y={5} width={1} height={1} fill="#ffa53c" />
      <rect x={7} y={5} width={1} height={1} fill="#ffa53c" />
      <rect x={8} y={5} width={1} height={1} fill="#ffa53c" />
      <rect x={9} y={5} width={1} height={1} fill="#ffa53c" />
      <rect x={10} y={5} width={1} height={1} fill="#be4a2f" />
      <rect x={11} y={5} width={1} height={1} fill="#be4a2f" />
      <rect x={12} y={5} width={1} height={1} fill="#ffa53c" />
      <rect x={13} y={5} width={1} height={1} fill="#f77622" />
      <rect x={14} y={5} width={1} height={1} fill="#be4a2f" />
      <rect x={15} y={5} width={1} height={1} fill="#8c3620" />

      {/* ── Row 6: Compact body — gold breast ── */}
      <rect x={4} y={6} width={1} height={1} fill="#8c3620" />
      <rect x={5} y={6} width={1} height={1} fill="#be4a2f" />
      <rect x={6} y={6} width={1} height={1} fill="#f77622" />
      <rect x={7} y={6} width={1} height={1} fill="#ffcd75" />
      <rect x={8} y={6} width={1} height={1} fill="#ffcd75" />
      <rect x={9} y={6} width={1} height={1} fill="#f77622" />
      <rect x={10} y={6} width={1} height={1} fill="#be4a2f" />
      <rect x={11} y={6} width={1} height={1} fill="#8c3620" />

      {/* ── Row 7: Body lower — gold belly ── */}
      <rect x={5} y={7} width={1} height={1} fill="#8c3620" />
      <rect x={6} y={7} width={1} height={1} fill="#f77622" />
      <rect x={7} y={7} width={1} height={1} fill="#ffcd75" />
      <rect x={8} y={7} width={1} height={1} fill="#ffcd75" />
      <rect x={9} y={7} width={1} height={1} fill="#f77622" />
      <rect x={10} y={7} width={1} height={1} fill="#8c3620" />

      {/* ── Row 8: Tail fan spreading — symmetric V ── */}
      <rect x={3} y={8} width={1} height={1} fill="#be4a2f" />
      <rect x={4} y={8} width={1} height={1} fill="#f77622" />
      <rect x={5} y={8} width={1} height={1} fill="#ffa53c" />
      <rect x={6} y={8} width={1} height={1} fill="#f77622" />
      <rect x={7} y={8} width={1} height={1} fill="#be4a2f" />
      <rect x={8} y={8} width={1} height={1} fill="#be4a2f" />
      <rect x={9} y={8} width={1} height={1} fill="#f77622" />
      <rect x={10} y={8} width={1} height={1} fill="#ffa53c" />
      <rect x={11} y={8} width={1} height={1} fill="#f77622" />
      <rect x={12} y={8} width={1} height={1} fill="#be4a2f" />

      {/* ── Row 9: Tail fan lower V ── */}
      <rect x={2} y={9} width={1} height={1} fill="#be4a2f" />
      <rect x={3} y={9} width={1} height={1} fill="#f77622" />
      <rect x={4} y={9} width={1} height={1} fill="#ffa53c" />
      <rect x={5} y={9} width={1} height={1} fill="#be4a2f" />
      <rect x={9} y={9} width={1} height={1} fill="#be4a2f" />
      <rect x={10} y={9} width={1} height={1} fill="#ffa53c" />
      <rect x={11} y={9} width={1} height={1} fill="#f77622" />
      <rect x={12} y={9} width={1} height={1} fill="#be4a2f" />

      {/* ── Row 10: Trailing embers ── */}
      <rect x={1} y={10} width={1} height={1} fill="#be4a2f" />
      <rect x={2} y={10} width={1} height={1} fill="#f77622" />
      <rect x={3} y={10} width={1} height={1} fill="#be4a2f" />
      <rect x={12} y={10} width={1} height={1} fill="#be4a2f" />
      <rect x={13} y={10} width={1} height={1} fill="#f77622" />
      <rect x={14} y={10} width={1} height={1} fill="#be4a2f" />

      {/* ── Row 11: Tail tips ── */}
      <rect x={1} y={11} width={1} height={1} fill="#8c3620" />
      <rect x={2} y={11} width={1} height={1} fill="#be4a2f" />
      <rect x={13} y={11} width={1} height={1} fill="#be4a2f" />
      <rect x={14} y={11} width={1} height={1} fill="#8c3620" />
    </svg>
  )
}
