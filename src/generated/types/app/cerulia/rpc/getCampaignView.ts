/**
 * GENERATED CODE - DO NOT MODIFY
 */
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
const id = 'app.cerulia.rpc.getCampaignView'

export type QueryParams = {
  campaignRef: string
}
export type InputSchema = undefined
export type OutputSchema = Output
export type HandlerInput = void

export interface HandlerSuccess {
  encoding: 'application/json'
  body: OutputSchema
  headers?: { [key: string]: string }
}

export interface HandlerError {
  status: number
  message?: string
}

export type HandlerOutput = HandlerError | HandlerSuccess

export interface Output {
  $type?: 'app.cerulia.rpc.getCampaignView#output'
  campaign?: { [_ in string]: unknown }
  sessions?: { [_ in string]: unknown }
  ruleOverlay?: { [_ in string]: unknown }
  campaignSummary?: { [_ in string]: unknown }
  sessionSummaries?: { [_ in string]: unknown }
  ruleOverlaySummary?: { [_ in string]: unknown }
}

const hashOutput = 'output'

export function isOutput<V>(v: V) {
  return is$typed(v, id, hashOutput)
}

export function validateOutput<V>(v: V) {
  return validate<Output & V>(v, id, hashOutput)
}
