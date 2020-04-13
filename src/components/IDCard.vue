<template>
  <van-overlay :show="show" @click="show = false">
    <div class="overlay-wrapper">
      <van-loading v-if="loading" />
      <canvas v-show="!loading" id="idcard" width="400" height="250"></canvas>
    </div>
  </van-overlay>
</template>

<script>
import { getUserInfo } from '../api'
import bg from '../img/80202218_p5.png'
import title from '../img/title.png'
import { roundRect } from '../util'
export default {
  props: ['id'],
  data() {
    return { show: false, loading: true }
  },
  watch: {
    async id(val) {
      if (!val) return
      this.loading = true
      const info = (await getUserInfo(val)).data
      console.log(info)
      const dom = document.getElementById('idcard')
      const width = document.querySelector('#app').offsetWidth
      const scale = ((400 / 414) * width) / 400
      dom.style.transform = `scale(${scale},${scale})`
      const ctx = dom.getContext('2d')
      const bgI = await this.loadImage(bg)
      const titleI = await this.loadImage(title)
      const avatar = await this.loadImage(
        'https://vincenttho.com:8001/' + info.avatar
      )
      ctx.drawImage(bgI, 0, 0)
      ctx.drawImage(avatar, 50, 50, 80, 80)
      ctx.drawImage(titleI, 10, 120, 160, 80)
      // ctx.strokeStyle = 'white'
      ctx.fillStyle = 'white'
      roundRect(ctx, 180, 50, 200, 25, 5, true, false)
      roundRect(ctx, 180, 100, 200, 25, 5, true, false)
      roundRect(ctx, 180, 150, 80, 25, 5, true, false)
      roundRect(ctx, 280, 150, 100, 25, 5, true, false)
      roundRect(ctx, 180, 200, 200, 25, 5, true, false)
      ctx.fillStyle = 'black'
      ctx.font = '15px Sans-serif'
      ctx.fillText('名字', 180, 45)
      ctx.fillText('岛名', 180, 95)
      ctx.fillText('半球', 180, 145)
      ctx.fillText('特产水果', 280, 145)
      ctx.fillText('NS号', 180, 195)

      ctx.font = 'bold 18px Sans-serif'
      ctx.fillText(info.userName || '', 190, 70)
      ctx.fillText(info.islandName || '', 190, 120)
      ctx.fillText(info.hemisphere || '', 190, 170)
      ctx.fillText(info.fruit || '', 290, 170)
      ctx.fillText(
        info.nintendoAccount
          ? 'SW ' + info.nintendoAccount.match(/([0-9]{4})/g).join('-')
          : '',
        190,
        220
      )
      this.loading = false
    }
  },
  methods: {
    loadImage(url) {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = function() {
          resolve(img)
        }
        img.src = url
      })
    }
  },
  mounted() {}
}
</script>

<style>
.flex {
  display: flex;
  justify-content: center;
}
</style>
