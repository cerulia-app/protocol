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
import type * as AppCeruliaDefs from '../defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.cerulia.rpc.updateCampaign'

export type QueryParams = {}

export interface InputSchema {
  campaignRef: string
  title?: string
  houseRef?: string
  rulesetNsid?: string
  sharedRuleProfileRefs?: string[]
  visibility?: 'draft' | 'public' | (string & {})
  archivedAt?: string
}

export type OutputSchema = AppCeruliaDefs.MutationAck

export interface HandlerInput {
  encoding: 'application/json'
  body: InputSchema
}

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
