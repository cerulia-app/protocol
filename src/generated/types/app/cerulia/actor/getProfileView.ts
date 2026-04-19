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
import type * as AppCeruliaCorePlayerProfile from '../core/playerProfile.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.cerulia.actor.getProfileView'

export type QueryParams = {
  did: string
}
export type InputSchema = undefined

export interface OutputSchema {
  profile: AppCeruliaCorePlayerProfile.Main
  publicBranches?: BranchListItem[]
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

export interface BranchListItem {
  $type?: 'app.cerulia.actor.getProfileView#branchListItem'
  branchRef: string
  branchLabel: string
  baseSheetRef: string
  branchKind: 'main' | 'campaign-fork' | 'local-override' | (string & {})
  visibility: 'draft' | 'public' | (string & {})
  revision: number
  updatedAt?: string
}

const hashBranchListItem = 'branchListItem'

export function isBranchListItem<V>(v: V) {
  return is$typed(v, id, hashBranchListItem)
}

export function validateBranchListItem<V>(v: V) {
  return validate<BranchListItem & V>(v, id, hashBranchListItem)
}
