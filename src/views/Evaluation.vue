<template>
  <div class="evaluation-new">
    <div class="evaluation-new-title">
      <div class="evaluation-new-circles">
        <span class="evaluation-layer-01 cicle-01" style="display:;"></span>
        <span class="evaluation-layer-02" style="display:;"></span>
        <span class="evaluation-layer-03" style="display:;"></span>
        <span class="evaluation-layer-04" style="display:;"></span>
        <span class="evaluation-layer-05" style="display:;"></span>
        <strong class="evaluation-layer-number">{{percent}}<i>%</i></strong>
      </div>
      <div class="evaluation-new-title-text">
        <h3 class="evaluation-new-title-name">请确认{{list.length}}道题的信息</h3>
        <p class="evaluation-new-title-sub">（点击即可修改，提交后完成风测）</p>
      </div>

    </div>
    <div class="evaluation-new-title-placeholder" style="width:100%;height:16rem;"></div>
    <transition-group name="slide-question" tag="div" class="evaluation-new-questions">
      <dl :class="['evaluation-new-unit', {'disable': item.titleId!=='area' && item.itemList.length < 2}]"
        :id="'ques-'+item.titleId" v-for="(item, itemIdx) in list" :key="'evaluation-'+itemIdx"
        @click="onShowQuestion(itemIdx, item.itemList.length < 2)">
        <dt class="evaluation-new-ques">{{itemIdx + 1}}.{{item.titleName}}</dt>
        <dd class="evaluation-new-answ">{{formatAnswer(item)}}</dd>
      </dl>
    </transition-group>
  </div>
</template>
<script>
import { questionsNew } from '../assets/mock/evaluation'
import AM from '../utils/modules/singleton.am'
function CubicEaseOut (t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b
}
let running
function scrollNext (id) {
  AM.cancelAF.call(window, running)
  var nextDom = document.querySelector('#' + id)
  var t = 0
  var b = document.documentElement.scrollTop || document.body.scrollTop
  var c = nextDom.offsetTop - b
  var d = 120
  running = function () {
    if( t <= d ) {
      var v = CubicEaseOut(t, b, c, d)
      document.documentElement.scrollTop = v
      document.body.scrollTop = v
      AM.requestAF.call(window, running)
      t++
    } else {
      AM.cancelAF.call(window, running)
      document.documentElement.scrollTop = nextDom.offsetTop
      document.body.scrollTop = nextDom.offsetTop
    }
  }
  if( c>5 ) {
    running()
  }
}
function initEvaluationPage(vm) {
  const defaultResult = {
    '00068': '001',
    '00069': '001',
    '00070': '001',
    '00071': '001',
    '00072': '001',
    '00073': '001',
    '00074': '001',
    '00075': '001',
    '00076': '001',
    '00077': '001',
    '00000': 'B',
    crsType: '0',
    invaliDate: '99991231',
    workCode: '1',
    educational: '3',
    area: ['北京市', '市辖区', '东城区'],
    badIntegrity: '0',
    custFundTimeLimit: 'D',
    investmentVarieties: 'D',
    preYieldFlag: 'A',
  }
  var i = 0
  var now = new Date().getTime()
  function slider() {
    var _now = new Date().getTime()
    if (i >= questionsNew.length) {
      AM.cancelAF.call(window, slider)
      return
    }
    if (_now - now >= 100) {
      if (i < questionsNew.length) {
        const nextId = questionsNew[i].titleId
        const nextQuestion = Object.assign(
          {
            default: defaultResult[nextId],
          },
          questionsNew[i]
        )
        vm.list.push(nextQuestion)
        if(i-5>-1 && (i-5) % 7 === 0) {
          scrollNext('ques-' + vm.list[i-5].titleId)
        }
        i++
      }
      now = _now
    }
    if(vm.percent < 100) {
      ++vm.percent
    } else {
      vm.percent = 100
    }
    AM.requestAF.call(window, slider)
  }
  slider()
}
export default {
  name: 'Evaluation',
  data() {
    return {
      percent: 0,
      list: [],
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      initEvaluationPage(vm)
    })
  },
  methods: {
    // 点击问题
    onShowQuestion(idx, disable) {
      console.log(idx, disable)
      // 仅有一项选择时，禁用选择
      if (disable) return
    },
    formatAnswer(item) {
      if(item.default && typeof item.default === 'string') {
        const answer = item.itemList.find( answ => answ.value === item.default)
        return answer.text
      }
    }
  },
}
</script>
<style lang="less" scoped>
@import '../styles/evaluation.less';
</style>