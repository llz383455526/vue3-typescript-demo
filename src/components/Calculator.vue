<template>
  <div class="hello">
    <div class="content">
      <input type="number" v-model="num1" ref="refNum1" />
      <span>+</span>
      <input type="number" v-model="num2" ref="refNum2" />
      <span>=</span>
      <input type="number" v-model="result" />
    </div>
    <div>provide/inject data: {{ config.count }}</div>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted, reactive, readonly, inject, InjectionKey } from 'vue'
import { PROVIDE_INJECT_KEY_COUNT } from '@/shared/constants'
import { Config } from '../shared/interface'

export default {
  name: 'Calculator',
  props: {
    salt: { type: Number, default: 100 }
  },
  setup(props: { salt: number }) {
    const refNum1 = ref(null)
    const refNum2 = ref(null)
    const num1 = ref(0)
    const num2 = ref(1)
    const result = computed(() => num1.value + num2.value + props.salt)

    const reactiveData = reactive({ data: { name: 'llz' } })
    const readonlyData = readonly(reactiveData)

    reactiveData.data.name = 'hago'
    readonlyData.data.name = 'xxx'
    console.log(
      `origin data.name: ${reactiveData.data.name}, readonly data.name:  ${readonlyData.data.name}`
    )

    console.log(refNum1.value, refNum2.value) // null null
    onMounted(() => {
      console.log(refNum1.value, refNum2.value)
    })

    const config: Config = inject(PROVIDE_INJECT_KEY_COUNT, { defaultValue: 10 })
    // const p = reactive(config)
    return {
      num1,
      num2,
      result,
      refNum1,
      refNum2,
      config
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
