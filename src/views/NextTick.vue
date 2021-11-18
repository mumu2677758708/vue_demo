<template>
  <div class="container">
    <!-- <input type="text" :value="amount" @input="onInput"> -->
    <div class="msg" ref="msg">{{msg}}</div>
    <div class="msg1">{{msg1}}</div>
    <div class="msg2">{{msg2}}</div>
    <button @click="handleClick">点我</button>
  </div>
</template>
<script>
// this.$nextTick()将回调延迟到下次DOM更新循环之后执行
export default {
  name: 'NextTick',
  data() {
    return {
      amount: 0,
      msg: 'hello',
      msg1: '',
      msg2: ''
    }
  },
  methods: {
    onInput($event) {
      console.log($event.target.value)
    },
    handleClick() {
      this.msg = 'hello world'
      this.msg1 = this.$refs.msg.innerText
      this.$nextTick( () => {
        this.msg2 = this.$refs.msg.innerText
      })
    }
  }
}
</script>