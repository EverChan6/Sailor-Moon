<template>
  <div class="home">
    <div class="header-nav-container">
      <div class="nav">
        <img class="nav-logo" src="../assets/images/logo.jpg" alt="网站Logo" slot="logo">
        <h2>Sailor Moon</h2>
        <img :class="['show-logo', {'open' : showMenu}]" src="../assets/images/more.png" alt="更多" @click="toggleNavMenu"/>
      </div>
      <ul ref="app-menu" class="app-menu">
        <li v-for="(item, index) in catalog" :key="index" @click="openUp(index)">{{item}}</li>
      </ul>
    </div>
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
  private showMenu: Boolean = false
  private ulHeight: String | Number = 0

  mounted() {
    // 声明this.$refs['app-menu']的类型不然ts会出现错误，取不到this.$refs['app-menu']的style属性
    const element = this.$refs['app-menu'] as any
    // 存储菜单实际高度
    this.ulHeight = element.offsetHeight + 'px'
    // 开始时默认设置为0
    element.style.height = 0
  }
  
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
    this.toggleNavMenu()
  }

  private toggleNavMenu() {
    // 声明this.$refs['app-menu']的类型，不然ts会出现错误取不到this.$refs['app-menu']的style属性
    const element = this.$refs['app-menu'] as any
    
    if(this.showMenu) { // 关闭菜单
      this.showMenu = false
      element.style.height = 0
    }
    else {              // 展开菜单
      this.showMenu = true
      element.style.height = this.ulHeight
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
}
@media screen and (min-width: 960px) {
  .tab {
    flex: 1;
  }

  .header-nav-container {
    display: none;
  }
}




@media screen and (max-width: 960px) {
  .side-bar {
    display: none;
  }

  .tab {
    width: 100vw;
  }

  .header-nav-container {
    display: block;
    width: 100vw;
  }

  .nav {
    display: flex;
    align-items: center;
    padding: 10px;
    background: #ffd2d2;
  }

  .nav-logo {
    width: 70px;
    height: 70px;
    border-radius: 100%;
  } 

  .show-logo {
    margin-left: auto;
  }

  .open {
    transform: rotate(90deg);
    transition: all .5s;
  }

  .app-menu {
    transition: all .5s;
    list-style-type: none;
    border-top: 1px solid #eee;
    margin: 0;
    padding: 0;
    background: #ffd2d2;
    color: #fff;
    overflow: hidden;
    li {
      border-bottom: 1px solid #eee;
      padding: 15px;
      &:hover {
        background: #f7a9a9;
      }
    }
  }
}

</style>
