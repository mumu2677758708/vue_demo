<template>
  <div class="container">
    <!-- <div>该商品的总价为{{price | filterThousand}}</div> -->
    <div class="box">
      <div class="small">小盒子</div>
    </div>
    <div class="text">这位朋友的名字是：{{person.name}}</div>
    <button @click="handleClick">点我换名</button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Demo',
  data() {
    return {
      price: '13222434.111',
      person: {}
    }
  },
  computed: {
    ...mapState(['category'])
  },
  mounted() {
    console.log(this.category, 'category')
  },
  methods: {
    handleClick() {
      this.$set(this.person, 'name', '小敏')
      console.log(this.person)
    }
  }
}
</script>
<style lang="less">
.box{
  width: 3rem;
  height: 6rem;
  background-color: skyblue;
  // transform: rotateY(-60deg);
  margin: 10rem auto;
  position: relative;
  perspective: 7rem;
}
.small{
  width: 3rem;
  height: 6rem;
  background-color: green;
  position: absolute;
  top: 0;
  left: 0;
  animation: rotate 1s infinite;
  backface-visibility: visible;
}
@keyframes rotate {
  0%{
    transform: rotateX(-0.01deg)
  }
  50% {
    transform: rotateX(90deg)
  }
  100% {
    transform: rotateX(180deg);
  }
}
</style>