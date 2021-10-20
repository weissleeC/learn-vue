<template>
  <div>
    i am brother
    <button @click="change">改变共享数据</button>
  </div>
</template>

<script>
import store from "../store"

export default {
  name: 'Path4',
  data() {
    return {
      data: 'brother setting'
    }
  },
  methods: {
    change() {
      store.setStateMessage(this.data);
    }
  }
}
</script>