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
const id = 'app.cerulia.rpc.updatePlayerProfile'

export type QueryParams = {}

export interface InputSchema {
  blueskyProfileRef?: string
  displayNameOverride?: string
  descriptionOverride?: string
  avatarOverrideBlob?: BlobRef
  bannerOverrideBlob?: BlobRef
  websiteOverride?: string
  pronounsOverride?: string
  roleDistribution?: number
  playFormats?: string[]
  tools?: string[]
  ownedRulebooks?: string
  playableTimeSummary?: string
  preferredScenarioStyles?: string[]
  playStyles?: string[]
  boundaries?: string[]
  skills?: string[]
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
