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
      width: 999vh;
      height: 999vh;
      background-color: #fff;
      position: absolute;
      box-shadow: -2em 2em #fff;
    }
  }
}
// .item {
//   height: 6.7rem;
//   overflow: hidden;
//   .title {
//     font-weight: bold;
//     font-size: 1.5rem;
//     // text-align: justify;
//     display: -webkit-box;
//     -webkit-box-orient: vertical;
//     overflow: hidden;
//     -webkit-line-clamp: 2;
//   }
//   .desc {
//     color: #666;
//     font-size: 1.25rem;
//     margin-top: 1rem;
//     // text-align: justify;
//     &::before{
//       content: '...';
//       float: right;
//       height: 100%;
//       display: flex;
//       align-items: flex-end;
//       background-color: pink;
//       shape-outside: inset(calc(100%-1.5em) 0 calc(100%-1.5em));
//     }
//   }
// }
</style>