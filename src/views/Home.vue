<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <input type="number" v-model="salt" />
    <Calculator :salt="salt" />
    <div style="border: 1px solid red"></div>
    <ReactiveUtils :info="info"></ReactiveUtils>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Calculator from '@/components/Calculator.vue'
import ReactiveUtils from '@/components/ReactiveUtils.vue'

export default {
  name: 'Home',
  components: {
    Calculator,
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
