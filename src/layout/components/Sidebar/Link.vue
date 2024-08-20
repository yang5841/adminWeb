<template>
  <component :is="type" v-bind="linkProps()">
    <slot />
  </component>
</template>

<script setup>
import { isExternal } from '@/utils/validate'
import { useRouter } from 'vue-router'

const props = defineProps({
  to: {
    type: [String, Object],
    required: true
  },
  id: {
    type: [String, Object],
    required: true
  },
  pathType: {
    type: String,
    default: ''
  },
  main: {
    type: String,
    default: ''
  }
})
const isExt = computed(() => {
  return isExternal(props.to)
})

const type = computed(() => {
  if (isExt.value) {
    return 'a'
  }
  return 'router-link'
})

function linkProps() {
  if (isExt.value) {
    return {
      href: props.to,
      target: '_blank',
      rel: 'noopener'
    }
  }
  if(props.pathType == 'course'){ //查看是否是文档地址
    return {
      to: '/course?key=' + props.main
    }
  }else if(props.pathType == 'menu'){
    return {
      // to: props.to
      to: '/system/#' + props.id
    }
  }
}
const router = useRouter()
router.beforeEach((to, from, next) => {
  if (to.hash) {
    const element = document.querySelector(to.hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' , block: 'start'});
    }else{
      next()
    }
  }else{
    next()
  }
})

</script>
