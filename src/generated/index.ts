/**
 * GENERATED CODE - DO NOT MODIFY
 */
import {
  type Auth,
  type Options as XrpcOptions,
  Server as XrpcServer,
  type StreamConfigOrHandler,
  type MethodConfigOrHandler,
  createServer as createXrpcServer,
} from '@atproto/xrpc-server'
import { schemas } from './lexicons.js'
import * as AppCeruliaRpcCreateCampaign from './types/app/cerulia/rpc/createCampaign.js'
import * as AppCeruliaRpcCreateCharacterBranch from './types/app/cerulia/rpc/createCharacterBranch.js'
import * as AppCeruliaRpcCreateCharacterSheet from './types/app/cerulia/rpc/createCharacterSheet.js'
import * as AppCeruliaRpcCreateCharacterSheetSchema from './types/app/cerulia/rpc/createCharacterSheetSchema.js'
import * as AppCeruliaRpcCreateHouse from './types/app/cerulia/rpc/createHouse.js'
import * as AppCeruliaRpcCreateRuleProfile from './types/app/cerulia/rpc/createRuleProfile.js'
import * as AppCeruliaRpcCreateScenario from './types/app/cerulia/rpc/createScenario.js'
import * as AppCeruliaRpcCreateSession from './types/app/cerulia/rpc/createSession.js'
import * as AppCeruliaRpcGetCampaignView from './types/app/cerulia/rpc/getCampaignView.js'
import * as AppCeruliaRpcGetCharacterBranchView from './types/app/cerulia/rpc/getCharacterBranchView.js'
import * as AppCeruliaRpcGetCharacterHome from './types/app/cerulia/rpc/getCharacterHome.js'
import * as AppCeruliaRpcGetCharacterSheetSchema from './types/app/cerulia/rpc/getCharacterSheetSchema.js'
import * as AppCeruliaRpcGetHouseView from './types/app/cerulia/rpc/getHouseView.js'
import * as AppCeruliaRpcGetPlayerProfileView from './types/app/cerulia/rpc/getPlayerProfileView.js'
import * as AppCeruliaRpcGetRuleProfile from './types/app/cerulia/rpc/getRuleProfile.js'
import * as AppCeruliaRpcGetScenarioView from './types/app/cerulia/rpc/getScenarioView.js'
import * as AppCeruliaRpcGetSessionView from './types/app/cerulia/rpc/getSessionView.js'
import * as AppCeruliaRpcListCharacterSheetSchemas from './types/app/cerulia/rpc/listCharacterSheetSchemas.js'
import * as AppCeruliaRpcListRuleProfiles from './types/app/cerulia/rpc/listRuleProfiles.js'
import * as AppCeruliaRpcListScenarios from './types/app/cerulia/rpc/listScenarios.js'
import * as AppCeruliaRpcListSessions from './types/app/cerulia/rpc/listSessions.js'
import * as AppCeruliaRpcRebaseCharacterSheet from './types/app/cerulia/rpc/rebaseCharacterSheet.js'
import * as AppCeruliaRpcRecordCharacterAdvancement from './types/app/cerulia/rpc/recordCharacterAdvancement.js'
import * as AppCeruliaRpcRecordCharacterConversion from './types/app/cerulia/rpc/recordCharacterConversion.js'
import * as AppCeruliaRpcRetireCharacterBranch from './types/app/cerulia/rpc/retireCharacterBranch.js'
import * as AppCeruliaRpcUpdateCampaign from './types/app/cerulia/rpc/updateCampaign.js'
import * as AppCeruliaRpcUpdateCharacterBranch from './types/app/cerulia/rpc/updateCharacterBranch.js'
import * as AppCeruliaRpcUpdateCharacterSheet from './types/app/cerulia/rpc/updateCharacterSheet.js'
import * as AppCeruliaRpcUpdateHouse from './types/app/cerulia/rpc/updateHouse.js'
import * as AppCeruliaRpcUpdatePlayerProfile from './types/app/cerulia/rpc/updatePlayerProfile.js'
import * as AppCeruliaRpcUpdateRuleProfile from './types/app/cerulia/rpc/updateRuleProfile.js'
import * as AppCeruliaRpcUpdateScenario from './types/app/cerulia/rpc/updateScenario.js'
import * as AppCeruliaRpcUpdateSession from './types/app/cerulia/rpc/updateSession.js'

export const APP_CERULIA = {
  AuthCoreReader: 'app.cerulia.authCoreReader',
  AuthCoreWriter: 'app.cerulia.authCoreWriter',
}

export function createServer(options?: XrpcOptions): Server {
  return new Server(options)
}

export class Server {
  xrpc: XrpcServer
  app: AppNS

  constructor(options?: XrpcOptions) {
    this.xrpc = createXrpcServer(schemas, options)
    this.app = new AppNS(this)
  }
}

export class AppNS {
  _server: Server
  cerulia: AppCeruliaNS

  constructor(server: Server) {
    this._server = server
    this.cerulia = new AppCeruliaNS(server)
  }
}

export class AppCeruliaNS {
  _server: Server
  core: AppCeruliaCoreNS
  rpc: AppCeruliaRpcNS

  constructor(server: Server) {
    this._server = server
    this.core = new AppCeruliaCoreNS(server)
    this.rpc = new AppCeruliaRpcNS(server)
  }
}

export class AppCeruliaCoreNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }
}

export class AppCeruliaRpcNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }

  createCampaign<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcCreateCampaign.QueryParams,
      AppCeruliaRpcCreateCampaign.HandlerInput,
      AppCeruliaRpcCreateCampaign.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.createCampaign' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createCharacterBranch<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcCreateCharacterBranch.QueryParams,
      AppCeruliaRpcCreateCharacterBranch.HandlerInput,
      AppCeruliaRpcCreateCharacterBranch.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.createCharacterBranch' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createCharacterSheet<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcCreateCharacterSheet.QueryParams,
      AppCeruliaRpcCreateCharacterSheet.HandlerInput,
      AppCeruliaRpcCreateCharacterSheet.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.createCharacterSheet' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createCharacterSheetSchema<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcCreateCharacterSheetSchema.QueryParams,
      AppCeruliaRpcCreateCharacterSheetSchema.HandlerInput,
      AppCeruliaRpcCreateCharacterSheetSchema.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.createCharacterSheetSchema' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createHouse<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcCreateHouse.QueryParams,
      AppCeruliaRpcCreateHouse.HandlerInput,
      AppCeruliaRpcCreateHouse.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.createHouse' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createRuleProfile<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcCreateRuleProfile.QueryParams,
      AppCeruliaRpcCreateRuleProfile.HandlerInput,
      AppCeruliaRpcCreateRuleProfile.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.createRuleProfile' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createScenario<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcCreateScenario.QueryParams,
      AppCeruliaRpcCreateScenario.HandlerInput,
      AppCeruliaRpcCreateScenario.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.createScenario' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  createSession<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcCreateSession.QueryParams,
      AppCeruliaRpcCreateSession.HandlerInput,
      AppCeruliaRpcCreateSession.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.createSession' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getCampaignView<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcGetCampaignView.QueryParams,
      AppCeruliaRpcGetCampaignView.HandlerInput,
      AppCeruliaRpcGetCampaignView.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.getCampaignView' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getCharacterBranchView<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcGetCharacterBranchView.QueryParams,
      AppCeruliaRpcGetCharacterBranchView.HandlerInput,
      AppCeruliaRpcGetCharacterBranchView.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.getCharacterBranchView' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getCharacterHome<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcGetCharacterHome.QueryParams,
      AppCeruliaRpcGetCharacterHome.HandlerInput,
      AppCeruliaRpcGetCharacterHome.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.getCharacterHome' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getCharacterSheetSchema<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcGetCharacterSheetSchema.QueryParams,
      AppCeruliaRpcGetCharacterSheetSchema.HandlerInput,
      AppCeruliaRpcGetCharacterSheetSchema.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.getCharacterSheetSchema' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getHouseView<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcGetHouseView.QueryParams,
      AppCeruliaRpcGetHouseView.HandlerInput,
      AppCeruliaRpcGetHouseView.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.getHouseView' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getPlayerProfileView<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcGetPlayerProfileView.QueryParams,
      AppCeruliaRpcGetPlayerProfileView.HandlerInput,
      AppCeruliaRpcGetPlayerProfileView.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.getPlayerProfileView' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getRuleProfile<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcGetRuleProfile.QueryParams,
      AppCeruliaRpcGetRuleProfile.HandlerInput,
      AppCeruliaRpcGetRuleProfile.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.getRuleProfile' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getScenarioView<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcGetScenarioView.QueryParams,
      AppCeruliaRpcGetScenarioView.HandlerInput,
      AppCeruliaRpcGetScenarioView.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.getScenarioView' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  getSessionView<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcGetSessionView.QueryParams,
      AppCeruliaRpcGetSessionView.HandlerInput,
      AppCeruliaRpcGetSessionView.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.getSessionView' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listCharacterSheetSchemas<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcListCharacterSheetSchemas.QueryParams,
      AppCeruliaRpcListCharacterSheetSchemas.HandlerInput,
      AppCeruliaRpcListCharacterSheetSchemas.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.listCharacterSheetSchemas' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listRuleProfiles<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcListRuleProfiles.QueryParams,
      AppCeruliaRpcListRuleProfiles.HandlerInput,
      AppCeruliaRpcListRuleProfiles.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.listRuleProfiles' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listScenarios<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcListScenarios.QueryParams,
      AppCeruliaRpcListScenarios.HandlerInput,
      AppCeruliaRpcListScenarios.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.listScenarios' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  listSessions<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcListSessions.QueryParams,
      AppCeruliaRpcListSessions.HandlerInput,
      AppCeruliaRpcListSessions.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.listSessions' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  rebaseCharacterSheet<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcRebaseCharacterSheet.QueryParams,
      AppCeruliaRpcRebaseCharacterSheet.HandlerInput,
      AppCeruliaRpcRebaseCharacterSheet.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.rebaseCharacterSheet' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  recordCharacterAdvancement<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcRecordCharacterAdvancement.QueryParams,
      AppCeruliaRpcRecordCharacterAdvancement.HandlerInput,
      AppCeruliaRpcRecordCharacterAdvancement.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.recordCharacterAdvancement' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  recordCharacterConversion<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcRecordCharacterConversion.QueryParams,
      AppCeruliaRpcRecordCharacterConversion.HandlerInput,
      AppCeruliaRpcRecordCharacterConversion.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.recordCharacterConversion' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  retireCharacterBranch<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcRetireCharacterBranch.QueryParams,
      AppCeruliaRpcRetireCharacterBranch.HandlerInput,
      AppCeruliaRpcRetireCharacterBranch.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.retireCharacterBranch' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateCampaign<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcUpdateCampaign.QueryParams,
      AppCeruliaRpcUpdateCampaign.HandlerInput,
      AppCeruliaRpcUpdateCampaign.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.updateCampaign' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateCharacterBranch<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcUpdateCharacterBranch.QueryParams,
      AppCeruliaRpcUpdateCharacterBranch.HandlerInput,
      AppCeruliaRpcUpdateCharacterBranch.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.updateCharacterBranch' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateCharacterSheet<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcUpdateCharacterSheet.QueryParams,
      AppCeruliaRpcUpdateCharacterSheet.HandlerInput,
      AppCeruliaRpcUpdateCharacterSheet.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.updateCharacterSheet' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateHouse<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcUpdateHouse.QueryParams,
      AppCeruliaRpcUpdateHouse.HandlerInput,
      AppCeruliaRpcUpdateHouse.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.updateHouse' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updatePlayerProfile<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcUpdatePlayerProfile.QueryParams,
      AppCeruliaRpcUpdatePlayerProfile.HandlerInput,
      AppCeruliaRpcUpdatePlayerProfile.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.updatePlayerProfile' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateRuleProfile<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcUpdateRuleProfile.QueryParams,
      AppCeruliaRpcUpdateRuleProfile.HandlerInput,
      AppCeruliaRpcUpdateRuleProfile.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.updateRuleProfile' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateScenario<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcUpdateScenario.QueryParams,
      AppCeruliaRpcUpdateScenario.HandlerInput,
      AppCeruliaRpcUpdateScenario.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.updateScenario' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }

  updateSession<A extends Auth = void>(
    cfg: MethodConfigOrHandler<
      A,
      AppCeruliaRpcUpdateSession.QueryParams,
      AppCeruliaRpcUpdateSession.HandlerInput,
      AppCeruliaRpcUpdateSession.HandlerOutput
    >,
  ) {
    const nsid = 'app.cerulia.rpc.updateSession' // @ts-ignore
    return this._server.xrpc.method(nsid, cfg)
  }
}
