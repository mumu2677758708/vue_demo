<template>
  <div class="container">
    <h2>儿子组件</h2>
    <Grandson></Grandson>
  </div>
</template>
<script>
import Grandson from './Grandson.vue'
export default {
  name: 'Son',
  inject: ['name'],
  components: {
    Grandson
  },
  mounted() {
    console.log(this.name, '儿子组件中获取的')
  }
}
</script>