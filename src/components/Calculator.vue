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
    <button @click="stopHandler1()">停止第一个watchEffect</button>
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, watchEffect } from 'vue'

export default {
  name: 'Calculator',
  props: {
    salt: { type: Number, default: 100 }
  },
  setup(props: { salt: number }) {
    const num1 = ref(0)
    const num2 = ref(1)
    const result = computed(() => num1.value + num2.value + props.salt)

    watch(
      [() => props.salt, num1],
      ([newSalt, newNum1], [prevSalt, preNum1]) => {
        console.log('watch props:', `${prevSalt}:${newSalt}, ${preNum1}:${newNum1}`)
      },
      { immediate: true, deep: true }
    )

    watch(num2, () => console.log('num2:', num2.value))
    // watch( props.salt, ()=>{ console.log('watch props:', props.salt)}, {immediate: true, deep: true}) // 错误

    const stopHandler1 = watchEffect(
      onInvalidate => {
        console.log(`watch Effect 1:`, num1.value, num2.value)
        function handler() {
          console.log(`resize event triggered`)
        }

        window.addEventListener('resize', handler)
        onInvalidate(() => {
          window.removeEventListener('resize', handler) // 注册一个解除监听的处理函数，否则随着数据改变，监听处理队列会越来越多
        })
      },
      { flush: 'post' }
    )

    watchEffect(() => {
      console.log('watch effect 2:', num2.value)
    })

    return {
      num1,
      num2,
      result,
      stopHandler1
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
