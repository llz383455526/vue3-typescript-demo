<template>
  <div>
    <h1 ref="demoRef">watch demo, {{a}}</h1>
  </div>
</template>

<script>
import { watch, reactive, watchEffect, ref, onMounted } from 'vue'
export default {
  name: 'Watch',
  setup() {
    const demoRef = ref(null)
    const a = ref(0)
    const watchFd = watch(
      a,
      () => {
        console.log('changed', a.value)
      },
      { immediate: true }
    )
    a.value = 2
    
    const count = ref(0)

      watchEffect(() => {
        console.log(count.value)
      })

      count.value = 2
    return {
      demoRef,
      a,
      count
    }
  }
}
</script>

<style>
</style>