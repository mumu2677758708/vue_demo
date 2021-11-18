<template>
  <div class="book preserve-3d">
    <div
        :class="['now-page','point']"
        v-for="(item,index) in pages" :key="index"
        @click.native="handleClick($event)">
      <div :class="['book-page',{'first-page': index === 3}]">
        <p>{{item}}</p>
      </div>
    </div>
    <!-- <div class="now-page point">
      <div class="book-page">
        <p>第二页</p>
      </div>
    </div>
    <div class="now-page point">
      <div class="book-page">
        <p>第一页</p>
      </div>
    </div> -->
    <!-- 封面 -->
    <div class="now-page point">
      <div class="book-page first-page">
        <p>封面</p>
      </div>
    </div>
  </div>
</template>
<script>
// 实现效果：翻页
export default {
  name: 'TurnPages',
  data () {
    return {
      pages: ['第三页', '第二页', '第一页', '封面'],
      currentIndex: null
    }
  },
  methods: {
    handleClick(event) {
      console.log(11)
      console.log(event)
      console.log('event')
    }
  }
}
</script>
<style lang="less">
.book{
  width: 40%;
  height: 10rem;
  background: #fff;
  position: absolute;
  top: 4rem;
  right: 10%;
  transform: rotateX(30deg);
}
.now-page{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;
}
.book-page{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  background-color: #fff;
  border: 1px solid #eee;
  text-align: center;
  &.first-page{
    background-color: red;
  }
  p{
    font-size: 1.2rem;
    margin-top: 2rem;
    backface-visibility: hidden;
    font-weight: bold;
  }
}
.animation-start{
  animation: flipBook1 3s forwards;
}
.animation-end {
  animation: flipBook2 3s forwards;
}
@keyframes flipBook1{
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(-160deg);
  }
}
@keyframes flipBook2{
  0% {
    transform: rotateY(-160deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
</style>