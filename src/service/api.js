import request from '@/service'

// 退出登录
export const logout = (params, opts) => request.get('logout', {
  params,
  ...opts
})
// 修改密码
export const modifyPassword = (params, opts) => request.post('modify_password', params, opts)
export const homePage = (params, opts) => request.post('home_page', params, opts)
export const saas_info = (params, opts) => request.post('admin/mch/saas_info_v2', params, opts)
