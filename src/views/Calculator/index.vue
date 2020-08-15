<template>
  <div class="hello">
    <h1>calculator demo</h1>
    <div class="content">
      <input type="number" v-model="num1" ref="refNum1" />
      <span>+</span>
      <input type="number" v-model="num2" ref="refNum2" />
      <span>=</span>
      <input type="number" v-model="result" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { calculatLogic } from './common'

export default {
  name: 'Calculator',
  props: {
    salt: { type: Number, default: 100 }
  },
  setup(props: { salt: number }) {
    const { num1, num2, result } = calculatLogic(props.salt)
    return {
      num1,
      num2,
      result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
input {
  display: inline-block;
  width: 100px;
  height: 40px;
  text-align: center;
  margin: 10px;
}
.btn {
  width: 100px;
  height: 30px;
  margin: 0 auto;
  // border: 1px solid paleturquoise;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
