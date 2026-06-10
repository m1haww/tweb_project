"use client"

interface PricingToggleProps {
  billing: "monthly" | "yearly"
  onChange: (value: "monthly" | "yearly") => void
}

export function PricingToggle({ billing, onChange }: PricingToggleProps) {
  return (
    <div className="mx-auto flex w-fit items-center gap-1 rounded-full border border-border bg-card/60 p-1 backdrop-blur-sm">
      <button
        type="button"
        onClick={() => onChange("monthly")}
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
          billing === "monthly"
            ? "bg-cyber-blue text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Lunar
      </button>
      <button
        type="button"
        onClick={() => onChange("yearly")}
        className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
          billing === "yearly"
            ? "bg-cyber-blue text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Anual
        <span
          className={`rounded-full px-1.5 py-0.5 text-[10px] ${
            billing === "yearly"
              ? "bg-background/20 text-background"
              : "bg-cyber-blue/10 text-cyber-blue"
          }`}
        >
          -17%
        </span>
      </button>
    </div>
  )
}
