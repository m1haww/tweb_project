export function getErrorMessage(error: unknown): string {
  if (typeof error === "string") return error
  if (error instanceof Error) return error.message
  if (error && typeof error === "object" && "message" in error) {
    const msg = (error as { message: unknown }).message
    if (typeof msg === "string") return msg
  }
  return "A intervenit o eroare necunoscuta"
}

export function isUnauthorized(error: unknown): boolean {
  if (error && typeof error === "object" && "status" in error) {
    return (error as { status: number }).status === 401
  }
  return false
}

export function isNotFound(error: unknown): boolean {
  if (error && typeof error === "object" && "status" in error) {
    return (error as { status: number }).status === 404
  }
  return false
}
