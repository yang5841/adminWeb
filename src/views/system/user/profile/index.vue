<template>
   <div class="app-container">
      <el-scrollbar ref="scrollbarRef" always @scroll="scroll">
      <div v-for="(item,index) in list" :key="index">
         <div class="page">
            <div :id="itemThree.id" class="pageItem" v-for="(itemThree,index) in item.children" :key="index" 
            v-show="!itemThree.hidden"
             @click="goBox(itemThree)">
               <div class="itemImg" v-if="sideTheme === 'theme-dark'">
                  <img class="imgO" :src="ImgUrl + itemThree.thumbnail" alt="">
                  <div class="imgT"></div>
               </div>
               <div class="itemView">  
                  <div :class="['itemType' , sideTheme === 'theme-dark' ? 'darkBackgroundImg' : 'defaultImg']">
                     <img v-if="itemThree.instanceType == 1 || itemThree.instanceType == 0" class="cloudImg" src="@/assets/img/ic_yun.png" alt="" />
                     <img v-if="itemThree.instanceType == 2||itemThree.instanceType == 0" class="portImg" src="@/assets/img/ic_duan.png" alt="" />
                     <img v-if="itemThree.instanceTag == 1" class="labelImg" src="@/assets/img/tag_new.png" alt="">
                     <div style="width: 70%;text-align: center;" :class="['titleO',sideTheme === 'theme-dark' ? 'titleO2' : '']">{{itemThree.name}}</div>
                  </div>
                  <div class="itemCenter">
                     <div class="itemCenter-img">
                        <div class="img-view">
                           <img v-if="ImgUrl + itemThree.thumbnail"
                              :src="ImgUrl + itemThree.thumbnail" alt="">
                           <div v-else style="text-align: center; margin-top: 70px;">图片加载中...</div>
                        </div>
                        <div class="itemCenter-details">{{itemThree.details}}</div>
                     </div>
                  </div>
                  <!-- <div v-if="sideTheme !== 'theme-dark'" class="itemTit">
                     <div>点击查看</div>
                     <img src="@/assets/img/ic_view.png" alt="">
                  </div>
                  <div v-else class="itemTit itemTit2">
                     <div>点击查看</div>
                     <img src="@/assets/img/ic_view2.png" alt="">
                  </div> -->
               </div>
            </div>
         </div>
      </div>
      </el-scrollbar>
   </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from "vue";
import circleUrl from '@/assets/images/login-background.jpg';
import useSettingsStore from '@/store/modules/settings'
import useUserStore from '@/store/modules/user'
import $axios from 'axios'
import { ElMessage,ElScrollbar } from "element-plus";
const settingsStore = useSettingsStore()
const userInfoStore = useUserStore()
const sideTheme = computed(() => settingsStore.sideTheme);
import { useRoute, useRouter } from 'vue-router'
const Router = useRouter();

const list = ref([]);
const { BASE_URL } = process.env;
const ImgUrl = '/data/thumbnail/';
const imageLoaded = ref(false);


onMounted(() => {
  $axios.get("/data/menu/menuList.json").then((res) => {
      if(res.data.code == 200){
         //  console.log(res.data.data,'res');
         list.value = res.data.data;
      }
   });
   setTimeout(()=>{
      if(useUserStore().scrollTop > 0){
         inputSlider(useUserStore().scrollTop)
      }
   },100)
   
});

const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const scrollTopValue = ref(0)
const scroll = ({ scrollTop }) => {
   scrollTopValue.value = scrollTop;
   useUserStore().scrollTop = scrollTopValue.value
}
const inputSlider = (value: number) => {
  scrollbarRef.value!.setScrollTop(value)
}
const goBox = (item :any)=>{
   userInfoStore.isActiveIndex = item.index;
   userInfoStore.changeMenuScrollTop(scrollTopValue.value)
   if(item.main){
      Router.push('/system/sandbox?key='+ `${item.main}`)
   }else{
      ElMessage.success('该实例未开放，请敬请期待！');
   }
}
watch(() => Router.currentRoute.value, (newValue, oldValue) => {},
{ immediate: true })
</script>
<style lang="scss" scoped>
.app-container {
   overflow-y: scroll;
    height: calc(100vh - 50px);
   .pageTit{
      line-height: 50px;
      font-size: 22px;
      font-weight: 500;
      border-bottom: 1px solid #eee;
   }
   .page{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      .pageItem{
         // height: 10%;
         width: 19%;
         margin: 10px 5px;
         position: relative;
         background: #FFFFFF;
         overflow: hidden;
         border-radius: 8px;
         height: 242px;
         cursor: pointer;
         .itemImg{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            z-index: 100;
            // opacity: 0.8;
            img{
               width: 100%;
               height: 100%;
               display: block;
            }
            .imgO{
               position: absolute;

            }
            .imgT{
               position: absolute; 
               width: 100%;
               height: 100%;
               background: linear-gradient(103deg, #262B3C 14%, rgb(59 66 85 / 60%) 72%, rgba(60, 69, 86, 0.2) 100%);
            }
         }
         .itemView{
            width: 100%;
            height: 242px;
            position: absolute;
            z-index: 101;
            img{
               width: 100%;
               height: 100%;
               display: block;
            }
            .itemCenter{
               display: flex;
               justify-content: space-between;
               align-items: center;
               width: 100%;
               height: 196px;
               position: relative;
               .itemCenter-tit{
                  width: 60%;
                  padding: 5px 10px;
                  position: absolute;
                  color:#FFFFFF;
                  z-index: 1;
                  // background: linear-gradient(103deg, #262B3C 14%, rgba(59, 66, 85, 0.6) 72%, rgba(60, 69, 86, 0.2) 100%);
                  background: linear-gradient( 103deg, #4F586F 0%, rgba(59,66,85,0) 52%, rgba(39,44,59,0) 100%);
                  .titleO{
                     font-family: YouSheBiaoTiHei;
                     font-size: 28px;
                     color: #333333;
                     line-height: 49px;
                     font-weight: 700;
                     margin-bottom: 10px;
                     overflow: hidden;
                     white-space: nowrap;
                     text-overflow: ellipsis;
                     text-align: left;
                     height: 49px;
                  }
                  .titleO2{
                     color: #FFFFFF;
                  }
                  .titleT{
                     font-family: MicrosoftYaHei;
                     font-size: 11px;
                     // color: rgba(119,119,119,0.6);
                     line-height: 20px;
                     font-weight: 400;
                     height: 60px;
                     display: -webkit-box;
                     -webkit-line-clamp: 3;
                     -webkit-box-orient: vertical;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     white-space: normal;
                  }
                  .titleT2{
                     color: rgba(255,255,255,1);
                  }
               }
               .itemCenter-img{
                  width: 100%;
                  height: 100%;
                  position: relative;
                  .img-view{
                     width: 100%;
                     height: 100%;
                  }
                  .itemCenter-details{
                     position: absolute;
                     bottom: 0;
                     color: #FFFFFF;
                     background: rgba(79, 88, 111, 0.7);
                     min-height: 50px;
                     font-size: 12px;
                     padding: 5px;
                     opacity: 0;
                     transition: all 1.5s;
                     -webkit-transition: all 1.5s;
                     -moz-transition: all 1.5s;
                     -o-transition: all 1.5s;
                     -ms-transition: all 1.5s;
                     left: 0;
                     right: 0;
                  }
               }
               .itemCenter-img:hover{
                     .itemCenter-details{
                        opacity: 1;
                     }
                     
                  }
            }
         }
         .itemTit{
            margin:0 20px;
            line-height: 46px;
            text-align: end;
            font-family: MicrosoftYaHei;
            font-size: 11px;
            color: #0070E4;
            display: flex;
            align-items: center;
            align-content: end;
            justify-content: flex-end;
            font-weight: 400;
            border-top: 1px solid #EEEEEE;
            // position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            img{
               display: block;
               width: 14px;
               height: 14px;
               margin-left: 10px;
            }
         }
         .itemTit2{
            color: #FFFFFF !important;
            border-top: none;
            background: rgba(0,0,0,0.4);
            margin:0 0px;
            padding: 0 20px;
            // border-radius: 0px 0px 8px 8px;
         }
         .itemType{
            // position: absolute;
            top: 0;
            right: 0;
            display: flex;
            width: 100%;
            height: 46px;
            align-items: center;
            align-content: flex-end;
            padding: 0 10px;
            .cloudImg{

            }
            img{
               display: block;
               width: 35px;
               height: 35px;
               // font-size: 12px;
               // border: 1px solid #ccc;
               // margin: 10px;
            }
            .labelImg{
               position: absolute;
               right: 0;
               top: 0;
               width: 78px;
               height: 78px;
               z-index: 1;
            }
            .titleO{
               font-family: YouSheBiaoTiHei;
               font-size: 16px;
               color: #333333;
               line-height: 49px;
               font-weight: 700;
               // margin-bottom: 10px;
               overflow: hidden;
               white-space: nowrap;
               text-overflow: ellipsis;
               text-align: left;
               height: 49px;
            }
            .titleO2{
               color: #FFFFFF;
            }
         }
      }
      .pageItem:hover{
         border:2px solid #0095ff;
      }
   }
}
.darkBackgroundImg{
   background:url('@/assets/img/bg_title2.png') no-repeat;
   background-size: 100% 100%;
}
.defaultImg{
   background:url('@/assets/img/bg_title1.png') no-repeat;
   background-size: 100% 100%;
}
.tooltipClass{
   width: 100px;
}
.el-tooltip__trigger{
   width: 100px;
}
</style>
