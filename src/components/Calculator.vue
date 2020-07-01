<template>
  <div class="hello">
    <div class="content">
      <input type="number" v-model="num1" />
      <span>+</span>
      <input type="number" v-model="num2" />
      <span>=</span>
      <input type="number" v-model="result" />
    </div>
    <div>salt: {{ salt }}</div>
  </div>
</template>

<script lang="ts">
import { ref, computed, watch } from 'vue'

export default {
  name: "Calculator",
  props: {
    salt: { type: Number, default: 100 }
  },
  setup(props) {
    const num1 = ref(0)
    const num2 = ref(1)
    const result = computed(() => num1.value + num2.value + props.salt)

    watch(
      [() => props.salt, num1],
      ([newSalt, newNum1], [prevSalt, preNum1]) => {
        console.log('watch props:', props.salt, num1.value)
      },
      { immediate: true, deep: true }
    )

    watch(num2, () => console.log('num2:', num2.value))
    // watch( props.salt, ()=>{ console.log('watch props:', props.salt)}, {immediate: true, deep: true}) // 错误

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
