<template>
  <div>
    <van-row>
      <van-col span="7">
        <van-field v-model="beginAmount" type="number" placeholder="最低价" />
      </van-col>
      <van-col span="7">
        <van-field v-model="endAmount" type="number" placeholder="最高价" />
      </van-col>
      <van-col span="7">
        <van-field v-model="tradingItems" placeholder="入场费" />
      </van-col>
      <van-col span="3" style="line-height:40px;">
        <van-button type="primary" size="mini" @click="search">搜！</van-button>
      </van-col>
    </van-row>
    <van-list v-model="loading" :finished="finished" finished-text="到底啦" @load="onLoad">
      <div v-for="item in list" :key="item.id" @click="getTurnipDetail(item.id)">
        发布者：{{item.createUserName}}
        {{type}}价格：{{item.amount}}
        {{item.description}}
      </div>
    </van-list>
  </div>
</template>
<script>
import { getTurnipList, getTurnipDetail } from '../api'
export default {
  props: ['type'],
  data() {
    return {
      currentPage: 1,
      beginAmount: null,
      endAmount: null,
      tradingItems: null,
      finished: false,
      loading: false,
      list: []
    }
  },
  mounted() {},
  methods: {
    onSubmit(values) {},
    search() {
      this.currentPage = 1
      this.finished = false
      this.loading = true
      this.list = []
      this.onLoad()
    },
    async getTurnipDetail(id) {
      await this.$dialog.confirm({
        title: '注意',
        message:
          '一定时间内只能查看一条密码，请谨慎选择，查看密码后请不要传播密码'
      })
      const res = await getTurnipDetail(id)
      this.$dialog.alert({
        title: '起飞啦',
        message: '密码是' + res.data.password
      })
      console.log(res)
    },
    async onLoad() {
      try {
        const res = await getTurnipList({
          currentPage: this.currentPage,
          transactionType: this.type,
          beginAmount: this.beginAmount || null,
          endAmount: this.endAmount || null,
          tradingItems: this.tradingItems || null
        })
        if (res.totalPages <= res.currentPage) {
          this.finished = true
        }
        this.loading = false
        console.log(res)
        this.list = [...this.list, ...res.data]
      } catch (err) {
        console.log('err', err)
        this.finished = true
      }
    }
  }
}
</script>
