<template>
  <div class="side-bar" :style="{background: color}">
    <div class="site-logo-container">
      <slot name="logo"></slot>
    </div>
    <div class="catalog">
      <div class="catalog-item" v-for="(item, idx) in catalog" :key="idx">{{item}}</div>
    </div>
    <div class="share-list">
      <slot name="list"></slot>
    </div>
    <div class="setter">
      <input v-model="color" type="color">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private catalog!: Array<string>;
  private color: string = '#fff';

}
</script>

<style scoped lang="scss">
.side-bar {
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.site-logo-container {
  box-sizing: border-box;
  width: 120px;
  height: 120px;
  margin-top: 30px;
  border-radius: 100%;
  overflow: hidden;
}

.site-logo {
  max-width: 100%;
  // object-fit: contain;
  &:hover {
    transform: scale(1.2);
  }
}

.catalog-item {
  color: #ff2c50;
  padding: 10px 0;
  &:hover {
    font-size: 18px;
  }
}

.share-list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-bottom: 30px;
}

.icon {
  width: 25px;
  height: 25px;
}

.setter {
  position: absolute;
  top: 0;
  left: 0;
  // transform: translate(-50%, -50%);
  // width: 100px;
  // height: 100px;
  // border-radius: 50%;
  // & > input {
  //   opacity: 0;
  // }
}
</style>