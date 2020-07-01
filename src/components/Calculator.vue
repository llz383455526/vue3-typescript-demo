<template>
  <div class="hello">
    <div class="content">
      <input type="number" v-model="num1" />
      <span>+</span>
      <input type="number" v-model="num2" />
      <span>=</span>
      <input type="number" v-model="result" />
    </div>
    <button class="btn" @click="add2">求和</button>
  </div>
</template>

<script lang="ts">
// export declare function ref<T extends object>(value: T): T extends Ref ? T : Ref<UnwrapRef<T>>;
import { ref } from "vue"


export default {
  name: "Calculator",
  props: {
    salt: {type: Number, default: 100}
  },
  setup(props) {
    const num1 = ref(0)
    const num2 = ref(1)
    const result = ref(1)

    const add2 = ()=>{result.value = num1.value + num2.value + props.salt}

    return {
      num1,
      num2,
      result,
      add2
    }
  }
};
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
