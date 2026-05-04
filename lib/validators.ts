export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function isStrongPassword(password: string, minLength = 6): boolean {
  return password.length >= minLength
}

export function validateRegisterForm(data: {
  email: string
  password: string
  name?: string
}): string | null {
  if (!data.email || !isValidEmail(data.email)) {
    return "Email-ul nu este valid"
  }
  if (!data.password || data.password.length < 6) {
    return "Parola trebuie sa aiba minim 6 caractere"
  }
  return null
}

export function validateLoginForm(data: { email: string; password: string }): string | null {
  if (!data.email || !isValidEmail(data.email)) {
    return "Email-ul nu este valid"
  }
  if (!data.password) {
    return "Parola este obligatorie"
  }
  return null
}
