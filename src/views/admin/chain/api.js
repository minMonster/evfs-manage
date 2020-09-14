import request from '@/http'
// 首页查询
export const pbqct = (params, opts) => request.post('cmw/pbqct.do', params, opts)
// memberTypeId （链-链管理员和链-联盟委员会）
export const pbqgi = (params, opts) => request.post('cmw/pbqgi.do', params, opts)
// 链-联盟委员会-**联盟委员决议审批规则****联盟委员会成员**
export const pbqml = (params, opts) => request.post('cmw/pbqml.do', params, opts)
// 链-节点准入-准入节点服务器列表
export const pbqan = (params, opts) => request.post('cmw/pbqan.do', params, opts)
// export const pbbqan = (params, opts) => request.post('cmw/pbbqan.do', params, opts)
// 链-前置节点准入
export const pbqcn = (params, opts) => request.post('cmw/pbqcn.do', params, opts)
// 链内存储容量许可分布信息
export const pbqfc = (params, opts) => request.post('cmw/pbqfc.do', params, opts)
// 链内运行许可证分布信息
export const pbqll = (params, opts) => request.post('cmw/pbqll.do', params, opts)
// 链-主节点授权
export const pbqmn = (params, opts) => request.post('cmw/pbqmn.do', params, opts)
// 链-数据存管域
export const pbqsl = (params, opts) => request.post('cmw/pbqsl.do', params, opts)
// 链-数据存管域详情
export const pbqsd = (params, opts) => request.post('cmw/pbqsd.do', params, opts)
