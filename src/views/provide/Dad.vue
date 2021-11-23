<template>
  <div class="container">
    <h1>爸爸组件</h1>
    <son></son>
  </div>
</template>
<script>
import Son from './Son'
export default {
  name: "Dad",
  inject: ["name"],
  components: {
    Son
  },
  mounted() {
    console.log(this.name, '爸爸组件中获取的');
  }
};
</script>
