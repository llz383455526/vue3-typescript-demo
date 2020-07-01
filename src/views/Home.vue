<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Calculator :salt="10" />
  </div>
</template>

<script>
// @ is an alias to /src
import Calculator from "@/components/Calculator";

export default {
  name: "Home",
  components: {
    Calculator
  }
};
</script>
