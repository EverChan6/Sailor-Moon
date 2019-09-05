<template>
  <div class="daily-container">
    <div class="card-container">
      <div class="card" v-for="i in 56" :key="i">
        <div class="img-container">
          <img v-lazy="imgSrc"/>
        </div>
        <div class="description">
          <h4><b>在长隆水上乐园玩耍😊</b></h4>
          <p></p>
          <span>2019/09/09</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    
  }
}) 
export default class Home extends Vue {
  private imgSrc: string = require('../assets/images/logo.jpg')  
  
}
</script>

<style lang="scss" scoped>
.daily-container {
  height: 100vh;
  overflow-y: scroll;
  /*修改滚动条样式*/
  // 滚动条整体部分
  &::-webkit-scrollbar{
    width:10px;
    height:10px;
  }
  // 滚动条的轨道（里面装有Thumb）
  &::-webkit-scrollbar-track{
    background: rgb(238, 236, 232);
    border-radius:2px;
  }
  // 滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
  &::-webkit-scrollbar-thumb{
    background: #fcc52e;
    border-radius:10px;
  }
  &::-webkit-scrollbar-thumb:hover{
    background: rgb(245, 221, 142);
  }
  // 边角，即两个滚动条的交汇处
  &::-webkit-scrollbar-corner{
    background: #ccc;
  }
  /*定义最上方和最下方的按钮*/
  &::-webkit-scrollbar-button {
    border-bottom: 10px solid #000;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
}
.card-container {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 20px;
  padding: 50px;
}

.card {
  border: 1px dashed #000;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .3);
  transition: .3s;
  overflow: hidden;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .2);
  }
}

.img-container {
  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.description {
  padding: 2px 10px;
}
</style>