<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Path1 />
    <hr/>
    <Path2 />
    <hr/>
    <Path3 @myevent="changeData" :msg="message" />
    <h3>{{childData}}</h3>
    <hr/>
    <Path4 />
    <Path5 />
    <hr/>
    <Path6 />
  </div>
</template>

<script>
import Path1 from './pages/Path1.vue';
import Path2 from './pages/Path2.vue';
import Path3 from './pages/Path3.vue';
import Path4 from './pages/Path4.vue';
import Path5 from './pages/Path5.vue';
import Path6 from './pages/Path6.vue';

export default {
  name: 'App',
  components: {
    Path1,
    Path2,
    Path3,
    Path4,
    Path5,
    Path6
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
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
