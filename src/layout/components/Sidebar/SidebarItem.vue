<template>
  <div id="page" v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :main="item.main" :pathType="routersType" :type="item.type" :to="resolvePath(onlyOneChild.path, onlyOneChild.query)" :id="onlyOneChild.id">
        <el-menu-item v-if="isActiveIndex == item.index" :index="onlyOneChild.index + ''" :key="onlyOneChild.index" :class="{ 'submenu-title-noDropdown': !isNest }">
          <svg-icon style="width: 0.6rem !important;" :icon-class="onlyOneChild.meta.iconSelect || (item.meta && item.meta.iconSelect)"/> 
          <template #title><span class="menu-title" :title="hasTitle(onlyOneChild.meta.title)">{{ onlyOneChild.meta.title }}</span></template>
        </el-menu-item>
        <el-menu-item v-else :index="onlyOneChild.index + ''" :key="onlyOneChild.id" :class="{ 'submenu-title-noDropdown': !isNest }">
          <svg-icon style="width: 0.6rem !important;" :icon-class="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"/> 
          <template #title><span class="menu-title" :title="hasTitle(onlyOneChild.meta.title)">{{ onlyOneChild.meta.title }}</span></template>
        </el-menu-item>
      </app-link>
    </template>

    <el-sub-menu v-else ref="subMenu" :index="item.index + ''" teleported :key="item.index">
      <template v-if="item.meta" #title> 
        <svg-icon :icon-class="item.meta && item.meta.icon" />
        <span class="menu-title" :title="hasTitle(item.meta.title)">{{ item.meta.title }}</span>
      </template>

      <sidebar-item
        v-for="(child, index) in item.children"
        :key="child.index"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
        :routersType="routersType"
      />
    </el-sub-menu>
  </div>
</template>

<script setup>
import { isExternal } from '@/utils/validate'
import AppLink from './Link'
import { getNormalPath } from '@/utils/ruoyi'
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
import { storeToRefs } from "pinia";
const userInfoStore = useUserStore()
const { isActiveIndex } = storeToRefs(userInfoStore); // 响应式 
const $router = useRouter()
const props = defineProps({
  // route object
  item: {
    type: Object,
    required: true
  },
  isNest: {
    type: Boolean,
    default: false
  },
  basePath: {
    type: String,
    default: ''
  },
  routersType: {
    type: String,
    default: ''
  }
})
const onlyOneChild = ref({});

function hasOneShowingChild(children = [], parent) {
  if (!children) {
    children = [];
  }
  const showingChildren = children.filter(item => {
    if (item.hidden) {
      return false
    } else {
      // Temp set(will be used if only has one showing child)
      onlyOneChild.value = item
      return true
    }
  })

  // When there is only one child router, the child router is displayed by default
  // if (showingChildren.length === 1) {
  //   return true
  // }

  // Show parent if there are no child router to display
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
    return true
  }

  return false
};

function resolvePath(routePath, routeQuery) {
  if (isExternal(routePath)) {
    return routePath
  }
  if (isExternal(props.basePath)) {
    return props.basePath
  }
  if (routeQuery) {
    let query = JSON.parse(routeQuery);
    return { path: getNormalPath(props.basePath + '/' + routePath), query: query }
  }
  return getNormalPath(props.basePath + '/' + routePath)
}

function hasTitle(title){
  if (title.length > 5) {
    return title;
  } else {
    return "";
  }
}
</script>
<style lang="scss" scoped>
#page{
  :deep(.el-menu-item.is-active){
    background-color: #0070E4;
    border-radius: 3px;
  }


}
</style>
