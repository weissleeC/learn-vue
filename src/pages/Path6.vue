<template>
  <div>
    <h1>Fruit list</h1>
    <form @submit.prevent="postData">
      <input type="text" v-model="fruit" placeholder="请添加您的水果" />
      <button>添加</button>
    </form>
    <ul>
      <li v-for="item, index of lists" :key="index">
        {{item}}<button @click="deleteData(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Path5',
  data() {
    return {
      fruit: "",
      lists: []
    }
  },
  methods: {
    // 获取数据
    getFruitList() {
      axios.get("http://localhost:3030/fruits").then( res => {
        this.lists = res.data
      })
    },
    // 提交数据
    postData() {
      axios.post("http://localhost:3030/fruits", {fruit: this.fruit}).then( () => {
        this.getFruitList();
      })
    },
    // 删除数据
    deleteData(index) {
      axios.delete(`http://localhost:3030/fruits/:${index}`).then( () => {
        this.getFruitList();
      })
    }
  },
  created() {
    this.getFruitList();
  }
}
</script>