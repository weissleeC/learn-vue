<template>
  <div>
    <h1 class="path1" v-bind:title="message">{{message}}</h1>
    <span>{{date}}</span>
  </div>
</template>

<script>
export default {
  name: 'Path1',
  data() {
    return {
      message: 'hello world',
      date: `页面加载于 ${new Date().toLocaleString()}`
    }
  }
}
</script>
