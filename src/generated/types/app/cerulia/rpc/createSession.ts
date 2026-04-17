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
const id = 'app.cerulia.rpc.createSession'

export type QueryParams = {}

export interface InputSchema {
  role: 'pl' | 'gm' | (string & {})
  playedAt: string
  scenarioRef?: string
  scenarioLabel?: string
  characterBranchRef?: string
  campaignRef?: string
  hoLabel?: string
  hoSummary?: string
  outcomeSummary?: string
  externalArchiveUris?: string[]
  visibility?: 'draft' | 'public' | (string & {})
  note?: string
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
