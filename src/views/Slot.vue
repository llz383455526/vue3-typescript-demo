<template>
  <Child>
    <div>default slot content from parent</div>

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

<style>
</style>