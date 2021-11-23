<template>
<div class="container">
  <h1>祖先组件</h1>
  <dad></dad>
</div>
</template>
<script>
import Dad from './Dad.vue'
export default {
  name: 'Ancestors',
  components: {
    Dad
  },
  provide: {
    name: '小明'
  },
  mounted() {
    console.log('祖先组件')
  }
}
</script>