<template>
  <section class="app-main" :class="[sideTheme === 'theme-dark' ? 'darkBackgroundImg' : 'defaultImg']">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="tagsViewStore.cachedViews">
          <component v-if="!route.meta.link" :is="Component" :key="route.path"/>
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script setup>
import useTagsViewStore from '@/store/modules/tagsView'
import useSettingsStore from '@/store/modules/settings'
const tagsViewStore = useTagsViewStore()
import { computed } from "vue"
const settingsStore = useSettingsStore()
const sideTheme = computed(() => settingsStore.sideTheme);
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    // min-height: calc(100vh - 0px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
.darkBackgroundImg{
  background: url('@/assets/img/dark-background.png') no-repeat;
  background-size: 100% 100%;
  background-color:#000;
}
.defaultImg{
  background: #F0F2F5;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 6px;
  }
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background-color: #c0c0c0;
  border-radius: 3px;
}
</style>

