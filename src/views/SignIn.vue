<template>
  <div>
    <div class="title">未命名的动森交易系统</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="info.email"
        name="邮箱"
        label="邮箱"
        placeholder="邮箱"
        :rules="[{ required: true, message: '必填' }]"
      />
      <van-field
        v-model="info.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '必填' }]"
      />
      <div style="margin: 16px;text-align:center;">
        <router-link style="color:#cf7b0a;" :to="{ name: 'SignUp'}">还没有账号？点这里注册！</router-link>
      </div>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">登陆</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { login, setToken } from '../api'
import md5 from 'blueimp-md5'
export default {
  data() {
    return {
      info: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit(values) {
      const res = await login({
        email: this.info.email,
        password: md5(this.info.password)
      })
      console.log(res)
      setToken(res.data.token)
      this.$store.dispatch('fetchInfo')
      this.$router.push({ name: 'SaleList' })
    }
  }
}
</script>
