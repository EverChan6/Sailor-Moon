<template>
  <div class="home">
    <div class="nav"></div>
    <side-bar :catalog="catalog" @openUp="openUp" class="side-bar">
      <img class="site-logo" src="../assets/images/logo.jpg" alt="网站Logo" slot="logo">
      <template slot="list">
        <img class="icon" src="../assets/images/xinlang.png">
        <img class="icon" src="../assets/images/weixin.png">
      </template>
    </side-bar>
    <router-view class="tab" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SideBar from '@/components/SideBar.vue'

@Component({
  components: {
    SideBar
  }
}) 
export default class Home extends Vue {
  private catalog: Array<string> = ['Daily', 'About Me', 'Contact Me']

  private openUp(tabIdx: number){
    console.log('接收到啦开心😊')
    switch(tabIdx) {
      case 0:
        this.$router.push('daily')
        break
      case 1: 
        // this.$router.push('about')
        break
      case 2:
        break
      default:
        break
    }
    
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  width: 100vw;
}

.tab {
  flex: 1;
}

.nav {
  display: none;
}

@media screen and (max-width: 960px) {
  .side-bar {
    display: none;
  }

  .nav {
    display: block;
  }
}

</style>
