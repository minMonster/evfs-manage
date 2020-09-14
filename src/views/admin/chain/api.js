import request from '@/http'
// 首页查询
export const pbqct = (params, opts) => request.post('cmw/pbqct.do', params, opts)
// memberTypeId （链-链管理员和链-联盟委员会）
export const pbqgi = (params, opts) => request.post('cmw/pbqgi.do', params, opts)
// 链-联盟委员会-**联盟委员决议审批规则****联盟委员会成员**
export const pbqml = (params, opts) => request.post('cmw/pbqml.do', params, opts)
// 链-节点准入-准入节点服务器列表
export const pbbqan = (params, opts) => request.post('cmw/pbbqan.do', params, opts)
// export const pbbqan = (params, opts) => request.post('cmw/pbbqan.do', params, opts)
