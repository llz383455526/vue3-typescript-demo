<template>
  <Child>
    <div class="default">default slot content from parent</div>

    <template #name>
      <div>name slot content from parent</div>
    </template>

    <template #slotScope="{ user }">name: {{user.name}}, age:{{user.age}}</template>
  </Child>
</template>

<script>
import Child from '../components/Child'
import Vue, { reactive , computed, effect} from 'vue'
export default {
  components: {
    Child
  }
}
</script>

<style lang="scss" scoped>
.default {
  color: green
}
::v-deep(.default-title) {  // 修改子组件样式
  color: red
}
</style>