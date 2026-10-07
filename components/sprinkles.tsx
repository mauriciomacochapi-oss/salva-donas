const defaultSprinkles = [
  { top: '8%', left: '6%', rotate: 30, color: 'bg-vanilla' },
  { top: '18%', left: '88%', rotate: -20, color: 'bg-strawberry' },
  { top: '72%', left: '4%', rotate: 70, color: 'bg-caramel' },
  { top: '84%', left: '78%', rotate: 15, color: 'bg-vanilla' },
  { top: '40%', left: '94%', rotate: 60, color: 'bg-pink' },
  { top: '55%', left: '14%', rotate: -45, color: 'bg-pink' },
  { top: '12%', left: '48%', rotate: 80, color: 'bg-caramel' },
  { top: '90%', left: '40%', rotate: -30, color: 'bg-strawberry' },
]

export function Sprinkles({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {defaultSprinkles.map((s, i) => (
        <span
          key={i}
          className={`absolute h-2 w-6 rounded-full ${s.color}`}
          style={{ top: s.top, left: s.left, transform: `rotate(${s.rotate}deg)` }}
        />
      ))}
    </div>
  )
}
