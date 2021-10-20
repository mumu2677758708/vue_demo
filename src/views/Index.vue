<template>
  <div class="index">index</div>
</template>
<script>
import { getRiseRange } from '../service/list'
export default {
  name: 'Index',
  data() {
    return {

    }
  },
  mounted() {
    getRiseRange({isRefreshByTime: true})
  }
}
</script>