<template>
  <div>
    <div class="title">交易详情</div>
    <van-cell-group>
      <van-cell title="创建日期" :value="this.info.createDate" />
      <van-cell title="刷新日期" :value="this.info.updateDate" />
      <van-cell title="创建人" :value="this.info.createUserName" />
      <van-cell title="类型" :value="this.info.transactionType==='BUY'?'买入':'卖出'" />
      <van-cell :title="this.info.transactionType==='BUY'?'买入价格':'卖出价格'" :value="this.info.amount" />
      <van-cell title="入场费" :value="this.info.tradingItems" />
      <van-cell
        title="对方ID"
        :value="this.info.transactionUserId || '未进行交易'"
        is-link
        @click="$refs.idcard.show = true"
      />
      <van-cell title="登岛密码" :value="this.info.password" />
      <!-- <van-cell title="Cell title" value="Content" label="Description" /> -->
    </van-cell-group>
    <div style="margin:15px;">
      <van-button round block type="info" native-type="submit" @click="nextTransaction">下一次交易</van-button>
    </div>
    <IDCard ref="idcard" :id="info.transactionUserId" />
  </div>
</template>

<script>
import { getTurnipDetail, getCurrentTransaction, nextTransaction } from '../api'
import IDCard from '../components/IDCard'
export default {
  data() {
    return {
      info: {
        createDate: '',
        updateDate: '',
        createUserName: '',
        transactionType: '',
        tradingItems: '',
        amount: '',
        inTransaction: '',
        transactionUserId: '',
        password: ''
      }
    }
  },
  components: { IDCard },
  async mounted() {
    if (this.$route.query.id) {
      this.getTurnipDetail()
    } else {
      const res = await getCurrentTransaction()
      this.info = res.data
      console.log(res)
    }
  },
  methods: {
    async getTurnipDetail() {
      const res = await getTurnipDetail(this.$route.query.id)
      this.info = res.data
      console.log(res)
    },
    async nextTransaction() {
      await nextTransaction(this.info.id)
      this.$notify({ type: 'success', message: '下一笔交易' })
    }
  }
}
</script>

<style>
</style>
