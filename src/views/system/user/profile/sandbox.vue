<template>
  <div class="app-container home" style="height: 100%;">
    <div class="contentView">
        <div id="left" class="codeView left" v-show="showCodeView" :style="{width:`calc(${defaultLeftWidthRate}% - 2px)`}">
            <Code v-model="htmlContent" @initDataS="init" @updateData="updateHtmlContent" @close="showCode"></Code>
        </div>
        <!-- ⋮ -->  
        <div v-show="showCodeView" id="resize" class="resize" title="左右拖拽">
          <span>⋮</span>
        </div>
        <div id="right" :class="['preview' ,isShow ? ' show' : '' ]" :style="{width:`calc(100% - ${defaultLeftWidthRate}% - 2px)`}">
            <Review v-model="htmlContent" 
             :title="preTitle"
            :styleWidth="defaultLeftWidthRate"
            :isShowView="showCodeView" :codeView="htmlContent" :urlData="urlData" @show="showCode" ref="reviewChild"></Review>
        </div>
    </div>
  </div>
</template>
  
  <script setup>
import Code from './code.vue'
import Review from './preview.vue'
import request from '@/utils/request'
import { reactive, ref, toRefs, watch } from "vue";
import { useRoute , useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import useUserStore from '@/store/modules/user'
import { storeToRefs } from "pinia";
import axios from 'axios';
const userInfoStore = useUserStore()
const { routerList } = storeToRefs(userInfoStore); // 响应式 
const fetchTxtFileData = ref(`console.log('Hello, world!')`)
const data = reactive({
    options:{

    },
    preTitle:''
})
watch(fetchTxtFileData,(newValue, oldValue)=>{
    // console.log(newValue, oldValue,'2321')
})
const { options ,preTitle} = toRefs(data);
const htmlContent = ref(''); // 传值
const initData = ref('')  // 初始化
const urlData = ref('')
const isShow = ref(false)
onMounted(async () => {
  initCode()
  dragDiv()

});
const route = useRoute()
const router = useRouter()
// 获取静态资源下的所有html
const modules = import.meta.glob('/public/data/example/**/*.html')
// console.log('modules',routerList.value)
const fileExists = ref(null);
const initCode = async ()=> {
  try {
    if(!route.query.key){
      ElMessage.success('key不能为空！')
      return false
    }
    const isExist = loadView(route.query.key)
    if(!isExist){
      ElMessage.success('查询不到相应的key!')
      return false
    }
    var url = route.query.key + '.html?t=' + Date.now().toString()

    // console.log(url,'url')
    const response = await axios.get(url);
    // console.log(response,'response')
    // if (!response.ok) {
    //   throw new Error('Network response was not ok ' + response.statusText);
    // }
    if(response.status != 200){
      throw new Error('Network response was not ok ' + response.statusText);
    }
    // const html = await response.text();
    const html = response.data;
    htmlContent.value = html;
    initData.value = html;
    urlData.value = response.url
  } catch (error) {
    console.error('There was a problem fetching the HTML file:', error);
  }
}
const loadView = (view) => {
  // console.log(view,'view')
  // for (let index = 0; index < routerList.value.length; index++) {
  //   const element = routerList.value[index];
  //   console.log(element,'element',element == view)
  //   if(element == view){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
  for (const path in modules) {
    if (path == ('/public' + view + '.html')) {
      return true;
    }
  }

}
// 重新渲染html
function updateHtmlContent(val){
    htmlContent.value = ''
    setTimeout(() => {
        htmlContent.value = val;
    }, 100)
}
// 初始化
function init(){
  htmlContent.value = '';
  setTimeout(() => {
    htmlContent.value = initData.value
  }, 100)
}

const showCodeView = ref(false); // 默认关闭代码
function showCode(){
    showCodeView.value = !showCodeView.value;
}
// user-select: none; pointer-events: none;
const defaultLeftWidthRate = ref(0)

watch(showCodeView,()=>{
    if(showCodeView.value){
        defaultLeftWidthRate.value = 40;
    }else{
        defaultLeftWidthRate.value = 0;
    }
})

// 左右拖拽
const dragDiv = () => {
  let resize = document.getElementsByClassName('resize')
  let box = document.getElementsByClassName('contentView')
  let left = document.getElementsByClassName('left')
  for (let i = 0; i < resize.length; i++) {
    // 鼠标按下事件
    resize[i].onmousedown = function (e) {
      let boxWidth = box[i].offsetWidth
      let leftWidth = left[i].offsetWidth
      let minLeftWidthRate = parseFloat((100 / boxWidth * 100).toFixed(4))
      let minRightWidthRate = parseFloat((100 / boxWidth * 100).toFixed(4))
      // 开始位置
      let startX = e.clientX
      // 鼠标拖动事件
      document.onmousemove = function (e) {
        isShow.value = true
        // 结束位置
        let endX = e.clientX
        // 得到鼠标拖动的宽高距离：取绝对值
        let distX = Math.abs(endX - startX)
        if(endX <= 450){
          return false
        }else if(endX >= 1150){
          return false
        }
        // 向右拖拽
        if (endX > startX) {
          let moveLate = parseFloat(((leftWidth + distX) / boxWidth * 100).toFixed(4));
          if ((parseFloat('100') - moveLate) > minRightWidthRate) {
            defaultLeftWidthRate.value = moveLate
          }
        }
        // 向左拖拽
        if (endX < startX) {
          let moveLate = parseFloat(((leftWidth - distX) / boxWidth * 100).toFixed(4));
          if (moveLate > minLeftWidthRate) {
            defaultLeftWidthRate.value = moveLate
          }
        }
      }
      // 鼠标松开事件
      document.onmouseup = function (e) {
        isShow.value = false
        document.onmousemove = null
        document.onmouseup = null
        resize[i].releaseCapture && resize[i].releaseCapture() //当你不在需要继续获得鼠标消息就要应该调用ReleaseCapture()释放掉
      }
      resize[i].setCapture && resize[i].setCapture() //该函数在属于当前线程的指定窗口里设置鼠标捕获
      return false
    }
  }
}
// console.log(defaultLeftWidthRate,'defaultLeftWidthRate')


</script>
  
<style scoped lang="scss">
iframe {
    border: 0;
    height: 100%;
    width: 100%;
}
.contentView{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    height: calc(100vh - 100px);
    position: relative;
    .codeView{
        position: relative;
        height: 100%;
        width: calc(40% - 5px);
    }
    .preview{
        position: relative;
        width: 100%;
        // height: 100%;
        width: calc(60% - 5px);
        // height: calc(100vh - 80px);
        border-radius: 5px;
        overflow: hidden;
    }
}
.resize {
  cursor: col-resize;
  top: 8px;
  right: -8px;
  border-radius: 5px;
  margin-top: 50px;
  width: 6px;
  font-size: 32px;
  color: white;
  background: rgb(214, 214, 214);
  // height: 100%;
  span{
    display: flex;
    justify-content: center;
    position: relative;
    top: 50%;
  }
}


/*拖拽区鼠标悬停样式*/
.resize:hover {
  background: #444444;  
}
.show{
    user-select: none; pointer-events: none;
}
</style>
  
  