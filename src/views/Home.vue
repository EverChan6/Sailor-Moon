<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <side-bar :catalog="catalog">
      <img class="site-logo" src="../assets/images/logo.jpg" alt="网站Logo" slot="logo">
      <template slot="list">
        <img class="icon" src="../assets/images/xinlang.png">
        <img class="icon" src="../assets/images/weixin.png">
      </template>
    </side-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import SideBar from '@/components/SideBar.vue'

@Component({
  components: {
    HelloWorld,
    SideBar
  }
}) 
export default class Home extends Vue {
  private catalog: Array<string> = ['Daily', 'About Me', 'Contact Me']

  private funcA(params:any){}
}
</script>

<style lang="scss" scoped>

</style>
