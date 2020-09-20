import request from '@/http'
// 节点服务器详情-服务器管理员列表
export const pbqnm = (params, opts) => request.post('cmw/pbqnm.do', params, opts)
