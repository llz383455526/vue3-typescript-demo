import { ref, computed} from 'vue'
export function calculatLogic(salt){
  const num1 = ref(0)
  const num2 = ref(1)
  const result = computed(() => num1.value + num2.value + salt)
  return {num1, num2, result}
}