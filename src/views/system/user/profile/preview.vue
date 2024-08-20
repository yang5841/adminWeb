<template>
  <div id="viewBox">
    <!-- <iframe ref="preview" :srcdoc="compiledCode" ></iframe> -->
    <div class="btnList">
        <div class="btnS">
          <div :class="['btnS',isActive == 0 && index == 0 ? 'selectCss': isActive == 1 && index ==1 ? 'selectCss2' : '']" style="padding: 5px;"
          @click="selectBtn(item,index)" v-for="(item,index) in btnLists" :key="index">
            <img class="cloudImg" :src="item.icon" alt="" />
            <div>{{ item.name }}</div>
          </div>
        </div>
        <div class="btn-title" v-show="styleWidth <= 50 && iframeTitle">
          {{ iframeTitle }}
        </div>
        <div>
          <el-button size="small" :icon="Back" type="primary" @click="goTop">返回列表</el-button>
        </div>
        
    </div>
   
    <div class="iframeBox" id="iframeBox">
         <iframe ref="preview2" id="preview2"></iframe>
    </div>
    <div class="lookCode" v-show="!isShowView" @click="switchBtn($event)" >
       查看源码
    </div>
  
  </div>
</template>
  <script setup>
import { computed, onMounted, ref, watch,toRefs, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Back } from '@element-plus/icons-vue'
import ic_yun from '@/assets/img/ic_yun.png'
import ic_duan from '@/assets/img/ic_duan.png'
import useUserStore from '@/store/modules/user'
const router = useRouter();
const route = useRoute()
// console.log(route,'route',document.title)
const code = ref('');
const preview2 = ref(null);
const isActive = ref(0);
const listBtn = reactive({
  btnLists: [
    // {
    //   name: "云渲染",
    //   icon: ic_yun,
    //   active: true,
    // },
    {
      name: "端渲染",
      icon: ic_duan,
      active: false,
    },
  ],
})
const props = defineProps({
  codeView: {
    type: String,
    required: false,
    default: "",
  },
  urlData: {
    type: String,
    required: false,
    default: "",
  },
  modelValue: {
    type: String,
    required: false,
    default: ''
  },
  isShowView:{
    type: Boolean,
    required: false,
    default: ''
  },
  styleWidth:{
    type: Number,
    required: false,
    default: ''
  }
});
const emit = defineEmits(["update:modelValue",'show']);
const { codeView, urlData ,modelValue,isShowView,styleWidth} = toRefs(props);
const { btnLists } = toRefs(listBtn);

code.value = modelValue.value //重新赋值12
watch(() => modelValue.value, (val,ole) => {
    preview2.value.contentWindow.document.close();
    preview2.value.contentWindow.location.reload();
    handleChange(val)
},
{
  deep: true 
}
);

const handleChange = (val) => {
    setTimeout(()=>{
        preview2.value.contentWindow.document.open()
        preview2.value.contentWindow.document.write(val)
        preview2.value.contentWindow.document.close();
    },100)
    
};
const goTop = ()=> {
    router.push('/system')
  //   if(useUserStore().isMenuTo){
  //   const url = '/system/' + useUserStore().isMenuTo;
  //   router.push(url)
  // }
}
const switchBtn = (e)=> {
    emit('show')
}
const selectBtn = (item,index)=> {
  isActive.value = index
}
const iframeTitle = ref('')
const getIframeTitle = () => {
  const iframe = document.querySelector("#preview2");
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  const title = iframeDocument.title;
  iframeTitle.value = title;
};
 
onMounted(() => {
  const iframeElement = preview2.value;
  iframeElement.addEventListener('load', getIframeTitle);
});

// 暴露给父组件
defineExpose({
  getIframeTitle
});
</script>
  
  <style scoped lang="scss">
iframe {
  border: 0;
  height: 100%;
  width: 100%;
}
#viewBox{
    // width: 100%;
    height: 100%;
    // height: calc(100vh - 100px);
    position: relative;
    .btnList{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        background: rgba(0,0,0,0.45);
        .btnS{
          display: flex;
          align-items: center;
          font-family: MicrosoftYaHei;
          font-size: 12px;
          color: rgba(255,255,255,0.8);
          background: #343333;
          cursor: pointer;
          height: 24px;
          border-radius: 4px;
          img{
            display: block;
            width: 20px;
            height: 20px;
          }
        }
        .btn-title{
          font-family: YouSheBiaoTiHei;
          font-size: 24px;
          color: #FFFFFF;
        }
    }
}
.iframeBox{
    // display:flex; justify-content:center; align-items:center; 
    // height:100vh;
    // height: calc(100vh - 100px);
    height: 100%;
}
.selectCss{
  border: 1px solid #0070E4;
  color: #0070E4 !important;
  border-radius: 4px 0px 0px 4px !important;
}
.selectCss2{
  border: 1px solid #0070E4;
  color: #0070E4 !important;
  border-radius: 0px 4px 4px 0px !important;
}
.lookCode{
  position:absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 45px;
  height: 150px;
  background: url('@/assets/img/bg_button.png') no-repeat;
  background-size: 100% 100%;
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #FFFFFF;
  padding: 35px 10px;
  transform: translateY(35vh);
  cursor: pointer;
}
</style>
  
  