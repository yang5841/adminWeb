<template>
  <div class="markdown-body">
    <Markdown :source="htmlContent" :html="true" css-class="my-custom-markdown"/>
  </div>
</template>
 
 <script setup>
 import { ref, onMounted, toRefs, watch } from 'vue';
//  import 'github-markdown-css/github-markdown.css';
import Markdown from 'vue3-markdown-it';
import 'highlight.js/styles/atom-one-dark.css'
import axios from 'axios' 
import useUserStore from '@/store/modules/user'
import { useRoute, useRouter } from 'vue-router';
import useSettingsStore from '@/store/modules/settings'
const settingsStore = useSettingsStore()
const { sideTheme} = toRefs(settingsStore)
useUserStore().isActiveIndex = '1-1'
const htmlContent = ref('# Hello World!')
const route = useRoute()
const router = useRouter()

const loadMarkdown = async (newValue)=> {
    try {
        var url = route.query.key
        if(!url){
            url = useUserStore().defaultRouterList[0];
            useUserStore().isActiveIndex = '1-1'
        }
        const response = await axios.get(url);
        htmlContent.value = response.data
    } catch (error) {
        console.error('Error loading Markdown file:', error);
    }
}
// 监听当前路由
watch(
  () => router.currentRoute.value,
  (newValue) => {
    loadMarkdown(newValue)
  },
  { immediate: true }
)
const cssDark = '/github-markdown-dark.css';
const cssLight = '/github-markdown-light.css';
const cssLinkDark  = ref(null);
const cssLinkLight  = ref(null);
watch(() => sideTheme.value, (newValue) => {
  if (newValue == 'theme-dark') {
    if(cssLinkLight.value) document.head.removeChild(cssLinkLight.value);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssDark;
    document.head.appendChild(link);
    cssLinkDark.value = link;
  }else if( newValue == 'theme-light'){
    if(cssLinkDark.value) document.head.removeChild(cssLinkDark.value);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssLight;
    document.head.appendChild(link);
    cssLinkLight.value = link;
  }
},
{ immediate: true })
onMounted(() => {
  
});
 </script>
 
 <style scoped>
 .markdown-body{
    margin: 0 15%;
    width: 70%;
    padding: 10px;
 }
 </style>
 