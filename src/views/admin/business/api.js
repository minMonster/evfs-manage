import request from '@/http'
// 业务域管理
export const pbqbl = (params, opts) => request.post('cmw/pbqbl.do', params, opts)
// 数据存管域-业务域详情
export const pbqbd = (params, opts) => request.post('cmw/pbqbd.do', params, opts)
// 业务域-数据操作规则
export const pbqbi = (params, opts) => request.post('cmw/pbqbi.do', params, opts)
// 业务域-合约治理
export const pbqbc = (params, opts) => request.post('cmw/pbqbc.do', params, opts)
// 链-联盟委员会-联盟委员决议审批规则*联盟委员会成员**
export const pbqml = (params, opts) => request.post('cmw/pbqml.do', params, opts)
export const pbqrc = (params, opts) => request.post('cmw/pbqrc.do', params, opts)
export const pbqrm = (params, opts) => request.post('cmw/pbqrm.do', params, opts)
