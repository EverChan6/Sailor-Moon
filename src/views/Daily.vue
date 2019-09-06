<template>
  <div class="daily-container">
    <div class="card-container">
      <div class="card" v-for="i in 56" :key="i">
        <div class="img-container">
          <img v-lazy="imgSrc"/>
        </div>
        <div class="description">
          <h4><b>今天在长隆水上乐园玩耍😊</b></h4>
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