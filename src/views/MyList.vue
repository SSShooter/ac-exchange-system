<template>
  <van-list class="list" v-model="loading" :finished="finished" finished-text="到底啦" @load="onLoad">
    <div
      v-for="item in list"
      class="list-item"
      :key="item.id"
      @click="$router.push({name:'TransactionDetail',query:{id:item.id}})"
    >
      <div class="info">
        <div>
          {{item.createUserName}}
          <span class="update-date">{{item.updateDate}}</span>
        </div>
        <div>
          {{item.transactionType==='BUY'? '买入' :'卖出'}}价格：
          <span class="price">{{item.amount}}</span>
        </div>
        <div>
          入场费：
          <span class="cost">{{item.tradingItems || '免费'}}</span>
        </div>
        <div class="van-ellipsis description">{{item.description}}</div>
      </div>
    </div>
  </van-list>
</template>

<script>
import { getMyList } from '../api'

export default {
  data() {
    return {
      currentPage: 1,
      finished: false,
      loading: false,
      list: []
    }
  },
  methods: {
    async onLoad() {
      try {
        const res = await getMyList({
          currentPage: this.currentPage
        })
        console.log(res.totalPages, res.currentPage)
        if (res.totalPages <= res.currentPage) {
          this.finished = true
        }
        this.currentPage += 1
        this.loading = false
        console.log(res)
        this.list = [...this.list, ...res.data]
      } catch (err) {
        console.log('err', err)
        this.finished = true
      }
    }
  },
}
</script>

<style>
</style>
