<template>
  <div>
    <h1>reactive demo</h1>
    <div>
      <div>test reactive data reactivity: {{varReactive.detail.name}}</div>
      <div>test shallowReactive data reactivity: {{varShallowReactive.detail.name}}</div>
    </div>
  </div>
</template>

<script>
import {
  reactive,
  shallowReactive,
  isReactive,
  isReadonly,
  isProxy,
  toRaw,
  ref,
  readonly,
  shallowReadonly,
  markRaw
} from 'vue'

function clone(obj) {
  return JSON.parse(JSON.stringify(obj))
}
export default {
  name: 'Reactie',
  setup() {
    const plainObj = {
      name: 'test reactive',
      time: '2020-07-28',
      detail: { name: 'detail name', obj: { value: 'obj' } }
    }
    /**
     * 1. reactive(plainObj) 接受一个普通对象作为输入，输出一个该对象的代理对象
     */
    const plainObj1 = clone(plainObj)
    window.plainObj1 = plainObj1
    const varReactive = reactive(plainObj1)
    console.log('reactive: show reactive proxy-->', isReactive(varReactive))
    setTimeout(() => {
      varReactive.detail.name = 'modified name'
    }, 2000)
    /**
     * 2. shallowReactive() 基本功能同reactive()。 区别是只对第一层次的属性代理，递归属性和原型链上的属性都不代理
     */
    const plainObj2 = clone(plainObj)
    window.plainObj2 = plainObj2
    const varShallowReactive = shallowReactive(plainObj2) // 注意：如果此处还是对plainObj1进行浅层次代理，返回的代理对象的嵌套属性依旧是响应式的。因为原始对象上已经被打了标记
    window.varShallowReactive = varShallowReactive
    console.log(
      'shallowReactive() nest prop is not reactive:',
      isReactive(varShallowReactive),
      isReactive(varShallowReactive.detail)
    )
    setTimeout(() => {
      varShallowReactive.detail.name = 'modified name'
    }, 2000)

    /**
     * markRaw, toRaw
     */
    const rawObj = clone(plainObj)

    console.log('reactive: markRaw-->', markRaw(rawObj), reactive(rawObj)) // 添加__v_skip属性
    console.log('reactive: toRaw-->', rawObj, toRaw(reactive(rawObj)))

    /**
     * readOnly, shallowReadOnly
     */
    const plainObj3 = clone(plainObj)
    const obj3ReadOnly = readonly(plainObj3)
    obj3ReadOnly.name = 'test readonly'
    obj3ReadOnly.detail.name = '123'
    console.log('reactive: readonly', obj3ReadOnly)

    const plainObj4 = clone(plainObj)
    const obj4ShallowReadonly = shallowReadonly(plainObj4)
    obj4ShallowReadonly.name = '123'
    obj4ShallowReadonly.detail.name = '123'
    console.log('reactive: shallowReadonly', obj4ShallowReadonly)
    return {
      varReactive,
      varShallowReactive
    }
  }
}
</script>

<style>
</style>