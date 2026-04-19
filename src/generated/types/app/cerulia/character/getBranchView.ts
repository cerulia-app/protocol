/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap, XRPCError } from '@atproto/xrpc'
import { type ValidationResult, BlobRef } from '@atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../../lexicons'
import {
  type $Typed,
  is$typed as _is$typed,
  type OmitKey,
} from '../../../../util'
import type * as AppCeruliaCoreCharacterBranch from '../core/characterBranch.js'
import type * as AppCeruliaCoreCharacterSheet from '../core/characterSheet.js'
import type * as AppCeruliaCoreCharacterAdvancement from '../core/characterAdvancement.js'
import type * as AppCeruliaCoreCharacterConversion from '../core/characterConversion.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.cerulia.character.getBranchView'

export type QueryParams = {
  characterBranchRef: string
}
export type InputSchema = undefined

export interface OutputSchema {
  branch: AppCeruliaCoreCharacterBranch.Main
  sheet: AppCeruliaCoreCharacterSheet.Main
  advancements?: AppCeruliaCoreCharacterAdvancement.Main[]
  conversions?: AppCeruliaCoreCharacterConversion.Main[]
  recentSessions?: SessionListItem[]
}

export interface CallOptions {
  signal?: AbortSignal
  headers?: HeadersMap
}

export interface Response {
  success: boolean
  headers: HeadersMap
  data: OutputSchema
}

export function toKnownErr(e: any) {
  return e
}

export interface SessionListItem {
  $type?: 'app.cerulia.character.getBranchView#sessionListItem'
  sessionRef: string
  role: 'pl' | 'gm' | (string & {})
  playedAt: string
  scenarioLabel?: string
  visibility: 'draft' | 'public' | (string & {})
}

const hashSessionListItem = 'sessionListItem'

export function isSessionListItem<V>(v: V) {
  return is$typed(v, id, hashSessionListItem)
}

export function validateSessionListItem<V>(v: V) {
  return validate<SessionListItem & V>(v, id, hashSessionListItem)
}
