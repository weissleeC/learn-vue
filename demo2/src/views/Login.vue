<template>
  <div>
    <form @submit.prevent="doLogin">
      <input type="text" v-model="username" placeholder="请输入用户名">
      <input type="password" v-model="password" placeholder="请输入密码">
      <button>登陆</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    doLogin() {
      localStorage.setItem('username', this.username);
      this.$router.push('/');
    }
  }
}
</script>