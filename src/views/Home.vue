<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <input type="number" v-model="salt" />
    <div style="border: 1px solid red"></div>
    <ReactiveUtils :info="info"></ReactiveUtils>
  </div>
</template>

<script lang="ts">
import ReactiveUtils from '@/components/ReactiveUtils.vue'

export default {
  name: 'Home',
  components: {
    ReactiveUtils
  },
  data() {
    return {
      salt: 10,
      info: { name: 'llz', age: 18 }
    }
  },
}
</script>
