/**
 * GENERATED CODE - DO NOT MODIFY
 */
import {
  type LexiconDoc,
  Lexicons,
  ValidationError,
  type ValidationResult,
} from '@atproto/lexicon'
import { type $Typed, is$typed, maybe$typed } from './util.js'

export const schemaDict = {
  AppCeruliaAuthCoreReader: {
    lexicon: 1,
    id: 'app.cerulia.authCoreReader',
    defs: {
      main: {
        type: 'token',
        description:
          'OAuth scope bundle granting authenticated read access to core projections for the owner.',
      },
    },
  },
  AppCeruliaAuthCoreWriter: {
    lexicon: 1,
    id: 'app.cerulia.authCoreWriter',
    defs: {
      main: {
        type: 'token',
        description:
          'OAuth scope bundle granting write access to all core records.',
      },
    },
  },
  AppCeruliaCoreCampaign: {
    lexicon: 1,
    id: 'app.cerulia.core.campaign',
    defs: {
      main: {
        type: 'record',
        key: 'any',
        record: {
          type: 'object',
          properties: {
            campaignId: {
              type: 'string',
            },
            title: {
              type: 'string',
              maxLength: 640,
            },
            houseRef: {
              type: 'string',
              format: 'at-uri',
            },
            rulesetNsid: {
              type: 'string',
              format: 'nsid',
            },
            sharedRuleProfileRefs: {
              type: 'array',
              items: {
                type: 'string',
                format: 'at-uri',
              },
            },
            visibility: {
              type: 'string',
              knownValues: ['draft', 'public'],
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
            archivedAt: {
              type: 'string',
              format: 'datetime',
            },
            updatedAt: {
              type: 'string',
              format: 'datetime',
            },
          },
          required: [
            'campaignId',
            'title',
            'rulesetNsid',
            'visibility',
            'createdAt',
            'updatedAt',
          ],
        },
      },
    },
  },
  AppCeruliaCoreCharacterAdvancement: {
    lexicon: 1,
    id: 'app.cerulia.core.characterAdvancement',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        record: {
          type: 'object',
          properties: {
            characterBranchRef: {
              type: 'string',
              format: 'at-uri',
            },
            advancementKind: {
              type: 'string',
              knownValues: [
                'xp-spend',
                'milestone',
                'retrain',
                'respec',
                'correction',
              ],
            },
            deltaPayload: {
              type: 'unknown',
            },
            sessionRef: {
              type: 'string',
              format: 'at-uri',
            },
            previousValues: {
              type: 'unknown',
            },
            effectiveAt: {
              type: 'string',
              format: 'datetime',
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
            note: {
              type: 'string',
              maxLength: 3000,
            },
          },
          required: [
            'characterBranchRef',
            'advancementKind',
            'deltaPayload',
            'effectiveAt',
            'createdAt',
          ],
        },
      },
    },
  },
  AppCeruliaCoreCharacterBranch: {
    lexicon: 1,
    id: 'app.cerulia.core.characterBranch',
    defs: {
      main: {
        type: 'record',
        key: 'any',
        record: {
          type: 'object',
          properties: {
            ownerDid: {
              type: 'string',
              format: 'did',
            },
            baseSheetRef: {
              type: 'string',
              format: 'at-uri',
            },
            branchKind: {
              type: 'string',
              knownValues: ['main', 'campaign-fork', 'local-override'],
            },
            branchLabel: {
              type: 'string',
              maxLength: 640,
            },
            overridePayload: {
              type: 'unknown',
            },
            visibility: {
              type: 'string',
              knownValues: ['draft', 'public'],
            },
            revision: {
              type: 'integer',
              minimum: 1,
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
            updatedAt: {
              type: 'string',
              format: 'datetime',
            },
            retiredAt: {
              type: 'string',
              format: 'datetime',
            },
          },
          required: [
            'ownerDid',
            'baseSheetRef',
            'branchKind',
            'branchLabel',
            'visibility',
            'revision',
            'createdAt',
            'updatedAt',
          ],
        },
      },
    },
  },
  AppCeruliaCoreCharacterConversion: {
    lexicon: 1,
    id: 'app.cerulia.core.characterConversion',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        record: {
          type: 'object',
          properties: {
            sourceSheetRef: {
              type: 'string',
              format: 'at-uri',
            },
            sourceSheetVersion: {
              type: 'integer',
              minimum: 1,
            },
            sourceBranchRef: {
              type: 'string',
              format: 'at-uri',
            },
            sourceRulesetNsid: {
              type: 'string',
              format: 'nsid',
            },
            targetSheetRef: {
              type: 'string',
              format: 'at-uri',
            },
            targetSheetVersion: {
              type: 'integer',
              minimum: 1,
            },
            targetBranchRef: {
              type: 'string',
              format: 'at-uri',
            },
            targetRulesetNsid: {
              type: 'string',
              format: 'nsid',
            },
            conversionContractRef: {
              type: 'string',
              format: 'uri',
            },
            convertedAt: {
              type: 'string',
              format: 'datetime',
            },
            note: {
              type: 'string',
              maxLength: 3000,
            },
          },
          required: [
            'sourceSheetRef',
            'sourceSheetVersion',
            'sourceBranchRef',
            'sourceRulesetNsid',
            'targetSheetRef',
            'targetSheetVersion',
            'targetBranchRef',
            'targetRulesetNsid',
            'convertedAt',
          ],
        },
      },
    },
  },
  AppCeruliaCoreCharacterSheet: {
    lexicon: 1,
    id: 'app.cerulia.core.characterSheet',
    defs: {
      main: {
        type: 'record',
        description:
          'Character original. The portable base with settings, stats, and portrait for a character owned by a player.',
        key: 'any',
        record: {
          type: 'object',
          required: [
            'ownerDid',
            'rulesetNsid',
            'displayName',
            'version',
            'createdAt',
            'updatedAt',
          ],
          properties: {
            ownerDid: {
              type: 'string',
              format: 'did',
              description: 'DID of the player who owns this character.',
            },
            sheetSchemaRef: {
              type: 'string',
              format: 'at-uri',
              description:
                'Reference to the character-sheet-schema this sheet conforms to. Required for active records; schema-less is legacy/import/recovery only.',
            },
            rulesetNsid: {
              type: 'string',
              format: 'nsid',
              description:
                'Root NSID of the ruleset this character belongs to.',
            },
            displayName: {
              type: 'string',
              maxLength: 640,
              description: 'Public-safe character name.',
            },
            portraitBlob: {
              type: 'blob',
              description: "Portrait image blob uploaded to the owner's repo.",
            },
            profileSummary: {
              type: 'string',
              maxLength: 3000,
              description: 'Public-safe character introduction text.',
            },
            stats: {
              type: 'unknown',
              description:
                'Structured stats payload conforming to fieldDefs when sheetSchemaRef is present; free-form JSON for legacy/import/recovery otherwise.',
            },
            version: {
              type: 'integer',
              minimum: 1,
              description:
                'Monotonically increasing version counter. Starts at 1 on create.',
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
              description: 'UTC datetime when the record was created.',
            },
            updatedAt: {
              type: 'string',
              format: 'datetime',
              description: 'UTC datetime when the record was last updated.',
            },
          },
        },
      },
    },
  },
  AppCeruliaCoreCharacterSheetSchema: {
    lexicon: 1,
    id: 'app.cerulia.core.characterSheetSchema',
    defs: {
      main: {
        type: 'record',
        key: 'any',
        record: {
          type: 'object',
          properties: {
            baseRulesetNsid: {
              type: 'string',
              format: 'nsid',
            },
            schemaVersion: {
              type: 'string',
            },
            title: {
              type: 'string',
              maxLength: 640,
            },
            ownerDid: {
              type: 'string',
              format: 'did',
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
            fieldDefs: {
              type: 'array',
              items: {
                type: 'ref',
                ref: 'lex:app.cerulia.core.characterSheetSchema#fieldDefRoot',
              },
            },
          },
          required: [
            'baseRulesetNsid',
            'schemaVersion',
            'title',
            'ownerDid',
            'createdAt',
          ],
        },
      },
      fieldDefLeaf: {
        type: 'object',
        properties: {
          fieldId: {
            type: 'string',
          },
          label: {
            type: 'string',
            maxLength: 320,
          },
          fieldType: {
            type: 'string',
            knownValues: ['integer', 'string', 'boolean', 'enum'],
          },
          valueRange: {
            type: 'unknown',
          },
          required: {
            type: 'boolean',
          },
          description: {
            type: 'string',
          },
        },
        required: ['fieldId', 'label', 'fieldType', 'required'],
      },
      fieldDefNode: {
        type: 'object',
        properties: {
          fieldId: {
            type: 'string',
          },
          label: {
            type: 'string',
            maxLength: 320,
          },
          fieldType: {
            type: 'string',
            knownValues: [
              'integer',
              'string',
              'boolean',
              'enum',
              'group',
              'array',
            ],
          },
          children: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:app.cerulia.core.characterSheetSchema#fieldDefLeaf',
            },
          },
          itemDef: {
            type: 'ref',
            ref: 'lex:app.cerulia.core.characterSheetSchema#fieldDefLeaf',
          },
          valueRange: {
            type: 'unknown',
          },
          required: {
            type: 'boolean',
          },
          description: {
            type: 'string',
          },
          extensible: {
            type: 'boolean',
          },
          additionalFieldDef: {
            type: 'ref',
            ref: 'lex:app.cerulia.core.characterSheetSchema#fieldDefLeaf',
          },
        },
        required: ['fieldId', 'label', 'fieldType', 'required'],
      },
      fieldDefRoot: {
        type: 'object',
        properties: {
          fieldId: {
            type: 'string',
          },
          label: {
            type: 'string',
            maxLength: 320,
          },
          fieldType: {
            type: 'string',
            knownValues: [
              'integer',
              'string',
              'boolean',
              'enum',
              'group',
              'array',
            ],
          },
          children: {
            type: 'array',
            items: {
              type: 'ref',
              ref: 'lex:app.cerulia.core.characterSheetSchema#fieldDefNode',
            },
          },
          itemDef: {
            type: 'ref',
            ref: 'lex:app.cerulia.core.characterSheetSchema#fieldDefLeaf',
          },
          valueRange: {
            type: 'unknown',
          },
          required: {
            type: 'boolean',
          },
          description: {
            type: 'string',
          },
          extensible: {
            type: 'boolean',
          },
          additionalFieldDef: {
            type: 'ref',
            ref: 'lex:app.cerulia.core.characterSheetSchema#fieldDefLeaf',
          },
        },
        required: ['fieldId', 'label', 'fieldType', 'required'],
      },
    },
  },
  AppCeruliaCoreHouse: {
    lexicon: 1,
    id: 'app.cerulia.core.house',
    defs: {
      main: {
        type: 'record',
        key: 'any',
        record: {
          type: 'object',
          properties: {
            houseId: {
              type: 'string',
            },
            title: {
              type: 'string',
              maxLength: 640,
            },
            canonSummary: {
              type: 'string',
              maxLength: 3000,
            },
            defaultRuleProfileRefs: {
              type: 'array',
              items: {
                type: 'string',
                format: 'at-uri',
              },
            },
            policySummary: {
              type: 'string',
              maxLength: 3000,
            },
            externalCommunityUri: {
              type: 'string',
              format: 'uri',
            },
            visibility: {
              type: 'string',
              knownValues: ['draft', 'public'],
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
            updatedAt: {
              type: 'string',
              format: 'datetime',
            },
          },
          required: [
            'houseId',
            'title',
            'visibility',
            'createdAt',
            'updatedAt',
          ],
        },
      },
    },
  },
  AppCeruliaCorePlayerProfile: {
    lexicon: 1,
    id: 'app.cerulia.core.playerProfile',
    defs: {
      main: {
        type: 'record',
        key: 'literal:self',
        record: {
          type: 'object',
          properties: {
            ownerDid: {
              type: 'string',
              format: 'did',
            },
            blueskyProfileRef: {
              type: 'string',
              format: 'at-uri',
            },
            displayNameOverride: {
              type: 'string',
              maxLength: 640,
            },
            descriptionOverride: {
              type: 'string',
              maxLength: 3000,
            },
            avatarOverrideBlob: {
              type: 'blob',
            },
            bannerOverrideBlob: {
              type: 'blob',
            },
            websiteOverride: {
              type: 'string',
              format: 'uri',
            },
            pronounsOverride: {
              type: 'string',
              maxLength: 100,
            },
            roleDistribution: {
              type: 'integer',
              minimum: 0,
              maximum: 100,
            },
            playFormats: {
              type: 'array',
              items: {
                type: 'string',
                knownValues: ['text', 'semi-text', 'voice', 'offline'],
              },
            },
            tools: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            ownedRulebooks: {
              type: 'string',
              maxLength: 3000,
            },
            playableTimeSummary: {
              type: 'string',
              maxLength: 3000,
            },
            preferredScenarioStyles: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            playStyles: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            boundaries: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            skills: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
            updatedAt: {
              type: 'string',
              format: 'datetime',
            },
          },
          required: ['ownerDid', 'createdAt', 'updatedAt'],
        },
      },
    },
  },
  AppCeruliaCoreRuleProfile: {
    lexicon: 1,
    id: 'app.cerulia.core.ruleProfile',
    defs: {
      main: {
        type: 'record',
        key: 'any',
        record: {
          type: 'object',
          properties: {
            baseRulesetNsid: {
              type: 'string',
              format: 'nsid',
            },
            profileTitle: {
              type: 'string',
              maxLength: 640,
            },
            scopeKind: {
              type: 'string',
              knownValues: ['house-shared', 'campaign-shared'],
            },
            scopeRef: {
              type: 'string',
              format: 'at-uri',
            },
            rulesPatchUri: {
              type: 'string',
              format: 'uri',
            },
            ownerDid: {
              type: 'string',
              format: 'did',
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
            updatedAt: {
              type: 'string',
              format: 'datetime',
            },
          },
          required: [
            'baseRulesetNsid',
            'profileTitle',
            'scopeKind',
            'scopeRef',
            'rulesPatchUri',
            'ownerDid',
            'createdAt',
            'updatedAt',
          ],
        },
      },
    },
  },
  AppCeruliaCoreScenario: {
    lexicon: 1,
    id: 'app.cerulia.core.scenario',
    defs: {
      main: {
        type: 'record',
        key: 'any',
        record: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              maxLength: 640,
            },
            rulesetNsid: {
              type: 'string',
              format: 'nsid',
            },
            recommendedSheetSchemaRef: {
              type: 'string',
              format: 'at-uri',
            },
            sourceCitationUri: {
              type: 'string',
              format: 'uri',
            },
            summary: {
              type: 'string',
              maxLength: 3000,
            },
            ownerDid: {
              type: 'string',
              format: 'did',
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
            updatedAt: {
              type: 'string',
              format: 'datetime',
            },
          },
          required: ['title', 'ownerDid', 'createdAt', 'updatedAt'],
        },
      },
    },
  },
  AppCeruliaCoreSession: {
    lexicon: 1,
    id: 'app.cerulia.core.session',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        record: {
          type: 'object',
          properties: {
            scenarioRef: {
              type: 'string',
              format: 'at-uri',
            },
            scenarioLabel: {
              type: 'string',
              maxLength: 640,
            },
            characterBranchRef: {
              type: 'string',
              format: 'at-uri',
            },
            role: {
              type: 'string',
              knownValues: ['pl', 'gm'],
            },
            campaignRef: {
              type: 'string',
              format: 'at-uri',
            },
            playedAt: {
              type: 'string',
              format: 'datetime',
            },
            hoLabel: {
              type: 'string',
              maxLength: 640,
            },
            hoSummary: {
              type: 'string',
              maxLength: 3000,
            },
            outcomeSummary: {
              type: 'string',
              maxLength: 3000,
            },
            externalArchiveUris: {
              type: 'array',
              items: {
                type: 'string',
                format: 'uri',
              },
            },
            visibility: {
              type: 'string',
              knownValues: ['draft', 'public'],
            },
            note: {
              type: 'string',
              maxLength: 3000,
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
            updatedAt: {
              type: 'string',
              format: 'datetime',
            },
          },
          required: [
            'role',
            'playedAt',
            'visibility',
            'createdAt',
            'updatedAt',
          ],
        },
      },
    },
  },
  AppCeruliaDefs: {
    lexicon: 1,
    id: 'app.cerulia.defs',
    defs: {
      mutationAck: {
        type: 'object',
        description:
          'Mutation result acknowledgement. Returned by all mutation procedures.',
        required: ['resultKind'],
        properties: {
          resultKind: {
            type: 'string',
            knownValues: ['accepted', 'rejected', 'rebase-needed'],
            description: 'Outcome of the mutation attempt.',
          },
          emittedRecordRefs: {
            type: 'array',
            items: {
              type: 'string',
              format: 'at-uri',
            },
            description:
              'Persistent record refs emitted on accepted. Present only when resultKind=accepted and at least one record was written.',
          },
          reasonCode: {
            type: 'string',
            description: 'Machine-readable stable failure category.',
            knownValues: [
              'forbidden-owner-mismatch',
              'invalid-required-field',
              'invalid-exactly-one',
              'invalid-schema-link',
              'invalid-public-uri',
              'rebase-required',
              'terminal-state-readonly',
            ],
          },
          correlationId: {
            type: 'string',
            description: 'Support and log correlation request identifier.',
          },
          message: {
            type: 'string',
            description: 'Human-readable short explanation.',
          },
        },
      },
    },
  },
  AppCeruliaRpcCreateCampaign: {
    lexicon: 1,
    id: 'app.cerulia.rpc.createCampaign',
    defs: {
      main: {
        type: 'procedure',
        description: 'Create campaign.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                maxLength: 640,
              },
              rulesetNsid: {
                type: 'string',
                format: 'nsid',
              },
              houseRef: {
                type: 'string',
                format: 'at-uri',
              },
              sharedRuleProfileRefs: {
                type: 'array',
                items: {
                  type: 'string',
                  format: 'at-uri',
                },
              },
              visibility: {
                type: 'string',
                knownValues: ['draft', 'public'],
              },
            },
            required: ['title', 'rulesetNsid'],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcCreateCharacterBranch: {
    lexicon: 1,
    id: 'app.cerulia.rpc.createCharacterBranch',
    defs: {
      main: {
        type: 'procedure',
        description: 'Create character branch.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              baseSheetRef: {
                type: 'string',
                format: 'at-uri',
              },
              branchKind: {
                type: 'string',
                knownValues: ['campaign-fork', 'local-override'],
              },
              branchLabel: {
                type: 'string',
                maxLength: 640,
              },
              overridePayload: {
                type: 'unknown',
              },
              visibility: {
                type: 'string',
                knownValues: ['draft', 'public'],
              },
            },
            required: ['baseSheetRef', 'branchKind', 'branchLabel'],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcCreateCharacterSheet: {
    lexicon: 1,
    id: 'app.cerulia.rpc.createCharacterSheet',
    defs: {
      main: {
        type: 'procedure',
        description: 'Create character sheet.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              rulesetNsid: {
                type: 'string',
                format: 'nsid',
              },
              sheetSchemaRef: {
                type: 'string',
                format: 'at-uri',
              },
              displayName: {
                type: 'string',
                maxLength: 640,
              },
              portraitBlob: {
                type: 'blob',
              },
              profileSummary: {
                type: 'string',
                maxLength: 3000,
              },
              stats: {
                type: 'unknown',
              },
              initialBranchVisibility: {
                type: 'string',
                knownValues: ['draft', 'public'],
              },
            },
            required: ['rulesetNsid', 'sheetSchemaRef', 'displayName'],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcCreateCharacterSheetSchema: {
    lexicon: 1,
    id: 'app.cerulia.rpc.createCharacterSheetSchema',
    defs: {
      main: {
        type: 'procedure',
        description: 'Create character sheet schema.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              baseRulesetNsid: {
                type: 'string',
                format: 'nsid',
              },
              schemaVersion: {
                type: 'string',
              },
              title: {
                type: 'string',
                maxLength: 640,
              },
              fieldDefs: {
                type: 'array',
                items: {
                  type: 'unknown',
                },
              },
            },
            required: [
              'baseRulesetNsid',
              'schemaVersion',
              'title',
              'fieldDefs',
            ],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcCreateHouse: {
    lexicon: 1,
    id: 'app.cerulia.rpc.createHouse',
    defs: {
      main: {
        type: 'procedure',
        description: 'Create house.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                maxLength: 640,
              },
              canonSummary: {
                type: 'string',
                maxLength: 3000,
              },
              defaultRuleProfileRefs: {
                type: 'array',
                items: {
                  type: 'string',
                  format: 'at-uri',
                },
              },
              policySummary: {
                type: 'string',
                maxLength: 3000,
              },
              externalCommunityUri: {
                type: 'string',
                format: 'uri',
              },
              visibility: {
                type: 'string',
                knownValues: ['draft', 'public'],
              },
            },
            required: ['title'],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcCreateRuleProfile: {
    lexicon: 1,
    id: 'app.cerulia.rpc.createRuleProfile',
    defs: {
      main: {
        type: 'procedure',
        description: 'Create rule profile.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              baseRulesetNsid: {
                type: 'string',
                format: 'nsid',
              },
              profileTitle: {
                type: 'string',
                maxLength: 640,
              },
              scopeKind: {
                type: 'string',
                knownValues: ['house-shared', 'campaign-shared'],
              },
              scopeRef: {
                type: 'string',
                format: 'at-uri',
              },
              rulesPatchUri: {
                type: 'string',
                format: 'uri',
              },
            },
            required: [
              'baseRulesetNsid',
              'profileTitle',
              'scopeKind',
              'scopeRef',
              'rulesPatchUri',
            ],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcCreateScenario: {
    lexicon: 1,
    id: 'app.cerulia.rpc.createScenario',
    defs: {
      main: {
        type: 'procedure',
        description: 'Create scenario.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                maxLength: 640,
              },
              rulesetNsid: {
                type: 'string',
                format: 'nsid',
              },
              recommendedSheetSchemaRef: {
                type: 'string',
                format: 'at-uri',
              },
              sourceCitationUri: {
                type: 'string',
                format: 'uri',
              },
              summary: {
                type: 'string',
                maxLength: 3000,
              },
            },
            required: ['title'],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcCreateSession: {
    lexicon: 1,
    id: 'app.cerulia.rpc.createSession',
    defs: {
      main: {
        type: 'procedure',
        description: 'Create session.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              role: {
                type: 'string',
                knownValues: ['pl', 'gm'],
              },
              playedAt: {
                type: 'string',
                format: 'datetime',
              },
              scenarioRef: {
                type: 'string',
                format: 'at-uri',
              },
              scenarioLabel: {
                type: 'string',
                maxLength: 640,
              },
              characterBranchRef: {
                type: 'string',
                format: 'at-uri',
              },
              campaignRef: {
                type: 'string',
                format: 'at-uri',
              },
              hoLabel: {
                type: 'string',
                maxLength: 640,
              },
              hoSummary: {
                type: 'string',
                maxLength: 3000,
              },
              outcomeSummary: {
                type: 'string',
                maxLength: 3000,
              },
              externalArchiveUris: {
                type: 'array',
                items: {
                  type: 'string',
                  format: 'uri',
                },
              },
              visibility: {
                type: 'string',
                knownValues: ['draft', 'public'],
              },
              note: {
                type: 'string',
                maxLength: 3000,
              },
            },
            required: ['role', 'playedAt'],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcGetCampaignView: {
    lexicon: 1,
    id: 'app.cerulia.rpc.getCampaignView',
    defs: {
      main: {
        type: 'query',
        description: 'Get campaign owner/public projection.',
        parameters: {
          type: 'params',
          properties: {
            campaignRef: {
              type: 'string',
              format: 'at-uri',
            },
          },
          required: ['campaignRef'],
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.rpc.getCampaignView#output',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          campaign: {
            type: 'unknown',
          },
          sessions: {
            type: 'unknown',
          },
          ruleOverlay: {
            type: 'unknown',
          },
          campaignSummary: {
            type: 'unknown',
          },
          sessionSummaries: {
            type: 'unknown',
          },
          ruleOverlaySummary: {
            type: 'unknown',
          },
        },
      },
    },
  },
  AppCeruliaRpcGetCharacterBranchView: {
    lexicon: 1,
    id: 'app.cerulia.rpc.getCharacterBranchView',
    defs: {
      main: {
        type: 'query',
        description: 'Get character branch owner/public projection.',
        parameters: {
          type: 'params',
          properties: {
            characterBranchRef: {
              type: 'string',
              format: 'at-uri',
            },
          },
          required: ['characterBranchRef'],
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.rpc.getCharacterBranchView#output',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          branch: {
            type: 'unknown',
          },
          sheet: {
            type: 'unknown',
          },
          recentSessions: {
            type: 'unknown',
          },
          advancements: {
            type: 'unknown',
          },
          conversions: {
            type: 'unknown',
          },
          branchSummary: {
            type: 'unknown',
          },
          sheetSummary: {
            type: 'unknown',
          },
          recentSessionSummaries: {
            type: 'unknown',
          },
          advancementSummaries: {
            type: 'unknown',
          },
          conversionSummaries: {
            type: 'unknown',
          },
        },
      },
    },
  },
  AppCeruliaRpcGetCharacterHome: {
    lexicon: 1,
    id: 'app.cerulia.rpc.getCharacterHome',
    defs: {
      main: {
        type: 'query',
        description: 'Get owner character home projection.',
        parameters: {
          type: 'params',
          properties: {},
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.rpc.getCharacterHome#output',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          ownerDid: {
            type: 'unknown',
          },
          branches: {
            type: 'unknown',
          },
          recentSessions: {
            type: 'unknown',
          },
        },
      },
    },
  },
  AppCeruliaRpcGetCharacterSheetSchema: {
    lexicon: 1,
    id: 'app.cerulia.rpc.getCharacterSheetSchema',
    defs: {
      main: {
        type: 'query',
        description: 'Get character sheet schema.',
        parameters: {
          type: 'params',
          properties: {
            characterSheetSchemaRef: {
              type: 'string',
              format: 'at-uri',
            },
          },
          required: ['characterSheetSchemaRef'],
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.rpc.getCharacterSheetSchema#output',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          characterSheetSchema: {
            type: 'unknown',
          },
        },
      },
    },
  },
  AppCeruliaRpcGetHouseView: {
    lexicon: 1,
    id: 'app.cerulia.rpc.getHouseView',
    defs: {
      main: {
        type: 'query',
        description: 'Get house owner/public projection.',
        parameters: {
          type: 'params',
          properties: {
            houseRef: {
              type: 'string',
              format: 'at-uri',
            },
          },
          required: ['houseRef'],
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.rpc.getHouseView#output',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          house: {
            type: 'unknown',
          },
          campaigns: {
            type: 'unknown',
          },
          sessions: {
            type: 'unknown',
          },
          houseSummary: {
            type: 'unknown',
          },
          campaignSummaries: {
            type: 'unknown',
          },
          sessionSummaries: {
            type: 'unknown',
          },
        },
      },
    },
  },
  AppCeruliaRpcGetPlayerProfileView: {
    lexicon: 1,
    id: 'app.cerulia.rpc.getPlayerProfileView',
    defs: {
      main: {
        type: 'query',
        description: 'Get player profile owner/public projection.',
        parameters: {
          type: 'params',
          properties: {
            did: {
              type: 'string',
              format: 'did',
            },
          },
          required: ['did'],
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.rpc.getPlayerProfileView#output',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          profile: {
            type: 'unknown',
          },
          blueskyFallbackProfile: {
            type: 'unknown',
          },
          publicBranches: {
            type: 'unknown',
          },
          profileSummary: {
            type: 'unknown',
          },
        },
      },
    },
  },
  AppCeruliaRpcGetRuleProfile: {
    lexicon: 1,
    id: 'app.cerulia.rpc.getRuleProfile',
    defs: {
      main: {
        type: 'query',
        description: 'Get rule profile.',
        parameters: {
          type: 'params',
          properties: {
            ruleProfileRef: {
              type: 'string',
              format: 'at-uri',
            },
          },
          required: ['ruleProfileRef'],
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.rpc.getRuleProfile#output',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          ruleProfile: {
            type: 'unknown',
          },
        },
      },
    },
  },
  AppCeruliaRpcGetScenarioView: {
    lexicon: 1,
    id: 'app.cerulia.rpc.getScenarioView',
    defs: {
      main: {
        type: 'query',
        description: 'Get scenario summary view.',
        parameters: {
          type: 'params',
          properties: {
            scenarioRef: {
              type: 'string',
              format: 'at-uri',
            },
          },
          required: ['scenarioRef'],
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.rpc.getScenarioView#output',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          scenarioSummary: {
            type: 'unknown',
          },
        },
      },
    },
  },
  AppCeruliaRpcGetSessionView: {
    lexicon: 1,
    id: 'app.cerulia.rpc.getSessionView',
    defs: {
      main: {
        type: 'query',
        description: 'Get session view.',
        parameters: {
          type: 'params',
          properties: {
            sessionRef: {
              type: 'string',
              format: 'at-uri',
            },
          },
          required: ['sessionRef'],
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.rpc.getSessionView#output',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          session: {
            type: 'unknown',
          },
        },
      },
    },
  },
  AppCeruliaRpcListCharacterSheetSchemas: {
    lexicon: 1,
    id: 'app.cerulia.rpc.listCharacterSheetSchemas',
    defs: {
      main: {
        type: 'query',
        description: 'List character sheet schemas.',
        parameters: {
          type: 'params',
          properties: {
            rulesetNsid: {
              type: 'string',
              format: 'nsid',
            },
            limit: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 50,
            },
            cursor: {
              type: 'string',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.rpc.listCharacterSheetSchemas#output',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          items: {
            type: 'unknown',
          },
          cursor: {
            type: 'unknown',
          },
        },
        required: ['items'],
      },
    },
  },
  AppCeruliaRpcListRuleProfiles: {
    lexicon: 1,
    id: 'app.cerulia.rpc.listRuleProfiles',
    defs: {
      main: {
        type: 'query',
        description: 'List rule profiles.',
        parameters: {
          type: 'params',
          properties: {
            scopeRef: {
              type: 'string',
              format: 'at-uri',
            },
            baseRulesetNsid: {
              type: 'string',
              format: 'nsid',
            },
            limit: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 50,
            },
            cursor: {
              type: 'string',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.rpc.listRuleProfiles#output',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          items: {
            type: 'unknown',
          },
          cursor: {
            type: 'unknown',
          },
        },
        required: ['items'],
      },
    },
  },
  AppCeruliaRpcListScenarios: {
    lexicon: 1,
    id: 'app.cerulia.rpc.listScenarios',
    defs: {
      main: {
        type: 'query',
        description: 'List scenarios.',
        parameters: {
          type: 'params',
          properties: {
            rulesetNsid: {
              type: 'string',
              format: 'nsid',
            },
            limit: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 50,
            },
            cursor: {
              type: 'string',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.rpc.listScenarios#output',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          items: {
            type: 'unknown',
          },
          cursor: {
            type: 'unknown',
          },
        },
        required: ['items'],
      },
    },
  },
  AppCeruliaRpcListSessions: {
    lexicon: 1,
    id: 'app.cerulia.rpc.listSessions',
    defs: {
      main: {
        type: 'query',
        description: 'List sessions.',
        parameters: {
          type: 'params',
          properties: {
            limit: {
              type: 'integer',
              minimum: 1,
              maximum: 100,
              default: 50,
            },
            cursor: {
              type: 'string',
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.rpc.listSessions#output',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          items: {
            type: 'unknown',
          },
          cursor: {
            type: 'unknown',
          },
        },
        required: ['items'],
      },
    },
  },
  AppCeruliaRpcRebaseCharacterSheet: {
    lexicon: 1,
    id: 'app.cerulia.rpc.rebaseCharacterSheet',
    defs: {
      main: {
        type: 'procedure',
        description: 'Rebase character sheet to another schema.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              characterSheetRef: {
                type: 'string',
                format: 'at-uri',
              },
              targetSheetSchemaRef: {
                type: 'string',
                format: 'at-uri',
              },
              stats: {
                type: 'unknown',
              },
              note: {
                type: 'string',
                maxLength: 3000,
              },
            },
            required: ['characterSheetRef', 'targetSheetSchemaRef'],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcRecordCharacterAdvancement: {
    lexicon: 1,
    id: 'app.cerulia.rpc.recordCharacterAdvancement',
    defs: {
      main: {
        type: 'procedure',
        description: 'Record character advancement.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              characterBranchRef: {
                type: 'string',
                format: 'at-uri',
              },
              advancementKind: {
                type: 'string',
                knownValues: [
                  'xp-spend',
                  'milestone',
                  'retrain',
                  'respec',
                  'correction',
                ],
              },
              deltaPayload: {
                type: 'unknown',
              },
              effectiveAt: {
                type: 'string',
                format: 'datetime',
              },
              sessionRef: {
                type: 'string',
                format: 'at-uri',
              },
              previousValues: {
                type: 'unknown',
              },
              note: {
                type: 'string',
                maxLength: 3000,
              },
            },
            required: [
              'characterBranchRef',
              'advancementKind',
              'deltaPayload',
              'effectiveAt',
            ],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcRecordCharacterConversion: {
    lexicon: 1,
    id: 'app.cerulia.rpc.recordCharacterConversion',
    defs: {
      main: {
        type: 'procedure',
        description: 'Record character conversion.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              sourceSheetRef: {
                type: 'string',
                format: 'at-uri',
              },
              sourceBranchRef: {
                type: 'string',
                format: 'at-uri',
              },
              sourceRulesetNsid: {
                type: 'string',
                format: 'nsid',
              },
              targetSheetRef: {
                type: 'string',
                format: 'at-uri',
              },
              targetBranchRef: {
                type: 'string',
                format: 'at-uri',
              },
              targetRulesetNsid: {
                type: 'string',
                format: 'nsid',
              },
              convertedAt: {
                type: 'string',
                format: 'datetime',
              },
              conversionContractRef: {
                type: 'string',
                format: 'uri',
              },
              note: {
                type: 'string',
                maxLength: 3000,
              },
            },
            required: [
              'sourceSheetRef',
              'sourceBranchRef',
              'sourceRulesetNsid',
              'targetSheetRef',
              'targetBranchRef',
              'targetRulesetNsid',
              'convertedAt',
            ],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcRetireCharacterBranch: {
    lexicon: 1,
    id: 'app.cerulia.rpc.retireCharacterBranch',
    defs: {
      main: {
        type: 'procedure',
        description: 'Retire character branch.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              characterBranchRef: {
                type: 'string',
                format: 'at-uri',
              },
            },
            required: ['characterBranchRef'],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcUpdateCampaign: {
    lexicon: 1,
    id: 'app.cerulia.rpc.updateCampaign',
    defs: {
      main: {
        type: 'procedure',
        description: 'Update campaign.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              campaignRef: {
                type: 'string',
                format: 'at-uri',
              },
              title: {
                type: 'string',
                maxLength: 640,
              },
              houseRef: {
                type: 'string',
                format: 'at-uri',
              },
              rulesetNsid: {
                type: 'string',
                format: 'nsid',
              },
              sharedRuleProfileRefs: {
                type: 'array',
                items: {
                  type: 'string',
                  format: 'at-uri',
                },
              },
              visibility: {
                type: 'string',
                knownValues: ['draft', 'public'],
              },
              archivedAt: {
                type: 'string',
                format: 'datetime',
              },
            },
            required: ['campaignRef'],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcUpdateCharacterBranch: {
    lexicon: 1,
    id: 'app.cerulia.rpc.updateCharacterBranch',
    defs: {
      main: {
        type: 'procedure',
        description: 'Update character branch.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              characterBranchRef: {
                type: 'string',
                format: 'at-uri',
              },
              branchLabel: {
                type: 'string',
                maxLength: 640,
              },
              overridePayload: {
                type: 'unknown',
              },
              visibility: {
                type: 'string',
                knownValues: ['draft', 'public'],
              },
            },
            required: ['characterBranchRef'],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcUpdateCharacterSheet: {
    lexicon: 1,
    id: 'app.cerulia.rpc.updateCharacterSheet',
    defs: {
      main: {
        type: 'procedure',
        description: 'Update character sheet.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              characterSheetRef: {
                type: 'string',
                format: 'at-uri',
              },
              displayName: {
                type: 'string',
                maxLength: 640,
              },
              portraitBlob: {
                type: 'blob',
              },
              profileSummary: {
                type: 'string',
                maxLength: 3000,
              },
              stats: {
                type: 'unknown',
              },
            },
            required: ['characterSheetRef'],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcUpdateHouse: {
    lexicon: 1,
    id: 'app.cerulia.rpc.updateHouse',
    defs: {
      main: {
        type: 'procedure',
        description: 'Update house.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              houseRef: {
                type: 'string',
                format: 'at-uri',
              },
              title: {
                type: 'string',
                maxLength: 640,
              },
              canonSummary: {
                type: 'string',
                maxLength: 3000,
              },
              defaultRuleProfileRefs: {
                type: 'array',
                items: {
                  type: 'string',
                  format: 'at-uri',
                },
              },
              policySummary: {
                type: 'string',
                maxLength: 3000,
              },
              externalCommunityUri: {
                type: 'string',
                format: 'uri',
              },
              visibility: {
                type: 'string',
                knownValues: ['draft', 'public'],
              },
            },
            required: ['houseRef'],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcUpdatePlayerProfile: {
    lexicon: 1,
    id: 'app.cerulia.rpc.updatePlayerProfile',
    defs: {
      main: {
        type: 'procedure',
        description: 'Update player profile.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              blueskyProfileRef: {
                type: 'string',
                format: 'at-uri',
              },
              displayNameOverride: {
                type: 'string',
                maxLength: 640,
              },
              descriptionOverride: {
                type: 'string',
                maxLength: 3000,
              },
              avatarOverrideBlob: {
                type: 'blob',
              },
              bannerOverrideBlob: {
                type: 'blob',
              },
              websiteOverride: {
                type: 'string',
                format: 'uri',
              },
              pronounsOverride: {
                type: 'string',
                maxLength: 100,
              },
              roleDistribution: {
                type: 'integer',
                minimum: 0,
                maximum: 100,
              },
              playFormats: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              tools: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              ownedRulebooks: {
                type: 'string',
                maxLength: 3000,
              },
              playableTimeSummary: {
                type: 'string',
                maxLength: 3000,
              },
              preferredScenarioStyles: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              playStyles: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              boundaries: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              skills: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcUpdateRuleProfile: {
    lexicon: 1,
    id: 'app.cerulia.rpc.updateRuleProfile',
    defs: {
      main: {
        type: 'procedure',
        description: 'Update rule profile.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              ruleProfileRef: {
                type: 'string',
                format: 'at-uri',
              },
              profileTitle: {
                type: 'string',
                maxLength: 640,
              },
              rulesPatchUri: {
                type: 'string',
                format: 'uri',
              },
            },
            required: ['ruleProfileRef'],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcUpdateScenario: {
    lexicon: 1,
    id: 'app.cerulia.rpc.updateScenario',
    defs: {
      main: {
        type: 'procedure',
        description: 'Update scenario.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              scenarioRef: {
                type: 'string',
                format: 'at-uri',
              },
              title: {
                type: 'string',
                maxLength: 640,
              },
              rulesetNsid: {
                type: 'string',
                format: 'nsid',
              },
              recommendedSheetSchemaRef: {
                type: 'string',
                format: 'at-uri',
              },
              sourceCitationUri: {
                type: 'string',
                format: 'uri',
              },
              summary: {
                type: 'string',
                maxLength: 3000,
              },
            },
            required: ['scenarioRef'],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
  AppCeruliaRpcUpdateSession: {
    lexicon: 1,
    id: 'app.cerulia.rpc.updateSession',
    defs: {
      main: {
        type: 'procedure',
        description: 'Update session.',
        input: {
          encoding: 'application/json',
          schema: {
            type: 'object',
            properties: {
              sessionRef: {
                type: 'string',
                format: 'at-uri',
              },
              scenarioRef: {
                type: 'string',
                format: 'at-uri',
              },
              scenarioLabel: {
                type: 'string',
                maxLength: 640,
              },
              characterBranchRef: {
                type: 'string',
                format: 'at-uri',
              },
              role: {
                type: 'string',
                knownValues: ['pl', 'gm'],
              },
              campaignRef: {
                type: 'string',
                format: 'at-uri',
              },
              playedAt: {
                type: 'string',
                format: 'datetime',
              },
              hoLabel: {
                type: 'string',
                maxLength: 640,
              },
              hoSummary: {
                type: 'string',
                maxLength: 3000,
              },
              outcomeSummary: {
                type: 'string',
                maxLength: 3000,
              },
              externalArchiveUris: {
                type: 'array',
                items: {
                  type: 'string',
                  format: 'uri',
                },
              },
              visibility: {
                type: 'string',
                knownValues: ['draft', 'public'],
              },
              note: {
                type: 'string',
                maxLength: 3000,
              },
            },
            required: ['sessionRef'],
          },
        },
        output: {
          encoding: 'application/json',
          schema: {
            type: 'ref',
            ref: 'lex:app.cerulia.defs#mutationAck',
          },
        },
      },
    },
  },
} as const satisfies Record<string, LexiconDoc>
export const schemas = Object.values(schemaDict) satisfies LexiconDoc[]
export const lexicons: Lexicons = new Lexicons(schemas)

export function validate<T extends { $type: string }>(
  v: unknown,
  id: string,
  hash: string,
  requiredType: true,
): ValidationResult<T>
export function validate<T extends { $type?: string }>(
  v: unknown,
  id: string,
  hash: string,
  requiredType?: false,
): ValidationResult<T>
export function validate(
  v: unknown,
  id: string,
  hash: string,
  requiredType?: boolean,
): ValidationResult {
  return (requiredType ? is$typed : maybe$typed)(v, id, hash)
    ? lexicons.validate(`${id}#${hash}`, v)
    : {
        success: false,
        error: new ValidationError(
          `Must be an object with "${hash === 'main' ? id : `${id}#${hash}`}" $type property`,
        ),
      }
}

export const ids = {
  AppCeruliaAuthCoreReader: 'app.cerulia.authCoreReader',
  AppCeruliaAuthCoreWriter: 'app.cerulia.authCoreWriter',
  AppCeruliaCoreCampaign: 'app.cerulia.core.campaign',
  AppCeruliaCoreCharacterAdvancement: 'app.cerulia.core.characterAdvancement',
  AppCeruliaCoreCharacterBranch: 'app.cerulia.core.characterBranch',
  AppCeruliaCoreCharacterConversion: 'app.cerulia.core.characterConversion',
  AppCeruliaCoreCharacterSheet: 'app.cerulia.core.characterSheet',
  AppCeruliaCoreCharacterSheetSchema: 'app.cerulia.core.characterSheetSchema',
  AppCeruliaCoreHouse: 'app.cerulia.core.house',
  AppCeruliaCorePlayerProfile: 'app.cerulia.core.playerProfile',
  AppCeruliaCoreRuleProfile: 'app.cerulia.core.ruleProfile',
  AppCeruliaCoreScenario: 'app.cerulia.core.scenario',
  AppCeruliaCoreSession: 'app.cerulia.core.session',
  AppCeruliaDefs: 'app.cerulia.defs',
  AppCeruliaRpcCreateCampaign: 'app.cerulia.rpc.createCampaign',
  AppCeruliaRpcCreateCharacterBranch: 'app.cerulia.rpc.createCharacterBranch',
  AppCeruliaRpcCreateCharacterSheet: 'app.cerulia.rpc.createCharacterSheet',
  AppCeruliaRpcCreateCharacterSheetSchema:
    'app.cerulia.rpc.createCharacterSheetSchema',
  AppCeruliaRpcCreateHouse: 'app.cerulia.rpc.createHouse',
  AppCeruliaRpcCreateRuleProfile: 'app.cerulia.rpc.createRuleProfile',
  AppCeruliaRpcCreateScenario: 'app.cerulia.rpc.createScenario',
  AppCeruliaRpcCreateSession: 'app.cerulia.rpc.createSession',
  AppCeruliaRpcGetCampaignView: 'app.cerulia.rpc.getCampaignView',
  AppCeruliaRpcGetCharacterBranchView: 'app.cerulia.rpc.getCharacterBranchView',
  AppCeruliaRpcGetCharacterHome: 'app.cerulia.rpc.getCharacterHome',
  AppCeruliaRpcGetCharacterSheetSchema:
    'app.cerulia.rpc.getCharacterSheetSchema',
  AppCeruliaRpcGetHouseView: 'app.cerulia.rpc.getHouseView',
  AppCeruliaRpcGetPlayerProfileView: 'app.cerulia.rpc.getPlayerProfileView',
  AppCeruliaRpcGetRuleProfile: 'app.cerulia.rpc.getRuleProfile',
  AppCeruliaRpcGetScenarioView: 'app.cerulia.rpc.getScenarioView',
  AppCeruliaRpcGetSessionView: 'app.cerulia.rpc.getSessionView',
  AppCeruliaRpcListCharacterSheetSchemas:
    'app.cerulia.rpc.listCharacterSheetSchemas',
  AppCeruliaRpcListRuleProfiles: 'app.cerulia.rpc.listRuleProfiles',
  AppCeruliaRpcListScenarios: 'app.cerulia.rpc.listScenarios',
  AppCeruliaRpcListSessions: 'app.cerulia.rpc.listSessions',
  AppCeruliaRpcRebaseCharacterSheet: 'app.cerulia.rpc.rebaseCharacterSheet',
  AppCeruliaRpcRecordCharacterAdvancement:
    'app.cerulia.rpc.recordCharacterAdvancement',
  AppCeruliaRpcRecordCharacterConversion:
    'app.cerulia.rpc.recordCharacterConversion',
  AppCeruliaRpcRetireCharacterBranch: 'app.cerulia.rpc.retireCharacterBranch',
  AppCeruliaRpcUpdateCampaign: 'app.cerulia.rpc.updateCampaign',
  AppCeruliaRpcUpdateCharacterBranch: 'app.cerulia.rpc.updateCharacterBranch',
  AppCeruliaRpcUpdateCharacterSheet: 'app.cerulia.rpc.updateCharacterSheet',
  AppCeruliaRpcUpdateHouse: 'app.cerulia.rpc.updateHouse',
  AppCeruliaRpcUpdatePlayerProfile: 'app.cerulia.rpc.updatePlayerProfile',
  AppCeruliaRpcUpdateRuleProfile: 'app.cerulia.rpc.updateRuleProfile',
  AppCeruliaRpcUpdateScenario: 'app.cerulia.rpc.updateScenario',
  AppCeruliaRpcUpdateSession: 'app.cerulia.rpc.updateSession',
} as const
