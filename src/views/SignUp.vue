<template>
  <div>
    <div class="title">用户注册</div>
    <div class="flex">
      <van-image
        @click="selectAvatar"
        round
        width="80px"
        height="80px"
        fit="cover"
        :src="'https://vincenttho.com:8001/' + info.avatar"
      />
      <div>点击选择头像</div>
    </div>
    <van-form @submit="onSubmit" style="padding:20px 0;">
      <van-field
        v-model="info.email"
        name="邮箱"
        label="邮箱"
        placeholder="邮箱"
        :rules="[{ required: true, message: '必填' }]"
      >
        <template #button>
          <van-button
            size="small"
            type="primary"
            :loading="loading"
            @click="sendCaptcha(info.email)"
          >获取验证码</van-button>
        </template>
      </van-field>
      <van-field
        v-model="info.captcha"
        name="验证码"
        label="验证码"
        placeholder="验证码会发送到邮箱"
        :rules="[{ required: true, message: '必填' }]"
      />
      <van-field
        v-model="info.userName"
        name="用户名"
        label="用户名"
        placeholder="建议使用游戏 ID"
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
      <van-field
        v-model="info.rePassword"
        type="password"
        name="重新输入密码"
        label="重新输入密码"
        placeholder="重新输入密码"
        :rules="[{ required: true, message: '必填' }]"
      />
      <!-- <van-field v-model="info.nintendoAccount" name="SW" label="SW" placeholder="switch id 选填" />
      <van-field v-model="info.hemisphere" name="半球" label="半球" placeholder="南半球啊？北半球？ 选填" />
      <van-field v-model="info.fruit" name="水果" label="水果" placeholder="本岛特产 选填" />-->
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
    <AvatarSelector ref="AvatarSelector" @avatarChange="name => info.avatar = name" />
  </div>
</template>
<script>
import { register, sendCaptcha } from '../api'
import AvatarSelector from '../components/AvatarSelector'
import md5 from 'blueimp-md5'
export default {
  data() {
    return {
      info: {
        email: '',
        userName: '',
        password: '',
        rePassword: '',
        nintendoAccount: '',
        hemisphere: '',
        fruit: '',
        captcha: '',
        avatar: '61.png'
      },
      loading: false
    }
  },
  components: { AvatarSelector },
  methods: {
    async onSubmit(values) {
      const password = md5(this.info.password)
      const rePassword = md5(this.info.rePassword)
      await register({ ...this.info, password, rePassword })
      this.$notify({ type: 'success', message: '注册成功' })
      this.$router.push({ name: 'SignIn' })
    },
    selectAvatar() {
      console.log(this)
      this.$refs.AvatarSelector.show = true
    },
    async sendCaptcha(email) {
      try {
        if (!email) this.$notify({ type: 'warning', message: '请先输入邮箱' })
        this.loading = true
        await sendCaptcha(email)
        this.$notify({ type: 'success', message: '验证码已发送' })
        this.loading = false
      } catch (error) {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
