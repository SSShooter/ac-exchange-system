<template>
  <div class="list-page">
    <van-row style="border-bottom: #148270 1px solid">
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
        <div type="primary" size="mini" @click="search">搜！</div>
      </van-col>
    </van-row>
    <van-list
      class="list"
      v-model="loading"
      :finished="finished"
      finished-text="到底啦"
      @load="onLoad"
    >
      <div
        v-for="item in list"
        class="list-item"
        :key="item.id"
        @click="getTurnipDetail(item.transactionInfo.id,item.createUserInfo.userId)"
      >
        <van-image
          @click.stop="showIDCard(item.createUserInfo.userId)"
          class="avatar"
          round
          width="50px"
          height="50px"
          fit="cover"
          :src="'https://vincenttho.com:8001/' + item.createUserInfo.avatar"
        />
        <div class="info">
          <div>
            {{item.transactionInfo.createUserName}}
            <span
              class="update-date"
            >{{item.transactionInfo.updateDate}}</span>
          </div>
          <div>
            {{type==='BUY'? '买入' :'卖出'}}价格：
            <span class="price">{{item.transactionInfo.amount}}</span>
          </div>
          <div>
            入场费：
            <span class="cost">{{item.transactionInfo.tradingItems || '免费'}}</span>
          </div>
          <div class="description">{{item.transactionInfo.description}}</div>
        </div>
      </div>
    </van-list>
    <IDCard ref="idcard" :id="currentId" />
  </div>
</template>
<script>
import { getTurnipList, getCurrentTransaction } from '../api'
import IDCard from '../components/IDCard'
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
      list: [],
      currentId: null
    }
  },
  components: { IDCard },
  mounted() {},
  methods: {
    showIDCard(id) {
      this.currentId = id
      this.$refs.idcard.show = true
    },
    search() {
      this.currentPage = 1
      this.finished = false
      this.loading = true
      this.list = []
      this.onLoad()
    },
    async getTurnipDetail(id, uerId) {
      if (uerId === this.$store.state.info.userId) {
        // 看自己
        return this.$router.push({ name: 'TransactionDetail', query: { id } })
      }
      const res = await getCurrentTransaction()
      if (res.data) {
        return this.$notify({ type: 'danger', message: '你有正在交易的帖子' })
      }
      await this.$dialog.confirm({
        title: '注意',
        message:
          '一定时间内只能查看一条密码，请谨慎选择，查看密码后请不要传播密码'
      })
      this.$router.push({ name: 'TransactionDetail', query: { id } })
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
        this.currentPage += 1
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
<style lang="scss">
.list-page {
  width: 100%;
}
.list {
  .list-item {
    padding: 12px 18px;
    display: flex;
    border-bottom: #148270 1px dotted;
    .avatar {
      flex-shrink: 0;
    }
    .info {
      padding-left: 18px;
    }
    .update-date {
      color: gray;
      padding-left: 12px;
      font-size: 0.8em;
    }
    .price,
    .cost {
      color: #cf3438;
    }
    .description {
      color: #cf7b0a;
    }
  }
}
</style>
