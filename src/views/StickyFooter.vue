<template>
  <!-- 实现效果：
      内容不足一屏的时候，footer在页面底部
      内容超过一屏的时候，footer正常按照文档流的顺序在页面底部，滚动条滚动查看
   -->
    <div class="wrapper">
      <div class="main">
        <div class="zw">占位div1，高度100px</div>
        <div class="zw">占位div2，高度100px</div>
        <div class="zw">占位div3，高度100px</div>
      <!-- <div class="zw">占位div4，高度100px</div>
      <div class="zw">占位div5，高度100px</div>
      <div class="zw">占位div6，高度100px</div> -->
      </div>
      <div class="footer">footer</div>

  </div>

</template>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
html,body,#app, .wrapper {
  background: #ffffff;
  height: 100%;
}
.main {
  min-height: calc(100%-150px);
  padding: 8px;
}
.zw {
  height: 100px;
  line-height: 100px;
  text-align: center;
  border: 1px solid #cccccc;
}
.footer {
  height: 150px;
  background: #f23030;
  text-align: center;
  line-height: 150px;
}
</style>