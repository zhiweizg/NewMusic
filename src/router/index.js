import Vue from 'vue'
import VueRouter from 'vue-router'

/** 解决router重复报错 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const FindeMusic = () => import('@/views/findMusic/findMusic.vue')
const NewSong = () => import('@/views/newSong/newSong.vue')
const RadioStation = () => import('@/views/radioStation/radioStation.vue')
const SongList = () => import('@/views/songList/songList.vue')
const SongRanking = () => import('@/views/songRanking/songRanking.vue')
const Singer = () => import('@/views/singer/singer.vue')

const routes = [
  {
    path: '/',
    redirect: '/findeMusic'
  },
  {
    path: '/findeMusic',
    name: 'findMusic',
    component: FindeMusic,
    children: [
      {
        path: '/songlist',
        component: SongList
      },
      {
        path: '/radiostation',
        component: RadioStation
      },
      {
        path: '/songranking',
        component: SongRanking
      },
      {
        path: '/singer',
        component: Singer
      },
      {
        path: '/newsong',
        component: NewSong
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
