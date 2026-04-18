import { describe, expect, test } from 'bun:test'

import { decodeById, decodeTyped, tryDecodeById } from './parser.js'
import { validateById } from './validator.js'

describe('codec parser/validator', () => {
  test('validateById succeeds for a valid character sheet record', () => {
    const record = {
      $type: 'app.cerulia.core.characterSheet',
      ownerDid: 'did:plc:exampleownerdid1234567890',
      rulesetNsid: 'app.cerulia.ruleset.coc7',
      displayName: 'Kurosawa Reiji',
      version: 1,
      createdAt: '2026-04-18T00:00:00.000Z',
      updatedAt: '2026-04-18T00:00:00.000Z',
    }

    const result = validateById(record, 'app.cerulia.core.characterSheet', 'main', true)
    expect(result.success).toBe(true)
  })

  test('decodeTyped throws for invalid payload', () => {
    const invalidRecord = {
      $type: 'app.cerulia.core.characterSheet',
      ownerDid: 'invalid-did',
      rulesetNsid: 'not.an.nsid',
      displayName: 'broken',
      version: 1,
      createdAt: 'not-datetime',
      updatedAt: 'not-datetime',
    }

    expect(() => decodeTyped(invalidRecord as never)).toThrow()
  })

  test('decodeById returns validated payload', () => {
    const payload = {
      resultKind: 'accepted',
      emittedRecordRefs: ['at://did:plc:exampleownerdid1234567890/app.cerulia.core.session/3lcabcde12345'],
    }

    const decoded = decodeById<typeof payload>(payload, 'app.cerulia.defs', 'mutationAck')
    expect(decoded.resultKind).toBe('accepted')
  })

  test('tryDecodeById returns failure for malformed mutationAck', () => {
    const result = tryDecodeById(
      {},
      'app.cerulia.defs',
      'mutationAck',
      false,
    )

    expect(result.success).toBe(false)
  })
})
