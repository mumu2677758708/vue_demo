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
      <div class="evaluation-new-title-text"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Evaluation',
  data() {
    return{
      percent: 0
    }
  }
}
</script>
<style lang="less" scoped>
@import '../styles/evaluation.less';
</style>