import { HeadlinerStatus } from './headliners/types'

// headliners list action names
export const GET_HEADLINERS: string = 'GET_HEADLINERS'
export const APPEND_HEADLINERS: string = 'APPEND_HEADLINERS'
export const REFRESH_HEADLINERS: string = 'REFRESH_HEADLINERS'

// to-read action names
export const GET_TO_READ_LIST: string = 'GET_TO_READ_LIST'
export const ADD_HEADLINER_TO_LIST: string = 'ADD_HEADLINER_TO_LIST'
export const REMOVE_HEADLINER_FROM_LIST: string = 'REMOVE_HEADLINER_FROM_LIST'
export const CHANGE_HEADLINER_STATUS: string = 'CHANGE_HEADLINER_STATUS'

export const HEADLINER_STATUSES: HeadlinerStatus = {
  toRead: 0,
  beenRead: 1,
  toDelete: 2,
}
