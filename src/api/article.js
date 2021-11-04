import request from '@/utils/request.js'
// 获取文章id进行查询
export function getArticle (id) {
  return request({
    url: `/playlist/detail?id=${id}`
  })
}
