<script setup>
import {
  watch, ref, toRefs , computed, reactive, onMounted, toRaw
} from 'vue';
import { Refresh, VideoPlay, CreditCard } from '@element-plus/icons-vue'
import { Codemirror } from 'vue-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { cpp } from "@codemirror/lang-cpp";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import useSettingsStore from '@/store/modules/settings'
const settingsStore = useSettingsStore()

const code = ref('');
const resetData = ref('')
const props = defineProps({
    modelValue: {
        type: String,
        required: false,
        default: ''
    },
    language: {
        type: String,
        default: ''
    },
    disabled: {
        type: [String, Boolean],
        default: false
    },
    style: {
        type: [Object],
        default: () => ({
            height: '400px'
        })
    }
})
const emit = defineEmits(['update:modelValue','updateData','initDataS','close'])
const {modelValue, language, disabled, style } = toRefs(props)
// console.log(modelValue.value,'modelValue',props)

const fullScreen = ref(true);

code.value = modelValue.value //重新赋值12
watch(() => modelValue.value, (val,ole) => {
    // console.log(val,'val',ole)
    code.value = val;
    resetData.value = val
},
{
  deep: true 
}
);
const comStyle = computed(() => ({ ...style.value, ...{ height: fullScreen.value ? '100%' : '400px' } }));
// console.log(comStyle.value,'comStyle')
let dateTime = "黑夜";
const options = reactive({
    extensions: [html(),javascript(),cpp(),css() ],
    autoCloseBrackets:true,
    autoCloseTags:true,
    highlightSelectionMatches:{ showToken: /\w/, annotateScrollbar: true },
});

const { extensions } = toRefs(options);
// 改变主题
function changeTheme(e) {
    if (e.target.innerHTML === "黑夜") {
    options.extensions = [html(),javascript() ,cpp(),css()];
    dateTime = e.target.innerHTML = "白天";
    } else {
    options.extensions = [html(),javascript() ,cpp(),css(),oneDark];
    dateTime = e.target.innerHTML = "黑夜";
    }
}
const sideTheme = computed(() => settingsStore.sideTheme); // 监控主题颜色
watch(()=>sideTheme.value,(val,old)=>{
    if(val == 'theme-dark'){
        options.extensions = [html(),javascript() ,cpp(),css(),oneDark];
    }else{
        options.extensions = [html(),javascript() ,cpp(),css()];
    }
})
// 运行
function changeOperation(e){
    // console.log(code.value)
    emit('updateData',code.value)
    runCode()
    
}
// 重置
function changeInit(e){
    emit('initDataS')
    successLogs.value = []
    errorLogs.value = []
    warnLogs.value = []
    // errorType.value = ''
}
const myCodeMirror = ref(null)

onMounted(() => { //初始化代码颜色
    if(sideTheme.value == 'theme-dark'){
        options.extensions = [html(),javascript() ,cpp(),css(),oneDark];
    }else{
        options.extensions = [html(),javascript() ,cpp(),css()];
    }
});

const isShell = ref(false)
function openShell(){
    isShell.value = !isShell.value
}

const successLogs = ref([]);
const warnLogs = ref([]);
const errorLogs = ref([]);
const errorType = ref('');
function runCode() {
    
    window.addEventListener('message', function (e) {
        // console.log(e,'监听消息')
        if(e.data.list && e.data.type == 'success' && e.data.list.length>0){
            successLogs.value = e.data.list;
        }else if(e.data.list && e.data.type == "warn" && e.data.list.length>0){
            warnLogs.value = e.data.list;
        }else if(e.data.list && e.data.type == "error" && e.data.list.length>0){
            errorLogs.value = e.data.list;
        }else{
            errorType.value = e.data.error;
        }
    })
}
</script>
<!-- <pre id="log-output"></pre> -->

<template>
    <div class="page">
        <div :class="['btnList',sideTheme === 'theme-dark' ? 'darkCss' : '']">
            <div>
                <!-- <el-button size="small" type="primary" @click="changeTheme($event)">黑夜</el-button>    -->
                <el-button  size="small" :icon="CreditCard" @click="openShell">控制台</el-button>
                <el-button size="small" @click="changeInit($event)" :icon="Refresh">重置</el-button>
                <!-- <el-button  size="small">依赖</el-button> -->
                <el-button size="small" type="primary" @click="changeOperation($event)" :icon="VideoPlay">运行</el-button>
                
            </div>
            <div style="cursor: pointer;" @click="emit('close')">
                <el-icon :style="{ color :sideTheme === 'theme-dark' ? '#ffffff' : '#999999'  }"><Close /></el-icon>
            </div>
        </div>
        <div class="codemirror-view" :style="{ height: isShell ? 'calc(100vh - 260px)' : 'calc(100vh - 150px)'}">
            <Codemirror 
                class="codemirror-scroll"
                :disabled="disabled" 
                v-model="code" 
                placeholder="Hello, world!" 
                :style="comStyle" 
                :autofocus="false"
                :indent-with-tab="true" 
                :tabSize="2" 
                :fullScreen="true" 
                :extensions="extensions"
                :foldGutter="true"
                :lint="true"
                mode='text/html'
                ref="myCodeMirror"
                @ready="() => {}" 
                @change="() => {}"
                @focus="() => {}" 
                @blur="() => {}"
            ></Codemirror>
        </div>
        <div class="console-output" id="log-output" v-show="isShell">
            <div v-for="(item,index) in successLogs" :key="index">{{ item }}</div>
            <div v-for="(item,index) in errorLogs" :key="index" class="error"><el-icon color="red"><CircleCloseFilled /></el-icon>{{ item }}</div>
            <div v-for="(item,index) in warnLogs" :key="index" class="info"><el-icon color="#E86E2F"><WarningFilled /></el-icon>{{ item }}</div>
            <div v-if="errorType" class="error"><el-icon color="red"><CircleCloseFilled /></el-icon>{{ errorType }}</div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.page{
    
    height: 100%;
    width: 100%;
    .btnList{
        line-height: 50px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        background: #FFFFFF;
        border-radius: 3px;
    }
}
.darkCss{
    background: #343333 !important;
}
:deep(.ͼ2 .cm-gutters){
    // background-color: transparent;
    background: #fff;
}
.codemirror-view{
    // height: 75%;
    background: #fff;
}
/* 自定义滚动条样式 */
:deep(.ͼ1 .cm-scroller)::-webkit-scrollbar {
  width: 8px; /* 设置滚动条宽度 */
  height: 8;
  border-radius: 4px;
}
 
:deep(.ͼ1 .cm-scroller)::-webkit-scrollbar-track {
  background: transparent; /* 滚动条轨道颜色 */
}
 
:deep(.ͼ1 .cm-scroller)::-webkit-scrollbar-thumb {
  background: rgba(212, 216, 222, 1); /* 滚动条手柄颜色 */
}
 
:deep(.ͼ1 .cm-scroller)::-webkit-scrollbar-thumb:hover {
  background: #555; /* 滚动条手柄hover颜色 */
}
:deep(.ͼ1 .cm-scroller)::-webkit-scrollbar-corner {
    background-color: transparent;
}
.console-output {
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
  white-space: pre-wrap;
  height: 100px;
  overflow: auto;
  font-size: 12px;
  cursor: pointer;
  .error{
    background: #FCEBEB;
    display: flex;
    align-items: center;
    height: 15px;
  }
  .info{
    background: #FFF6D5;
    display: flex;
    align-items: center;
    height: 15px;
  }
}
</style>
