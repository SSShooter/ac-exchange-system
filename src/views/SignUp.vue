<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="info.email"
      name="邮箱"
      label="邮箱"
      placeholder="邮箱"
      :rules="[{ required: true, message: 'email is required' }]"
    />
    <van-field
      v-model="info.password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: 'Password is required' }]"
    />
    <van-field
      v-model="info.rePassword"
      type="password"
      name="重新输入密码"
      label="重新输入密码"
      placeholder="重新输入密码"
      :rules="[{ required: true, message: 'rePassword is required' }]"
    />
    <van-field
      v-model="info.userName"
      name="用户名"
      label="用户名"
      placeholder="建议使用游戏 ID"
      :rules="[{ required: true, message: 'userName is required' }]"
    />
    <van-field v-model="info.nintendoAccount" name="SW" label="SW" placeholder="switch id 选填" />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">Submit</van-button>
    </div>
  </van-form>
</template>
<script>
import { register } from '../api'
export default {
  data() {
    return {
      info: {
        email: '472356884@qq.com',
        userName: '1',
        password: '1',
        rePassword: '1',
        nintendoAccount: '1'
      }
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
      register(this.info)
    }
  }
}
</script>
