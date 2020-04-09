<template>
  <van-form @submit="onSubmit">
    <!-- <h1>买卖信息发布</h1>
    <li>信息发布后其他用户可以看到此信息</li>
    <li>一位用户查看密码后信息就不会在列表出现啦</li>
    <li>继续发布相同信息可以在我的帖子中选择重新发布</li>
    <li>突然涌入大量陌生人，可能是密码被泄漏，请重新发布新交易</li> -->
    <van-field name="radio" label="类型">
      <template #input>
        <van-radio-group direction="horizontal" v-model="info.transactionType">
          <van-radio name="BUY">买</van-radio>
          <van-radio name="SALE">卖</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-field
      v-model="info.amount"
      name="大头菜价格"
      label="大头菜价格"
      placeholder="大头菜价格"
      :rules="[{ required: true, message: '必填' }]"
    />
    <van-field v-model="info.description" name="描述" label="描述" placeholder="描述" />
    <van-field v-model="info.tradingItems" name="入场费" label="入场费" placeholder="入场费" />
    <van-field
      v-model="info.password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '必填' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">发布</van-button>
    </div>
  </van-form>
</template>
<script>
import { createTransaction } from '../api'
export default {
  data() {
    return {
      info: {
        amount: '',
        tradingItems: '1',
        password: '',
        transactionType: 'BUY'
      }
    }
  },
  methods: {
    async onSubmit(values) {
      try {
        await createTransaction(this.info)
        this.$router.push(this.info.transactionType + 'List')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
