<template>
  <div class="brother2">兄弟组件2</div>
</template>
<script>
import bus from '../utils/bus'
export default {
  name: 'Bother2',
  mounted() {
    bus.$on('text',e => {
      console.log(e)
    })
  }
}
</script>