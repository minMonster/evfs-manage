import request from '@/http'
// 查询登陆人员角色
export const pbqus = (params, opts) => request.post('cmw/pbqus.do', params, opts)
// 查询待审批数量
export const pbqpr = (params, opts) => request.post('cmw/pbqpr.do', params, opts)
// 查询子菜单待审批详情
export const pbqrc = (params, opts) => request.post('cmw/pbqrc.do', params, opts)
// 查询审批人列表
export const pbqal = (params, opts) => request.post('cmw/pbqal.do', params, opts)
// 查询节点准入【链/数据存管域】
export const pbqan = (params, opts) => request.post('cmw/pbqan.do', params, opts)
// 查询登陆状态
export const pbrus = (params, opts) => request.post('cmw/pbrus.do', params, opts)
// 交易生成接口
export const pbgen = (params, opts) => request.post('bs/pbgen.do', params, opts)
// 交易状态
export const pbgts = (params, opts) => request.post('bs/pbgts.do', params, opts)
