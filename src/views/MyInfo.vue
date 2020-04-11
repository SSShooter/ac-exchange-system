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
        disabled
        name="邮箱"
        label="邮箱"
        placeholder="邮箱"
        :rules="[{ required: true, message: '必填' }]"
      />
      <van-field
        v-model="info.userName"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '必填' }]"
      />
      <van-field v-model="info.nintendoAccount" name="SW" label="SW" placeholder="SW" />
      <van-field v-model="info.islandName" name="岛名称" label="岛名称" placeholder="岛名称" />
      <van-field
        readonly
        clickable
        name="半球"
        label="半球"
        :value="info.hemisphere"
        placeholder="南半球啊？北半球？ 选填"
        @click="showPicker1 = true"
      />
      <van-popup v-model="showPicker1" position="bottom">
        <van-picker
          show-toolbar
          :columns="['南','北']"
          @confirm="onConfirm1"
          @cancel="showPicker1 = false"
        />
      </van-popup>
      <van-field
        readonly
        clickable
        name="水果"
        label="水果"
        :value="info.fruit"
        placeholder="本岛特产 选填"
        @click="showPicker2 = true"
      />
      <van-popup v-model="showPicker2" position="bottom">
        <van-picker
          show-toolbar
          :columns="['樱桃','梨子','苹果','橘子','桃子']"
          @confirm="onConfirm2"
          @cancel="showPicker2 = false"
        />
      </van-popup>
      <van-cell-group>
        <van-cell @click="$router.push('MyList')" title="我的帖子" is-link />
        <van-cell @click="$router.push('TransactionDetail')" title="当前交易" is-link />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">保存</van-button>
      </div>
    </van-form>

    <AvatarSelector ref="AvatarSelector" @avatarChange="name => info.avatar = name" />
  </div>
</template>
<script>
import { getAvatarList, patchMyInfo } from '../api'
import AvatarSelector from '../components/AvatarSelector'
export default {
  data() {
    return {
      info: {
        email: '',
        userName: '',
        password: '',
        avatar: '',
        hemisphere: '',
        fruit: ''
      },
      show: false,
      avatarList: [],
      showPicker1: false,
      showPicker2: false
    }
  },
  components: { AvatarSelector },
  mounted() {
    this.fetchAvatar()
    this.info = this.$store.state.info
  },
  watch: {
    '$store.state.info': function(val) {
      this.info = val
    }
  },
  methods: {
    async onSubmit(values) {
      await patchMyInfo(this.info)
      this.$notify({ type: 'success', message: '保存成功' })
    },
    onConfirm1(value) {
      this.info.hemisphere = value
      this.showPicker1 = false
    },
    onConfirm2(value) {
      this.info.fruit = value
      this.showPicker2 = false
    },
    fetchAvatar() {
      getAvatarList().then(res => {
        console.log(res)
        this.avatarList = res.data
      })
    },
    selectAvatar() {
      console.log(this)
      this.$refs.AvatarSelector.show = true
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  color: #50b37f;
  margin: 50px 0 10px;
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
