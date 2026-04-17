export const mutationResultKinds = [
  'accepted',
  'rejected',
  'rebase-needed',
] as const

export type MutationResultKind = (typeof mutationResultKinds)[number]

export const mutationReasonCodes = [
  'forbidden-owner-mismatch',
  'invalid-required-field',
  'invalid-exactly-one',
  'invalid-schema-link',
  'invalid-public-uri',
  'rebase-required',
  'terminal-state-readonly',
] as const

export type MutationReasonCode = (typeof mutationReasonCodes)[number]

export interface MutationAck {
  resultKind: MutationResultKind
  emittedRecordRefs?: string[]
  reasonCode?: MutationReasonCode
  correlationId?: string
  message?: string
}
