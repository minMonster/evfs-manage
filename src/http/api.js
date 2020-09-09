import request from '@/http'

// 修改密码
export const modifyPassword = (params, opts) => request.post('modify_password', params, opts)
