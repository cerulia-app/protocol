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
import type * as AppCeruliaCoreCampaign from '../core/campaign.js'
import type * as AppCeruliaCoreRuleProfile from '../core/ruleProfile.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.cerulia.campaign.getView'

export type QueryParams = {
  campaignRef: string
}
export type InputSchema = undefined

export interface OutputSchema {
  campaign: AppCeruliaCoreCampaign.Main
  sessions?: SessionListItem[]
  ruleProfiles?: AppCeruliaCoreRuleProfile.Main[]
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
  $type?: 'app.cerulia.campaign.getView#sessionListItem'
  sessionRef: string
  role: 'pl' | 'gm' | (string & {})
  playedAt: string
  scenarioLabel?: string
  characterBranchRef?: string
  visibility: 'draft' | 'public' | (string & {})
}

const hashSessionListItem = 'sessionListItem'

export function isSessionListItem<V>(v: V) {
  return is$typed(v, id, hashSessionListItem)
}

export function validateSessionListItem<V>(v: V) {
  return validate<SessionListItem & V>(v, id, hashSessionListItem)
}
