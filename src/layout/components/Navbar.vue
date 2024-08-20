<template>
  <div class="navbar" :style="{ backgroundColor: sideTheme === 'theme-dark' ? '#3B3939' : '#0070E4' }">
    <div class="disF">
      <div class="disF">
        <div v-if="hasLogo == 1">
          <img v-if="sideTheme !== 'theme-dark'" src="/img/logoImg/logo_light.png" alt="" style="width: 44px;height: 44px;margin-right: 5px;" />
          <img v-else src="/img/logoImg/logo_dark.png" alt="" style="width: 44px;height: 44px;margin-right: 5px;" />
        </div>
        <div class="logo_tit" style="color:#fff;font-size: 1.2rem;font-weight: 500;">
          {{ logoName }}
        </div>
      </div>
        <div class="disF">
          <router-link to="/course">
            <div class="mx1">教程</div>
          </router-link>
          <router-link to="/api">
            <div class="mx1">API</div>
          </router-link>
          <router-link to="/">
            <div class="mx1">示例</div>
          </router-link>
          <el-switch
            v-model="settingsStore.switchValue"
            :active-action-icon="Moon"
            :inactive-action-icon="Sunny"
            inline-prompt
            :active-icon="Sunrise"
            :inactive-icon="MostlyCloudy"
            @change="handleTheme"
            style="--el-switch-on-color: #2F2F31; --el-switch-off-color: #D6E4FF;"
          />
          <div style="color: rgba(255,255,255,0.8);font-size: 12px;margin:0 5px;"> {{ settingsStore.switchValue ? '深色模式':'浅色模式' }} </div>
          
          <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click" v-if="isLogin == 2">
            <div class="headImg">
              <img v-if="userStore.avatar" :src="userStore.avatar" alt="">
              <img v-else src="@/assets/img/head.png" alt="">
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item >
                  <span>{{ userStore.name }}</span>
                </el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">
                  <span>退出登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessageBox } from 'element-plus'
import useAppStore from '@/store/modules/app'
import useUserStore from '@/store/modules/user'
import useSettingsStore from '@/store/modules/settings'
import { Sunrise, MostlyCloudy ,Sunny,Moon} from '@element-plus/icons-vue'
import variables from '@/assets/styles/variables.module.scss'
import { computed, reactive, toRef } from 'vue'
import { useRouter } from 'vue-router'
import $axios from 'axios' 
import SvgIcon from '@/components/SvgIcon';

const router = useRouter()

const value1 = ref(false)

const appStore = useAppStore()
const userStore = useUserStore()
const settingsStore = useSettingsStore()

const { proxy } = getCurrentInstance();

const sideTheme = computed(() => settingsStore.sideTheme);
const isLogin = computed(() => window.GLOBAL_CONFIG.exemption); // 是否登录
const logoName = computed(() => window.GLOBAL_CONFIG.titleName); // logo名称
const hasLogo = computed(() => window.GLOBAL_CONFIG.hasLogo);  // 是否显示logo
const data = reactive({
  switchValue: settingsStore.switchValue
})

const { switchValue } = toRef(data)

// 切换颜色
function handleTheme(val){
  // console.log(val)
  if(val == true){
    settingsStore.sideTheme = 'theme-dark';
    settingsStore.switchValue = true;
  }else{
    settingsStore.sideTheme = 'theme-light';
    settingsStore.switchValue = false;
  }
}
const  logout = async () => {
  // localStorage.removeItem("chatoptions");
  proxy.$modal.confirm("确定注销并退出系统吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      console.log(1231)
      userStore.logOut().then(() => {
        // location.replace(process.env.BASE_URL + "login");
        // location.href = process.env.BASE_URL + "login";
        router.replace("/login");
      });
    })
    .catch(() => { });
}

// $axios.get("/config/index.js").then((res) => {
//   console.log(res,'数据');
//   if(JSON.parse(res.data)){
//     settings = JSON.parse(res.data);
//     console.log(settings,'数据')
//   }
  
// });
</script>

<style lang='scss' scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 30px;

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .topmenu-container {
    position: absolute;
    left: 50px;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    display: flex;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 40px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        i {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
:deep(.el-switch){
  height: 100%;
}
.disF{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  // cursor: pointer;
}
.logo_tit{
  font-family: YouSheBiaoTiHei;
  font-size: 24px;
  color: #FFFFFF;
}
:deep(.el-switch__core .el-switch__action){
  color: #f9aa25;
}
:deep(.el-switch.is-checked .el-switch__core .el-switch__action){
  color: #f9aa25;
  background-color:#1D3071 !important ;
}
.headImg{
  width: 44px;
  height: 44px;
  margin-top: 4px;
  cursor: pointer;
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
}
.mx1{
  margin-left: 0.5rem; /* 4px */
  margin-right: 0.5rem;
  color: rgba(255,255,255,0.8);
  font-size: 0.8rem;
}
.mx1:hover{
  color: rgba(255,255,255,1);
}
</style>
