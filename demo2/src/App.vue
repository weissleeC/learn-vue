<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/blog">博客</router-link> |
      <router-link to="/video">视频</router-link> |
      <router-link to="/from">信息</router-link> |
      <router-link to="/eui">eui</router-link>
      <span v-if="username"> ||  欢迎：{{username}} <button @click="logout">注销</button></span>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  data() {
    return {
      username: localStorage.getItem('username')
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('username');
      this.$router.push('/login')
    }
  },
  watch: {
    '$route.path': function() {
      this.username = localStorage.getItem('username')
    } 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
