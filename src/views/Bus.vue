<template>
  <div class="container">
    <h3 class="title">父组件</h3>
    <div class="desc">下面是兄弟组件</div>
    <brother1></brother1>
    <brother2></brother2>
  </div>
</template>
<script>
import brother1 from '../components/Brother1.vue'
import brother2 from '../components/Brother2.vue'
export default {
  name: 'Parent',
  components: {
    brother1,
    brother2
  }
}
</script>