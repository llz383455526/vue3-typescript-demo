<template>
  <div>
  
    <h1>default</h1>
    <slot></slot>

    <h1>name slot</h1>
    <slot name="name"></slot>

    <h1>name and scope</h1>
    <slot name="slotScope" v-bind:user="info">
      name: {{info.name}}
    </slot>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Child',
  setup(){
    const info=reactive({name: 'fe', age:2})
    return {
      info
    }
  }
}
</script>

<style>

</style>