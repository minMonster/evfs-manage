import request from '@/http'
// 数据存管域管理
export const pbqss = (params, opts) => request.post('cmw/pbqss.do', params, opts)
// 业务域
export const pbqsb = (params, opts) => request.post('cmw/pbqsb.do', params, opts)
// 数据存管域-域管理员
export const pbqml = (params, opts) => request.post('cmw/pbqml.do', params, opts)
export const pbqrm = (params, opts) => request.post('cmw/pbqrm.do', params, opts)
// 链-节点准入-准入节点服务器列表
export const pbqan = (params, opts) => request.post('cmw/pbqan.do', params, opts)
export const pbqrc = (params, opts) => request.post('cmw/pbqrc.do', params, opts)
export const pbqci = (params, opts) => request.post('cmw/pbqci.do', params, opts)
