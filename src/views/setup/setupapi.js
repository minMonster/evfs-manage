import request from '@/http'
// 设置服务器名称
export const pbsnn = (params, opts) => request.post('man/pbsnn.do', params, opts)
// 读取服务器名称
export const pbgnn = (params, opts) => request.post('man/pbgnn.do', params, opts)
// 设置服务器管理员
export const pbsna = (params, opts) => request.post('man/pbsna.do', params, opts)
// 读取服务器管理员
export const pbgna = (params, opts) => request.post('man/pbgna.do', params, opts)
// 读取服务器信息
export const pbgni = (params, opts) => request.post('man/pbgni.do', params, opts)
// 设置服务器所属企业
export const pbsno = (params, opts) => request.post('man/pbsno.do', params, opts)
// 读取服务器所属企业
export const pbgno = (params, opts) => request.post('man/pbgno.do', params, opts)
// 设置委员会信息
export const pbsci = (params, opts) => request.post('man/pbsci.do', params, opts)   
// 设置管理员组信息
export const pbsai = (params, opts) => request.post('man/pbsai.do', params, opts)
// 启动新链
export const pbsnc = (params, opts) => request.post('man/pbsnc.do', params, opts)
// 加入现有链
export const pbjec = (params, opts) => request.post('man/pbjec.do', params, opts)
// 获取创世块
export const pbgen = (params, opts) => request.post('man/pbgen.do', params, opts)