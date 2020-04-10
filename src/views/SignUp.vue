<template>
  <div>
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
      <van-field
        v-model="info.rePassword"
        type="password"
        name="重新输入密码"
        label="重新输入密码"
        placeholder="重新输入密码"
        :rules="[{ required: true, message: '必填' }]"
      />
      <van-field
        v-model="info.userName"
        name="用户名"
        label="用户名"
        placeholder="建议使用游戏 ID"
        :rules="[{ required: true, message: '必填' }]"
      />
      <van-field v-model="info.nintendoAccount" name="SW" label="SW" placeholder="switch id 选填" />
      <van-field v-model="info.hemisphere" name="半球" label="半球" placeholder="南半球啊？北半球？ 选填" />
      <van-field v-model="info.fruit" name="水果" label="水果" placeholder="本岛特产 选填" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">Submit</van-button>
      </div>
    </van-form>
    <AvatarSelector ref="AvatarSelector" @avatarChange="name => info.avatar = name" />
  </div>
</template>
<script>
import { register } from '../api'
import AvatarSelector from '../components/AvatarSelector'
export default {
  data() {
    return {
      info: {
        email: '472356884@qq.com',
        userName: '1',
        password: '1',
        rePassword: '1',
        nintendoAccount: '1',
        hemisphere: '',
        fruit: '',
        avatar: '61.png'
      }
    }
  },
  components: { AvatarSelector },
  methods: {
    async onSubmit(values) {
      console.log('submit', values)
      await register(this.info)
      this.$router.push({ name: 'SignIn' })
    },
    selectAvatar() {
      console.log(this)
      this.$refs.AvatarSelector.show = true
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
