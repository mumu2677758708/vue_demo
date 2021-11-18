## 定义一个loading类，在封装axios时，控制显示或隐藏

## webpack配置
- scss编译

## less配置
- vue-cli构建的项目
   - yarn add less less-loader
   - 在.vue文件中，通过<style lang="less">即可使用
   - ps: 如果运行时出现‘this.getOptions is not a function’报错，很大程度是因为less-loader 安装的版本过高

## diary
## day1
  - 基金风险测评
    - 用动画渲染问题列表及答案
    - 用requestAnimationFrame方法渲染
## day2
  - 文本复制功能 transactBig.vue组件中
  - 用自定义指令v-copy实现

## day3
  - 在入口js文件的new Vue({})中可以写data函数、methods等，全局都可使用    可通过this.$root.**获取里面的变量或方法
  - router.js文件中meta对象中的配置项，是在路由拦截中使用的

## day4
- 用css实现文本不定行数截断
- 组件views/css/TitleClamp.vue

## day5 
- 实现弹幕效果

## day6
- nextTick用法
  - 出现原因：vue中DOM的更新是异步的，this.$nextTick()将回调延迟到下次 DOM 更新循环之后执行
  - 使用场景：
    - 1、需要在created钩子函数中进行DOM操作时，必须放到this.$nextTick()中
    - 2、在数据变化后要执行某个操作，而这个操作需要使用随数据改变而改变的DOM结构时，这个操作应该放到this.nextTick()回调函数中

## day7
- 兄弟组件传值
- 实现“文字依次渐变显示”的效果
- 实现“翻页时钟”的效果
