<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <input type="number" v-model="salt" />
    <Calculator :salt="salt" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Calculator from '@/components/Calculator.vue'
import { provide } from 'vue'
import { PROVIDE_INJECT_KEY_COUNT } from '@/shared/constants'

export default {
  name: 'Home',
  components: {
    Calculator
  },
  data() {
    return {
      salt: 10
    }
  },
  setup() {
    provide(PROVIDE_INJECT_KEY_COUNT, {count: 10, defaultValue: 0})
  }
}
</script>
