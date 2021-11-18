<template>
  <div class="container">
    <div ref="content">
      <span :ref="'text-'+index" v-for="(item,index) in arr" :class="['hidden',{'display': currentIndex>index}]" :key="index">{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Typing",
  data() {
    return {
      text: "也许每一个男子全都有过这样两个女人，至少两个。娶了红玫瑰，久而久之，红的变了墙上的一抹蚊子血，白的还是“床前明月光”;娶了白月光，白的便是衣服上的一粒饭粒子，红的却是心口上的一颗朱砂痣。",
      arr: [],
      currentIndex: 0
    };
  },
  created() {
    this.arr = this.text.split('');
    this.$nextTick(() => {
      this.arr.map((item, index) => {
        setTimeout(() => {
          this.currentIndex++
        }, index * 150);
      });
    });
    
  }
};
</script>
<style lang="less">
.content{
  font-size: 14px;
  line-height: 20px;
}
.hidden{
  display: none;
  // animation: all 1s 1;
}
.display{
  display: inline-block;
  animation: text 1s 1;
}
@keyframes text {
  0%{
    color: transparent;
  }
  100% {
    color: #000;
  }
}
</style>
