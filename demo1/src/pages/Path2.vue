<template>
  <div>
    <ul>
      <li v-for="(fruis, index) of fruits" :key="index">{{fruis}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Path2',
  data() {
    return {
      fruits: ['🍎', '🍌', '🍐'],
    }
  }
}
</script>

<style scoped>
ul li {
  display: inline-block;
}
</style>
