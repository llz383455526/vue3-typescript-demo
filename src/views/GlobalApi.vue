<template>
  <div>
    <keep-alive></keep-alive>
    <transition name="fade">
      <h1 v-show="show">global api demo</h1>
    </transition>
  </div>
</template>

<script>
import * as Vue from 'vue'
import { createApp, extend, nextTick, version, ref } from 'vue'
export default {
  name: 'GlobalApi',
  components: {
    // Transition
  },
  setup() {
    // const instance = createApp()
    console.log('instance:', Vue)
    const show = ref(true)
    setInterval(() => {
      show.value = !show.value
    }, 1000)

    return {
      show
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>