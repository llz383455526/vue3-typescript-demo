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
import { provide, reactive } from 'vue'
import { PROVIDE_INJECT_KEY_COUNT } from '@/shared/constants'

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
  setup() {
    const data = reactive({ count: 10, defaultValue: 0 })
    provide(PROVIDE_INJECT_KEY_COUNT, data)
    setInterval(() => {
      data.count++
    }, 1000)
  }
}
</script>
