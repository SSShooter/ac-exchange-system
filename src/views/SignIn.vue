<template>
  <div>
    <div class="title">没有名字的动森交易系统</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="info.email"
        name="email"
        label="email"
        placeholder="email"
        :rules="[{ required: true, message: '必填' }]"
      />
      <van-field
        v-model="info.password"
        type="password"
        name="Password"
        label="Password"
        placeholder="Password"
        :rules="[{ required: true, message: '必填' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">登陆</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { login, setToken } from '../api'
export default {
  data() {
    return {
      info: {
        email: '472356884@qq.com',
        password: '1'
      }
    }
  },
  methods: {
    async onSubmit(values) {
      console.log('submit', values)
      const res = await login(this.info)
      console.log(res)
      setToken(res.data.token)
      this.$router.push({ name: 'BuyList' })
    }
  }
}
</script>
