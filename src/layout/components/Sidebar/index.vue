<template>
  <div :class="{ 'has-logo': showLogo }" :style="{ backgroundColor: sideTheme === 'theme-dark' ? variables.menuBackground : variables.menuLightBackground }">
    <div v-if="!isCollapse">
      <el-input style="padding: 10px;font-size: 12px;" v-model="search" placeholder="请输入需要搜索的内容" clearable @clear="handleClear" :prefix-icon="Search"></el-input>
    </div>
    <el-scrollbar :class="sideTheme" ref="scrollbarRef" wrap-class="scrollbar-wrapper" @scroll="scroll">
      <el-menu
        :default-active="isActiveIndex"
        :default-openeds="openeds"
        :collapse="isCollapse"
        :background-color="sideTheme === 'theme-dark' ? variables.menuBackground : variables.menuLightBackground"
        :text-color="sideTheme === 'theme-dark' ? variables.menuColor : variables.menuLightColor"
        :unique-opened="true"
        active-text-color="#ffffff"
        :collapse-transition="true"
        mode="vertical"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
      >
        <sidebar-item
          v-for="(route, index) in filteredMenu"
          :key="route.index"
          :item="route"
          :base-path="route.path"
          :selectIndex="isActiveIndex"
          :routersType="routersType"
        />
      </el-menu>
    </el-scrollbar>
    <div :class="['shrink', isCollapse ? 'marginTop' : '']">
      <hamburger id="hamburger-container" :idDark="sideTheme" :is-active="appStore.sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    </div>
 </div>
</template>

<script setup lang="ts">
import Hamburger from '@/components/Hamburger'
import { Search } from '@element-plus/icons-vue'
import SidebarItem from './SidebarItem'
import variables from '@/assets/styles/variables.module.scss'
import useAppStore from '@/store/modules/app'
import useSettingsStore from '@/store/modules/settings'
import usePermissionStore from '@/store/modules/permission'
import $axios from 'axios' 
import useUserStore from '@/store/modules/user'
import { storeToRefs } from "pinia";
import { computed, getCurrentInstance, onMounted, watch } from "vue";
import { ElScrollbar } from "element-plus";
const { proxy } = getCurrentInstance();
const userInfoStore = useUserStore()
const { isActiveIndex , sidebarRouters, routersType} = storeToRefs(userInfoStore); // 响应式 
 
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const openeds =ref(['1','2','3','4','5','6','7','8','9','10'])
const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const settingsStore = useSettingsStore()
const permissionStore = usePermissionStore()
const showLogo = computed(() => settingsStore.sidebarLogo);
const sideTheme = computed(() => settingsStore.sideTheme);
const theme = computed(() => settingsStore.theme);
const isCollapse = computed(() => !appStore.sidebar.opened);


const search = ref('')
const defaultOpeneds = ref([]);
const handleClear = () => {
  search.value = '';
  defaultOpeneds.value = [];
};

const filteredMenuList = ref([])
const filteredMenu = computed(() => {
  defaultOpeneds.value = [];
  // openeds.value = []
  return sidebarRouters.value.map(group => {
    const children = group.children.filter(item => item.meta.title.includes(search.value));
    if (children.length > 0) {
      // defaultOpeneds.value.push(group.index + '');
      // openeds.value.push(group.index + "");
      return { ...group, children };
    }
    return null;
  }).filter(Boolean);
});

const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath);
};
const handleSelect = (key, keyPath) => {
  // console.log(key, keyPath)
  userInfoStore.isActiveIndex = key
};
function toggleSideBar() {
  appStore.toggleSideBar()
}

const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const scrollTopValue = ref(0)
const scroll = ({ scrollTop }) => {
  scrollTopValue.value = scrollTop;
  useUserStore().menuScrollTop = scrollTopValue.value
}
onMounted(() => {
  if(useUserStore().menuScrollTop > 0){
      inputSlider(useUserStore().menuScrollTop)
  }
})
const inputSlider = (value: number) => {
  scrollbarRef.value!.setScrollTop(value)
}
watch(() => useUserStore().menuScrollTopNew, (newVal, oldVal) => {
    inputSlider(Number(newVal) - 800)
})
</script>
<style scoped>
:deep(.el-input__wrapper){
  background: #F1F4F7;
}
.shrink{
  border-top: 1px solid #EEEEEE;
  height: 49px;
  line-height: 49px;
  text-align: end;
}
.marginTop{
  margin-top: 49px;
}
</style>