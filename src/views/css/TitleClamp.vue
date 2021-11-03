<template>
  <div class="container">
    <!-- 实现效果： -->
    <!--
      1、每条新闻的高度是固定的，标题+内容总共三行
      2、标题最多两行，超出出现省略号
      3、内容由剩余空间决定，如果标题占两行，内容超出一行省略；如果标题为一行，则内容超出两行省略
     -->
    <div class="list">
      <img src="../../assets/images/demo/new_list_demo.png" class="demo" alt="">
      <div class="item">
        <!--  -->
        <h3 class="title">28岁坐拥1880亿的章泽天：真正厉害的女人，都嫁给了自己</h3>
        <div class="desc">有人说她有能力成就今天的成就完全是靠刘强东。事实上，事实并非如此，她能够取得今天的成就，除了刘强东的关系牢固以外，也靠着她足够的聪明，足够的努力。</div>
      </div>
    </div>
    <!-- 实现效果：弹幕 -->
    <div class="chat_container">
      <ul class="chat_lines">
        <li v-for="item in 15" :key="item">第{{item}}条</li>
      </ul>
      <ul class="chat_lines">
        <li v-for="item in 15" :key="item">第{{item + 15}}条</li>
      </ul>
      <ul class="chat_lines">
        <li v-for="item in 15" :key="item">第{{item + 30}}条</li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.container {
  padding: 1rem;
  height: 100vh;
}
.demo {
  width: 100%;
  padding-bottom: 2rem;
}
.item{
  height: 4.8rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .title{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0;
    text-align: justify;
  }
  .desc{
    flex: 1;
    overflow: hidden;
    &::before{
      content: '...';
      float: right;
      background-color: #fff;
      height: 100%;
      font-weight: bold;
      display: flex;
      align-items: flex-end;
      margin-bottom: 1rem;
      shape-outside: inset(calc(100%-1.5em) 0 0);
    }
    &::after{
      content: '';
      max-width: 999vh;
      // height: 999vh;
      height: 5rem;
      background-color: #fff;
      position: absolute;
      box-shadow: -2em 2em #fff;
    }
  }
}
.chat{
  &_container{
    width: 100%;
    height: 300px;
    margin: 100px auto 0;
    border: 3px dotted gray;
    box-sizing: border-box;
    overflow: hidden;
  }
  &_lines{
    margin: 20px 0;
    display: flex;
    margin-left: 100%;
    animation: move 20s linear infinite;
    @keyframes move {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-2250px);
      }
    }
    &:first-child{
      padding-top: 50px;
    }
    li{
      display: flex;
      align-items: center;
      flex-shrink: 0;
      width: 100px;
      height: 50px;
      padding-left: 20px;
      border-radius: 3px;
      text-align: center;
      background-color: rgb(127, 81, 236);
      margin-right: 30px;
    }
  }
}
</style>