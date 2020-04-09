<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="info.email"
        name="邮箱"
        label="邮箱"
        placeholder="邮箱"
        :rules="[{ required: true, message: '必填' }]"
      />
      <!-- <van-field
        v-model="info.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '必填' }]"
      />
      <van-field
        v-model="info.rePassword"
        type="password"
        name="重新输入密码"
        label="重新输入密码"
        placeholder="重新输入密码"
        :rules="[{ required: true, message: '必填' }]"
      /> -->
      <van-field
        v-model="info.userName"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '必填' }]"
      />
      <van-field v-model="info.nintendoAccount" name="SW" label="SW" placeholder="SW" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">保存</van-button>
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
    }
  }
}
</script>
<style lang="sass" scoped>
.title
    color: #50b37f
    margin: 50px 0 10px
</style>
