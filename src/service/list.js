import server from '../utils/axios'
import API from './api.js'

export function getRiseRange({isRefreshByTime} = {}) {
  server.get(API.RISE_API,{
    isRefreshByTime
  })
}