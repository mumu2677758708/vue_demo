<template>
  <div class="transact_container">
    <div class="transact_header_success" v-if="status === 1">
      <div class="transact_process_step icon_first">订单处理完成</div>
      <div class="transact_process_line"></div>
      <div class="transact_process_step icon_second">去汇款</div>
    </div>
    <div class="transact_header_fail" v-if="status === 2">
      <img src="../assets/images/icon/icon-transact-03.png" alt="" />
      <div class="transact_process_step icon_fail">订单处理失败</div>
    </div>
    <div class="transact_detail">
      <div class="transact_info">
        请于下单所在交易日下午
        <strong>15:00前完成汇款</strong
        >，相关收付款信息如下，建议<strong>截屏保存</strong>，或后续在交易记录<b>《汇款交易使用说明》</b>中查看
      </div>
      <div class="transact_title">您的付款信息</div>
      <table class="transact-table">
        <tbody>
          <tr>
            <td class="transact-table-c1">银行账号</td>
            <td class="transact-table-c2"><span id="PayBankAcco">111</span></td>
            <td class="transact-table-c3">
              <button v-copy="{ complete: onCopyComplete, id: 'PayBankAcco' }">
                复制
              </button>
            </td>
          </tr>
          <tr>
            <td class="transact-table-c1">付款金额</td>
            <td class="transact-table-c2"><span id="PaySum">100</span>元</td>
            <td class="transact-table-c3">
              <button v-copy="{ complete: onCopyComplete, id: 'PaySum' }">
                复制
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="transact_title">监管户收款信息</div>
      <table class="transact-table">
        <tbody>
          <tr>
            <td class="transact-table-c1">银行户名</td>
            <td class="transact-table-c2">
              <span id="ReciveName">宜信普泽（北京）基金销售有限公司</span>
            </td>
            <td class="transact-table-c3">
              <button v-copy="{ complete: onCopyComplete, id: 'ReciveName' }">
                复制
              </button>
            </td>
          </tr>
          <tr>
            <td class="transact-table-c1">银行账号</td>
            <td class="transact-table-c2">
              <span id="ReciveBankAcco">91160157870000037</span>
            </td>
            <td class="transact-table-c3">
              <button
                v-copy="{ complete: onCopyComplete, id: 'ReciveBankAcco' }"
              >
                复制
              </button>
            </td>
          </tr>
          <tr>
            <td class="transact-table-c1">开户行</td>
            <td class="transact-table-c2">
              <span id="ReciveBankName">浦发北京亚运村支行</span>
            </td>
            <td class="transact-table-c3">
              <button
                v-copy="{ complete: onCopyComplete, id: 'ReciveBankName' }"
              >
                复制
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { copy } from '../utils/directive'
export default {
  name: "TransactBig",
  data() {
    return {
      status: 1 * this.$route.query.status
    };
  },
  methods: {
    onCopyComplete (msg) {
      this.$toast(msg);

    }
  },
  directives: {
    copy
  }
};
</script>
<style lang="less" scoped>
.transact {
  &_container {
  }
  &_header {
    &_success {
      padding: 2.8rem 0 2.2rem;
      display: flex;
      background: #fff;
      display: flex;
      justify-content: center;
      position: relative;
    }
    &_fail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 4.8rem 1.28rem 0;
      img {
        width: 3.4rem;
      }
    }
  }
  &_process {
    &_step {
      padding-top: 4.8rem;
      flex: 1;
      text-align: center;
      color: #444;
      font-size: 1.28rem;
      font-weight: bold;
      &.icon_first {
        background: url("../assets/images/icon/icon-transact-01.png") center top
          no-repeat;
        background-size: 3.4rem auto;
      }
      &.icon_second {
        background: url("../assets/images/icon/icon-transact-02.png") center top
          no-repeat;
        background-size: 3.4rem auto;
        color: rgb(153, 153, 153);
      }
      &.icon_fail {
        padding-top: 0;
        margin: 10px 0 0;
      }
    }
    &_line {
      width: 6.8rem;
      height: 2px;
      background: #c1c1c1;
      position: absolute;
      top: 4.5rem;
    }
  }
  &_detail {
    padding: 1.7rem 1.28rem;
    background: #fff;
    margin-top: 1rem;
  }
  &_info {
    margin: 0 0.24rem;
    padding: 0.85rem 0.68rem;
    line-height: 1.67rem;
    background: #fffafa;
    position: relative;
    color: #444;
    font-size: 1.12rem;
    strong {
      color: #fc6626;
      font-weight: normal;
    }
    b {
      color: #000;
      font-weight: normal;
      text-decoration: underline;
    }
    &::before {
      content: "";
      height: 2px;
      position: absolute;
      top: -2px;
      left: -0.34rem;
      right: -0.34rem;
      background: #ffcfcf;
      border-radius: 1px;
    }
  }
  &_title {
    margin-top: 0.5rem;
    padding: 1.2rem 0;
    font-size: 1.38rem;
    color: #444;
    font-weight: bold;
  }
  &-table {
    width: 100%;
    background: #fafafa;
    border-collapse: collapse !important;
    td {
      height: 3.42rem;
      line-height: 1.6rem;
      vertical-align: middle;
      border: 1px solid #ebebeb;
      font-size: 1.2rem;
    }
    &-c1 {
      width: 30%;
      padding-left: 0.8rem;
      color: #000;
      font-weight: bold;
    }
    &-c2 {
      padding-left: 0.8rem;
      color: #444;
    }
    &-c3 {
      width: 16%;
      text-align: center;
      button {
        color: #007aff;
        background: transparent;
        border: 0;
        outline: none;
      }
    }
  }
}
</style>
