<template>
  <div v-bind:name="name">visible in child:{{modelValue}}</div>
  <a @click="clickHandler">切换</a>
</template>

<script>
export default {
  name: 'VmodelChild',
  props: {
    modelValue: {type: Boolean, default: false}
  },
  setup(props, {emit}){

    function clickHandler(){
      emit('update:modelValue', !props.modelValue)
    }
    return {
      clickHandler
    }
  }
}
</script>

<style>

</style>