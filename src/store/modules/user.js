import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { Base64 } from "js-base64";

const useUserStore = defineStore(
  'user',
  {
    state: () => ({
      token: getToken(),
      id: '',
      name: '',
      avatar: '',
      roles: [],
      permissions: [],
      isActiveIndex:"1-1",
      routerList:[],
      sidebarRouters:[], //动态路由
      routersType:'', //动态路由类型
      defaultRouterList:[],
      scrollTop:0,
      menuScrollTop:0,
      menuScrollTopNew:''
    }),
    actions: {
      // 登录
      login(userInfo) {
        // const username = userInfo.username.trim()
        // const password = userInfo.password
        const username = userInfo.username.trim()
        const password = userInfo.password
        const code = userInfo.code
        const uuid = userInfo.uuid
        return new Promise((resolve, reject) => {
          login(username, password, code, uuid).then(res => {
            this.token = res.data.access_token
            setToken(res.data.access_token)
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      },
      // 获取用户信息
      getInfo() {
        return new Promise((resolve, reject) => {
          getInfo().then(res => {
            const user = res.user
            if(res.roles.length > 0){
              this.roles = res.roles
            }else{
              this.roles = ['ROLE_DEFAULT']
            }
            this.id = user.userId
            this.name = user.userName
            this.avatar = user.avatar
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      // 退出系统
      logOut() {
        return new Promise((resolve, reject) => {
          logout(this.token).then(() => {
            this.token = ''
            this.roles = []
            this.permissions = []
            this.routerList = []
            removeToken()
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      },
      changeMenuScrollTop(top){
        this.menuScrollTopNew = top
      }
    },
    persist:{
      enabled: true,
    }
  })

export default useUserStore
