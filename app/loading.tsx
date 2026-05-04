import { Spinner } from "@/components/shared/spinner"

export default function Loading() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Spinner size="lg" color="blue" />
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Loading
        </p>
      </div>
    </div>
  )
}
