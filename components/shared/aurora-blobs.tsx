"use client"

export function AuroraBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] animate-aurora"
        style={{ background: 'radial-gradient(circle, #5196CE 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] animate-aurora-delayed"
        style={{ background: 'radial-gradient(circle, #FE8492 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-32 left-1/3 w-[450px] h-[450px] rounded-full opacity-10 blur-[110px] animate-aurora"
        style={{ background: 'radial-gradient(circle, #45141B 0%, transparent 70%)' }}
      />
    </div>
  )
}
