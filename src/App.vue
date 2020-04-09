<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
    <van-tabbar v-model="active" @change="tabChange">
      <van-tabbar-item name="BuyList" icon="paid">买</van-tabbar-item>
      <van-tabbar-item name="SaleList" icon="shop">卖</van-tabbar-item>
      <van-tabbar-item name="TurnipList3" icon="exchange">换物</van-tabbar-item>
      <van-tabbar-item name="CreateTransaction" icon="friends-o">发布</van-tabbar-item>
      <van-tabbar-item name="MyInfo" icon="user-o">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    tabChange(val) {
      console.log(val)
      this.$router.push({ name: val })
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 500px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.8);
  min-height: 100vh;
}
:root {
  background-image: url(./img/80202218_p6.png);
}

.title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #13826f;
  padding: 50px 0 30px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
