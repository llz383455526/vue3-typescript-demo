<template>
  <div>
    <h1>v-model demo</h1>
    <input v-model="inputValue">
    <div>test v-model---> {{visibleRef}}</div>
    <div>test v-model:visible2--> {{visibleRef2}}</div>
    <VmodelChild v-model="visibleRef" v-model:visible2="visibleRef2"></VmodelChild>
    
  </div>
</template>
<script>
import { ref, defineComponent, h, watchEffect } from 'vue'
const VmodelChild = defineComponent({
  name: 'Child',
  props: {
    modelValue: { type: Boolean, default: true },
    visible2: { type: Boolean, default: true }
  },
  render() {
    return h('div', [
      `visible in child: ${this.modelValue},     
       visible2 in child: ${this.visible2} 
      `,
      h('div', [
        h(
          'button',
          {
            onClick: this.clickHandler
          },
          '切换vmodel'
        ),
        h(
          'button',
          {
            onClick: this.clickHandler2
          },
          '切换vmodel:visible2'
        )
      ])
    ])
  },
  setup(props, { emit }) {
    function clickHandler() {
      emit('update:modelValue', !props.modelValue)
    }
    function clickHandler2() {
      emit('update:visible2', !props.visible2)
    }
    return {
      clickHandler,
      clickHandler2
    }
  }
})
export default {
  name: 'Vmodel',
  components: {
    VmodelChild
  },
  setup() {
    const visibleRef = ref(false)
    const visibleRef2 = ref(false)
    const inputValue = ref(1)


    setInterval(()=>{
      inputValue.value++
    }, 1000)
    watchEffect(()=>{
      console.log('new value:', inputValue.value)
    })
    return {
      inputValue,
      visibleRef,
      visibleRef2
    }
  }
}
</script>

<style>
</style>