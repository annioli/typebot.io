import { ContinueChatResponse, SessionState } from '@typebot.io/schemas'

export type EdgeId = string

export type ExecuteLogicResponse = {
  outgoingEdgeId: EdgeId | undefined
  newSessionState?: SessionState
} & Pick<ContinueChatResponse, 'clientSideActions' | 'logs'>

export type ExecuteIntegrationResponse = {
  outgoingEdgeId: EdgeId | undefined
  newSessionState?: SessionState
  startTimeShouldBeUpdated?: boolean
} & Pick<ContinueChatResponse, 'clientSideActions' | 'logs'>

export type ParsedReply =
  | { status: 'success'; reply: string }
  | { status: 'fail' }
  | { status: 'skip' }
