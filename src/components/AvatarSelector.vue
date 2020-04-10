<template>
  <van-overlay :show="show" @click="show = false" class="fixed">
    <div class="wrapper" @click.stop>
      <div class="block">
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
  </van-overlay>
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
.fixed {
  position: fixed;
  z-index: 1;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.block {
  width: 300px;
  height: 80%;
  background-color: #fff;
  overflow: auto;
}
</style>
