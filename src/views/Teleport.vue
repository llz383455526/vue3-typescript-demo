<!--
新加入的内置组件：Teleport
-->
<template>
  <div class="teleport-wrapper">
    <h1>Teleport demo</h1>
    <teleport to="#endofbody">
      <div id="content">
        <p>
          this will be moved to #endofbody.
          <br />
          {{nameRef}}
        </p>
        <Child class="color-red" />
      </div>
    </teleport>
    <teleport to="modal" :disabled="isDisabled">
      <div>second teleport content</div>
    </teleport>
  </div>
</template>

<script>
import { defineComponent, h, inject, provide, ref, onMounted } from 'vue'
const TELEPORT_KEY = 'teleport-test'
const Child = defineComponent({
  mounted() {
    console.log('child mounted:', this.$parent)
  },
  setup() {
    const parentData = inject(TELEPORT_KEY)
    console.log('parentData:', parentData)

    return () => {
      return h('div', {}, 'child content')
    }
  }
})
export default {
  components: {
    Child
  },
  setup() {
    const nameRef = ref('parent name')
    const isDisabled = ref(false)
    provide(TELEPORT_KEY, {
      data: { parent: 'Teleport' }
    })
    return {
      nameRef,
      isDisabled
    }
  }
}
</script>

<style>
.color-red {
  color: red;
}
</style>