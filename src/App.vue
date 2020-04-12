<template>
  <div id="app">
    <router-view class="main" />
    <van-tabbar v-model="active" @change="tabChange" class="navi">
      <van-tabbar-item name="BuyList" icon="paid">买</van-tabbar-item>
      <van-tabbar-item name="SaleList" icon="shop">卖</van-tabbar-item>
      <van-tabbar-item name="GoodsExchange" icon="exchange">换物</van-tabbar-item>
      <van-tabbar-item name="CreateTransaction" icon="friends-o">发布</van-tabbar-item>
      <van-tabbar-item name="MyInfo" icon="user-o">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: null
    }
  },
  watch: {
    '$route.name': {
      handler: 'setTab',
      immediate: true
    }
  },
  mounted() {
    this.$store.dispatch('fetchInfo')
  },
  methods: {
    tabChange(val) {
      this.$router.push({ name: val })
    },
    setTab(name) {
      this.active = name
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #82500d;
  max-width: 500px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.8);
  min-height: 100vh;
}
:root {
  background-image: url(./img/80202218_p6.png);
}
.main {
  // 抵消tab的fixed
  margin-bottom: 50px;
}
.title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #13826f;
  padding: 50px 0 30px;
}

.overlay-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>
