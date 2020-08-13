<template>
  <div>
    <div>{{nameRef}}</div>
    <button @click="modify">修改数据</button>
  </div>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  ref
} from 'vue'
export default {
  beforeCreate() {
    console.log('lifecycle option beforeCreate')
  },
  created() {
    console.log('lifecycle option created')
  },
  beforeMount() {
    console.log('lifecycle option beforeMount')
  },
  mounted() {
    console.log('lifecycle option mounted')
  },
  beforeUpdate() {
    console.log('lifecycle option beforeUpdate')
  },
  updated() {
    console.log('lifecycle option updated')
  },
  beforeUnmount() {
    console.log('lifecycle option beforeUnmount')
  },
  unmounted() {
    console.log('lifecycle option unmounted')
  },
  errorCaptured() {
    console.log('lifecycle option errorCaptured')
  },
  renderTracked() {
    console.log('lifecycle option renderTracked')
  },
  renderTriggered() {
    console.log('lifecycle option renderTriggered')
  },
  setup() {
    console.log('lifecycle setup begin')
    const nameRef = ref('llz')
    function modify(){
      nameRef.value='hagofe'
    }
    onBeforeMount(() => console.log('lifecycle hook onBeforeMount'))
    onMounted(() => console.log('lifecycle hook onMounted'))
    onBeforeUpdate(() => console.log('lifecycle hook onBeforeUpdate'))
    onUpdated(() => console.log('lifecycle hook onUpdated'))
    onBeforeUnmount(() => console.log('lifecycle hook onBeforeUnmount'))
    onUnmounted(() => console.log('lifecycle hook onUnmounted'))
    onErrorCaptured(() => console.log('lifecycle hook onErrorCaptured'))
    onRenderTracked(() => {console.log('lifecycle hook onRenderTracked')})
    onRenderTriggered(() => console.log('lifecycle hook onRenderTriggered'))

    return {
      nameRef,
      modify
    }
  }
}
</script>

<style></style>