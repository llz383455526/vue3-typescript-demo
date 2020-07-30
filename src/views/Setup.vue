<template>
<div>
   <h1>setup demo</h1>
   <slot name="default"></slot>
</div>
 
</template>

<script lang="ts">
import { onMounted } from 'vue'
export default {
  name: 'Setup',
  setup(props, context) {
    /**
     *  props 是响应式的，使用解构语法获取props属性时要用toRefs
     */

    /**
     * constext = {attrs, slots, emit}
     */
    console.log('context:', context)
    console.log('context.attrs:', context.attrs)
    console.log('context.slots:', context.slots)

    onMounted(()=>{
      console.log('monted:', context.slots)
    })
  }
}
</script>

<style>
</style>