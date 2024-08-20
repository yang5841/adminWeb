import router from './router'
import { ElMessage } from 'element-plus'
import NProgress from 'nprogress' // 加载进度条
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import useUserStore from '@/store/modules/user'
import useSettingsStore from '@/store/modules/settings'
import useAppStore from '@/store/modules/app'
import $axios from 'axios' 
NProgress.configure({ showSpinner: false });
const whiteList = ['/login'];
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  
  // console.log(to, from)
  if(to.path == '/api' || to.path == '/api/' ){ //是否是api模块 
    useUserStore().menuScrollTop = 0
    useUserStore().scrollTop = 0
    useUserStore().isActiveIndex = ''
    useAppStore().sidebar.hide = true  //隐藏目录
    
  } else if(!((to.path == '/system' && from.path == '/system/sandbox') 
        || (to.path == '/system/' && from.path == '/system/sandbox')
        || (to.path == '/system/sandbox' && from.path == '/system')
        || (to.path == '/system/sandbox' && from.path == '/system/'))){
    init(to.path);
    useAppStore().sidebar.hide = false;
    if(to.path == '/course'){
      useUserStore().menuScrollTop = 0
      useUserStore().scrollTop = 0;
    }
  }
  if(window.GLOBAL_CONFIG.exemption == 1){ // 判断是否免登录
    next() // 
    NProgress.done()
    return false
  }
  if (getToken()) {
    to.meta.title && useSettingsStore().setTitle(to.meta.title)
    /* has token*/
    if (to.path === '/login') {
      next()
      NProgress.done()
    } else {
      if (useUserStore().roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        const res = await useUserStore().getInfo()
        if(res.code == 200){
          next()
          NProgress.done()
          return
        }else{
          await useUserStore().logOut().then(() => {
            ElMessage.error(err)
          })
          next('/login')
          return
        }
      } else {
        next()
        NProgress.done()
      }
    }
  } else {
    //没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      NProgress.done()
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

function init(to) {
  if(to == '/course'){ //文档地址
    // if(useUserStore().sidebarRouters.length<=0){
      useUserStore().sidebarRouters = []
      $axios.get("/data/menu/markdowList.json").then((res) => {
        if(res.data.code == 200){
          useUserStore().sidebarRouters = res.data.data;
          useUserStore().routersType = res.data.type;
          useUserStore().defaultRouterList = res.data.routerList;
    }else{
          proxy.printErrMsg(res.data.msg)
        }
      });
    // }
  }else if(to == '/system' || to == '/system/sandbox'){ //示例中心
    // if(useUserStore().sidebarRouters.length<=0){
      useUserStore().sidebarRouters = []
      $axios.get("/data/menu/menuList.json").then((res) => {
        if(res.data.code == 200){

          useUserStore().sidebarRouters = res.data.data;
          useUserStore().routersType = res.data.type;
        }else{
          proxy.printErrMsg(res.data.msg)
        }
      });
    // }
  }
}