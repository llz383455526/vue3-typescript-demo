<template>
  <div>
    <h1>ref demo</h1>
    <div ref="refDiv"></div>
    <div>测试ref的响应特性: {{refObj}}</div>
    <div>测试shallowRef数据的响应特性：{{shallowRefObj}}</div>
    <!--2.3 模板里使用ref对象是不需要使用refObj.value的方式，会自动unRef-->
  </div>
</template>

<script lang="ts">
import {
  ref,
  onMounted,
  unref,
  toRefs,
  isRef,
  customRef,
  toRef,
  reactive,
  isReactive,
  shallowRef
} from 'vue'
export default {
  name: 'RefDemo',
  props: {
    type: { type: String, default: 'add' }
  },
  setup(props) {
    /**
     * 1. 使用ref()来获取dom对象，注意1.1，1.2，1.3
     *
     */
    const refDiv = ref(null) // 1.1 这里的变量名必须与模板里的ref定义一致
    console.log('refDiv:', refDiv.value)
    onMounted(() => {
      console.log('refDiv in onMounted:', refDiv.value) // 1.2 在onMounted之后才能获取到dom
    })

    /**
     * 2. 使用ref(value) 为值value创建Ref对象
     */
    const refVar = ref<string | number>('llz') //2.1 支持泛型类型定义
    console.log('refVar', refVar)
    setTimeout(() => {
      refVar.value = 12 // 2.2 通过修改refObj.value的值来改变这个响应式对象
    }, 2000)

    const refObj = ref({ name: 'llz' })
    console.log('为object类型数据创建Ref:', refObj, isReactive(refObj.value))
    setTimeout(() => {
      refObj.value.name = 'cxt' // 2.2 通过修改refObj.value的值来改变这个响应式对象
    }, 2000)

    /**
     * 3. 使用toRef(obj, key) 为一个对象obj(普通对象或者reactive对象)的key创建一个ref，这个ref对象可以被传递并保持响应特性。
     */
    const reactiveObj = reactive({ age: 18 })
    const toRefVar = toRef(reactiveObj, 'age')
    console.log('toRefVar:', toRefVar)
    toRefVar.value = 13

    /**
     * 4. toRefs(reactiveObj) 输入一个响应式对象reactiveObj，返回一个普通对象，但普通对象的属性都是Ref对象
     * ，以保证在通过解构语法获取对象属性时，能保持属性的响应特性
     */
    const { type } = toRefs(props) // 如果不这么写，现在vue也会给出错误警告

    /**
     * 5. unRef() 取出ref对象里的值。如果是非ref对象就直接返回
     */
    console.log('对ref对象使用unRef()', unref(refObj))
    console.log('对非ref对象使用unRef()', unref({ name: 'llz' }))

    /**
     * 6. isRef() 用来判断一个对象是否是Ref对象
     */
    console.log('refObj是否是Ref对象：', isRef(refObj))

    /**
     * 7. customRef() 用来创建自定义Ref，让开发者有更大的权限来决定如何来修改和获取Ref的值，比如限制频繁修改他的值，见官方示例：
     * https://vue-composition-api-rfc.netlify.app/zh/api.html#customref
     */
    const myCustomRef = customRef((track, trigger) => {
      let value = 'initial'
      return {
        get() {
          return value
        },
        set(newValue: string) {
          value = `${newValue}==`
        }
      }
    })
    console.log('myCustomRef:', myCustomRef)

    /**
     * 8. shallowRef() 功能基本同ref()一样。唯一的不同是当传入的参数是一个对象时, 不会将这个对象转换为reactive对象，这也意味着它不具备响应式特性。
     */
    const shallowRefObj = shallowRef({ name: 'llz' })
    console.log('为object类型数据创建shallowRef:', shallowRefObj)
    setTimeout(() => {
      shallowRefObj.value.name = 'cxt' // 通过修改refObj.value的值来改变这个响应式对象，不会刷新页面
    }, 2000)

    return {
      refDiv, // 1.3 注意这里要返回，否则refDiv.value会一直是undefine
      refObj,
      shallowRefObj
    }
  }
}
</script>

<style>
</style>