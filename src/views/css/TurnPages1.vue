<template>
  <div class="vue-countdown-component">
    <template v-for="(item, index) in timeArr">
      <div class="time-box" :key="index">
        <div class="base">
          {{ item }}
          <div class="base-b">{{timeArrayT[index]}}</div>
        </div>
        <!-- 翻页动画 -->
        <div :class="['face', {'animate': animateArr[index]}]" @animationend="onAnimateEnd(index)">{{timeArrayT[index]}}</div>
        <div :class="['back', {'animate': animateArr[index] }]">{{item}}</div>
      </div>
      <div
        class="time-unit"
        :key="`unit-${index}`"
        v-if="isTimeUnitShow(index)"
      >
        {{ setTimeUnit(index) }}
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "TurnPages1",
  data() {
    return {
      timeArr: new Array(4).fill("00"),
      timeArrayT: new Array(4).fill('00'),
      animateArr: new Array(4).fill(false),
      timeUnit: "天::",
      theme: 1, // 每个数字单独分开还是不分开
      endTime: 1656960815308 // 结束时间
    };
  },
  mounted() {
    this.start();
  },
  computed: {
    step() {
      return this.theme === 1 ? 1 : 2;
    },
    isTimeUnitShow() {
      return index => {
        if (this.timeArr.length - 1 === index && !this.timeUnit[index]) {
          return false;
        }
        return true;
      };
    }
  },
  watch: {
    timeArr(newArr, oldArr) {
      let diff = []
      newArr.forEach((value,index) => {
        if(value !== oldArr[index]) {
          diff.push({value, index})
          this.$set(this.animateArr, index, true)
        }
      })
      setTimeout(() => {
        diff.forEach(item => {
          this.$set(this.timeArrayT, item.index, item.value)
        })
      }, 350);
    }
  },
  methods: {
    onAnimateEnd(index) {
      this.$set(this.animateArr, index, false)
      // console.log(index)
    },
    start(step = 1000) {
      clearTimeout(timer);
      const timer = setTimeout(() => {
        let t = this.endTime - new Date().getTime();
        t = t < 0 ? 0 : t;
        let days = 0,
          hours = 0,
          mins = 0,
          seconds = 0;
        days = Math.floor(t / (24 * 60 * 60 * 1000));
        hours = Math.floor((t - days * 86400000) / (60 * 60 * 1000));
        mins = Math.floor((t - days * 86400000 - hours * 3600000) / 60000);
        seconds = Math.floor(
          (t - days * 86400000 - hours * 3600000 - mins * 60000) / 1000
        );
        // 往数组中添加“天、时、分、秒”
        this.timeArr = [];
        this.timeArr.push(String(days).padStart(2, "0"));
        this.timeArr.push(String(hours).padStart(2, "0"));
        this.timeArr.push(String(mins).padStart(2, "0"));
        this.timeArr.push(String(seconds).padStart(2, "0"));
        if (t > 0) {
          this.start();
        }
      }, step);
    },
    setTimeUnit(index) {
      switch (index) {
        case this.timeArr.length - 1:
          return this.timeUnit[3] || ""; // 秒
        case this.timeArr.length - this.step - 1:
          return this.timeUnit[2] || ""; // 分
        case this.timeArr.length - this.step * 2 - 1:
          return this.timeUnit[1] || ""; // 时
        default:
          return this.timeUnit[0] || ""; // 天
      }
    }
  }
};
</script>
<style lang="less">
// 涉及到的css知识点：
// 1、perspective：加在父元素上；值越大，越小。效果是使子元素有透视效果
// 2、backface-visibility
// 3、clip-path: polygon(）
.vue-countdown-component {
  width: 80%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem auto;
  .time-unit {
    padding: 0 0.4rem;
    font-size: 1.5rem;
    white-space: nowrap;
  }
  .time-box {
    height: 3.3rem;
    min-width: 3.3rem;
    border-radius: 0.3rem;
    background-color: #717ea5;
    line-height: 3.3rem;
    text-align: center;
    font-size: 1.6rem;
    position: relative;
    perspective: 3.5rem;
    &::before{
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      width: 100%;
      height: 0.048rem;
      background-color: #333;
      opacity: 0.3;
      z-index: 99;
    }
    & > div {
      overflow: hidden;
      animation-timing-function: linear;
      animation-duration: 400ms;
      transform: rotateX(-0.01deg);
      border-radius: 0.1rem;
    }
    .face{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: red;
      backface-visibility: visible;
      // clip-path: polygon(0 0,100% 0, 100% 50%, 0 50%);
      z-index: 2;
      &.animate {
        animation-name: animate-filp-face;
      }
    }
    .back{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: green;
      transform: rotateX(-180deg);
      backface-visibility: visible;
      // clip-path: polygon(0 50%,100% 50%,100% 100%, 0 100%);
      &.animate {
        animation-name: animate-filp-back;
      }
    }
    @keyframes animate-filp-face {
      0% {
        transform: rotateX(-0.01deg);
        // opacity: 1;
      }
      50% {
        // opacity: 1;
      }
      51% {
        opacity: 0;
      }
      100% {
        transform: rotateX(-180deg);
        opacity: 0;
      }
    }
    @keyframes animate-filp-back {
      0% {
        transform: rotateX(180deg);
      }
      100% {
        transform: rotateX(-0.01deg);
      }
    }
  }
}
</style>
