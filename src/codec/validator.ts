import type { ValidationResult } from '@atproto/lexicon'
import { validate } from '../generated/lexicons.js'

export function validateTyped<T extends { $type: string }>(
  value: T,
): ValidationResult {
  return validate(value, value.$type, 'main', true)
}

export function validateById(
  value: unknown,
  lexiconId: string,
  defId = 'main',
  enforceLexiconType = false,
): ValidationResult {
  if (enforceLexiconType) {
    return validate(value, lexiconId, defId, true)
  }

  return validate(value, lexiconId, defId)
}
