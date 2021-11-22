<template>
  <div class="container"></div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Vuex',
  data() {
    return{}
  },
  computed: {
    ...mapState(['category'])
  },
  async created() {
    await this.asyncCategory({targetGroupId: 813})
    console.log(this.category, 1111)
  },
  methods: {
    ...mapActions(['asyncCategory']) 
  }
}
</script>