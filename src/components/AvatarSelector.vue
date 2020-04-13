<template>
  <div v-if="show" class="avatar-selector">
    <van-nav-bar title="头像选择" left-text="返回" left-arrow @click-left="show = false" class="nav" />
    <div class="content">
      <van-grid square>
        <van-grid-item v-for="name in avatarList" :key="name">
          <van-image
            @click="selectAvatar(name)"
            round
            width="100%"
            height="100%"
            fit="cover"
            :src="'https://vincenttho.com:8001/' + name"
          />
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { getAvatarList } from '../api'
export default {
  data() {
    return {
      show: false,
      avatarList: []
    }
  },
  mounted() {
    this.fetchAvatar()
  },
  methods: {
    fetchAvatar() {
      getAvatarList().then(res => {
        console.log(res)
        this.avatarList = res.data
      })
    },
    selectAvatar(fileName) {
      this.$emit('avatarChange', fileName)
      this.show = false
    }
  }
}
</script>
<style lang="scss" scoped>
.avatar-selector {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  .nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 96px);
    background-color: #fff;
    padding: 46px 0 50px;
    overflow: auto;
  }
}
</style>
