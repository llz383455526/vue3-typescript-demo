<template>
  <div>
    <h1>v-model demo</h1>
    <div>test v-model---> {{visibleRef}}</div>
    <div>test v-mode:visible2--> {{visibleRef2}}</div>
    <VmodelChild v-model="visibleRef" v-model:visible2="visibleRef2"></VmodelChild>
  </div>
</template>
<script>
import { ref, defineComponent, h } from 'vue'
const VmodelChild = defineComponent({
  name: 'Child',
  props: {
    modelValue: { type: Boolean, default: false },
    visible2: { type: Boolean, default: false }
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

    return {
      visibleRef,
      visibleRef2
    }
  }
}
</script>

<style>
</style>