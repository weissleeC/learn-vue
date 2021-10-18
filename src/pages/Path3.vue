<template>
  <div>
      <!-- 父级向子级通过属性的方式传值  -->
    <div>{{msg}}</div>

    <!-- 子级向父级通过 this.$emit() 的方式传值  -->
    <button @click="sendData">向父级传值</button>
  </div>
</template>

<script>
export default {
  name: 'Path3',
  props: {
    msg: String
  },
  data() {
    return {
      childData: 'i am child data'
    }
  },
  methods: {
    sendData() {
      this.$emit("myevent", this.childData)
    }
  }
}

</script>