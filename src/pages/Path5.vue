<template>
  <div>
    i am sister，调用了 store 数据: {{store.message}}
  </div>
</template>

<script>
import store from "../store"

export default {
  name: 'Path4',
  data() {
    return {
      store: store.state
    }
  },
  methods: {
    
  }
}
</script>