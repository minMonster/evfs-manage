import request from '@/http'
// 数据存管域管理
export const pbqss = (params, opts) => request.post('cmw/pbqss.do', params, opts)
