// ============================================
// Sahla — Validators
// ============================================

export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export function validatePassword(password) {
  // Minimum 8 characters, at least one letter and one number
  return password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password)
}

export function validateDisplayName(name) {
  return name && name.trim().length >= 2 && name.trim().length <= 50
}

export function validateFeedback(text) {
  return text && text.trim().length >= 10 && text.trim().length <= 1000
}

export function validateFeatureRequest(title, description) {
  return (
    title && title.trim().length >= 5 && title.trim().length <= 100 &&
    description && description.trim().length >= 20 && description.trim().length <= 2000
  )
}
