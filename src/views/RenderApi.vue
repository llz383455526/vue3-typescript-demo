<!--
vue2: https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0
vue3: https://github.com/vuejs/rfcs/blob/master/active-rfcs/0008-render-function-api-change.md
1. h可以全局导入
2. h函数的参数扁平化
3. render属性不再接受h参数
-->
<template>
  <div>
    <h1>render api change demo</h1>
  </div>
</template>

<script>
import { h, reactive } from 'vue'

export default {
  // vue2
  // render(h) {
  //   return h('h1', {
  //     class: ['test'],
  //     style: { color: 'red' },
  //     attrs: { id: 'oldRenderApi' },
  //     domProps: { innerHTML: 'old creatElement api' },
  //     on: { click: this.increment }
  //   })
  // },
  setup(props, { slots, attrs, emit }) {
    const state = reactive({
      count: 0
    })
    function increment() {
      state.count++
    }
    // vue3 render function
    return () => {
      return h(
        'div',
        {
          class: ['test'],
          style: { color: 'red', cursor: 'pointer' },
          id: 'newRenderApi',
          innerHTML: 'new h api content',
          onClick: increment
        },
        state.count
      )
    }
  }
}
</script>

<style>
</style>