<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Path1 />
    <Path2 />
    <Path3 @myevent="changeData" :msg="message" />
    <h3>{{childData}}</h3>
  </div>
</template>

<script>
import Path1 from './pages/Path1.vue';
import Path2 from './pages/Path2.vue';
import Path3 from './pages/Path3.vue';

export default {
  name: 'App',
  components: {
    Path1,
    Path2,
    Path3
  },
  data() {
    return {
      message: 'i am app data',
      childData: ''
    }
  },
  methods: {
    changeData(childData) {
      this.childData = childData
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
