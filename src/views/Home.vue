<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <input type="number" v-model="salt" />
    <Calculator :salt="salt" />
  </div>
</template>

<script>
// @ is an alias to /src
import Calculator from '@/components/Calculator'

export default {
  name: 'Home',
  components: {
    Calculator
  },
  data() {
    return {
      salt: 10
    }
  }
}
</script>
