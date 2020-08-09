<template>
  <div>{{ capitalize(text) }}</div>
</template>

<script lang="ts">
function capitalize(input: string) {
  return input.toUpperCase()
}
export default {
  name: 'filter',
  setup() {
    const text = 'hello'

    return {
      text,
      capitalize
    }
  }
}
</script>

<style>
</style>