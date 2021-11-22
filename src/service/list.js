import server from '../utils/axios'
import API from './api.js'
const clientType = 4

export function getRiseRange({isRefreshByTime} = {}) {
  server.get(API.RISE_API,{
    params: {
      isRefreshByTime
    }
  })
}
export function asyncCategory({ targetGroupId }) {
  return server.post('/fundClient/fundTarget/prdDetail', {
    data: {
      clientType,
      targetGroupId
    }
  })
}