<template>
  <div>
    <p>reactive utils</p>
    <div>foo:{{foo}}</div>
    <div>props name: {{info.name}}</div>
    <div class="reactiveDemo">
      <div>
        <input type="button" value="修改" @click="changReactiveData" />
        <p>reactiveData group name: {{reactiveData.group}}</p>
        <p>shallowReactiveData group name: {{shallowReactiveData.group}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  toRef,
  toRefs,
  reactive,
  shallowReactive,
  isReactive,
  ref,
  shallowRef,
  customRef,
  readonly,
  shallowReadonly
} from 'vue'
export default {
  props: {
    info: { type: Object, default: () => null }
  },
  setup(props) {
    // readonly与shallowReadonly的区别
    function readonlyTest() {
      const readonlyData = shallowReadonly({ age: 12, other: { age: 11 } })
      readonlyData.other.age = 13
      console.log('readonlyData', readonlyData) //{age:12, other: {age: 11}}

      const shallowReadonlyData = shallowReadonly({ age: 12, other: { age: 11 } })
      shallowReadonlyData.other.age = 13
      console.log('shallowReadonlyData', shallowReadonlyData) //{age:12, other: {age: 13}}
    }
    readonlyTest()

    function refTest() {
      const refData = ref({ name: 'llz' })
      refData.value = { name: 'llz2' } // set时 调用了reactive()
      console.log('ref data is reactive', isReactive(refData.value)) // true

      const shallowRefData = shallowRef({ name: 'llz' })
      shallowRefData.value = { name: 'llz3' } // 直接赋值
      console.log('shallowRef data is reactive: ', isReactive(shallowRefData.value)) // false
    }
    refTest()

    /**
     * 测试结果，shallowReactiveData.gropu.name也是响应式的
     * 待进一步修正
     */
    function reactiveTest() {
      const reactiveData = reactive({ name: 'llz', group: { name: 'fe' } })
      const shallowReactiveData = shallowReactive({ name: 'llz', group: { name: 'fe' } })

      console.log('xxxx', isReactive(shallowReactiveData.name))
      function modify() {
        reactiveData.group.name = 'fe2'
        shallowReactiveData.group.name = 'feshallow'
      }
      return { reactiveData, shallowReactiveData, modify }
    }
    const { reactiveData, shallowReactiveData, modify: changReactiveData } = reactiveTest()

    function useFeatureX() {
      const state = reactive({
        foo: 1,
        bar: 2,
        nest: {
          name: 'llz'
        }
      })
      return toRefs(state) 
      // return state // 如果不加toRefs，直接返回，解构获取的属性就不再具有响应式特性. 修改foo的值，ui不会有变化
    }
    const { foo } = useFeatureX()
    setInterval(() => {
      // foo= foo + 1
      foo.value++
    })

    return {
      foo,
      reactiveData,
      shallowReactiveData,
      changReactiveData
    }
  }
}
</script>

<style>
.reactiveDemo {
  border: 1px dashed purple;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 150px;
}
</style>
