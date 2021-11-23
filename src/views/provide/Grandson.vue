<template>
  <div class="container">
    <h3>孙子组件</h3>
  </div>
</template>
<script>
export default {
  name: 'Grandson',
  inject: ['name'],
  mounted() {
    console.log(this.name, '孙子组件中获取')
  }
}
</script>