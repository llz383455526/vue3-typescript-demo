<template>
  <div class="child-wrapper">
    <h1 class="default-title">default</h1>
    <slot></slot>

    <h1>name slot</h1>
    <slot name="name"></slot>

    <h1>name and scope</h1>
    <slot name="slotScope" v-bind:user="info">name: {{info.name}}</slot>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Child',
  setup() {
    const info = reactive({ name: 'fe', age: 2 })
    return {
      info
    }
  }
}
</script>

<style lang="scss" scoped>
::v-slotted(.default) {
  // 子组件修改父组件传进来slot内容的样式
  color: red;
  font-size: 36px;
}
.default-title {
  color: blue;
}
</style>