import {
  XrpcClient,
  type FetchHandler,
  type FetchHandlerOptions,
} from '@atproto/xrpc'
import { schemas } from '../generated/lexicons.js'

export class CeruliaProtocolClient extends XrpcClient {
  constructor(options: FetchHandler | FetchHandlerOptions) {
    super(options, schemas)
  }
}
