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

const is$typed = _is$typed,
  validate = _validate
const id = 'app.cerulia.rpc.getCharacterBranchView'

export type QueryParams = {
  characterBranchRef: string
}
export type InputSchema = undefined
export type OutputSchema = Output

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

export interface Output {
  $type?: 'app.cerulia.rpc.getCharacterBranchView#output'
  branch?: { [_ in string]: unknown }
  sheet?: { [_ in string]: unknown }
  recentSessions?: { [_ in string]: unknown }
  advancements?: { [_ in string]: unknown }
  conversions?: { [_ in string]: unknown }
  branchSummary?: { [_ in string]: unknown }
  sheetSummary?: { [_ in string]: unknown }
  recentSessionSummaries?: { [_ in string]: unknown }
  advancementSummaries?: { [_ in string]: unknown }
  conversionSummaries?: { [_ in string]: unknown }
}

const hashOutput = 'output'

export function isOutput<V>(v: V) {
  return is$typed(v, id, hashOutput)
}

export function validateOutput<V>(v: V) {
  return validate<Output & V>(v, id, hashOutput)
}
