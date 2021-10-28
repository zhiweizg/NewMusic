import request from '@/utils/request.js'
// 推荐音乐发送请求
export function getMusic (limit) {
  return request({
    url: `/personalized?limit=${limit}`
  })
}
