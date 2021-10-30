import request from '@/utils/request.js'
const md5 = require('md5')
// 登陆页面发送请求组件
// 检查手机号是否注册
export function checkPhone (phone) {
  return request({
    url: '/cellphone/existence/check',
    params: {
      phone: phone
    }
  })
}
// 登陆组件
export function goLogin (phone, password) {
  return request({
    url: '/login/cellphone',
    params: {
      phone: phone,
      md5_password: md5(password)
    }
  })
}
