<template>
  <div class="from">
    <h1>This is an from page</h1>
    <div>
      <form @submit.prevent="postData">
        <ul>
          <li>
            <label>
              <span for="username">姓名：</span>
              <input id="username" v-model="fromData.username" type="text">
            </label>
          </li>
          <li>
            <label>
              <span for="password">密码：</span>
              <input id="password" v-model="fromData.password" type="password">
            </label>
          </li>
          <li>
            <label>
              <span for="hobby">爱好：</span>
              <select name="hobby" id="hobby" v-model="fromData.hobby">
                <option value="1">篮球</option>
                <option value="2">游泳</option>
                <option value="3">足球</option>
                <option value="4">排球</option>
              </select>
            </label>
          </li>
          <li>
            性别：
            <label for="men">男<input type="radio" id="men" value="男" v-model="fromData.gender"></label>
            <label for="miss">女<input type="radio" id="miss" value="女" v-model="fromData.gender"></label>
          </li>
          <li>
            技能：
            <label for="javascript">
              javascript
              <input type="checkbox" id="javascript" value="javascript" v-model="fromData.skill">
            </label>
            <label for="php">
              php
              <input type="checkbox" id="php" value="php" v-model="fromData.skill">
            </label>
            <label for="java">
              java
              <input type="checkbox" id="java" value="java" v-model="fromData.skill">
            </label>
          </li>
        </ul>
        <button>提交数据</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'From',
  data() {
    return {
      fromData: {
        username: '',
        password: '',
        hobby: '',
        gender: '',
        skill: []
      }
    }
  },
  methods: {
    postData() {
      console.log(this.fromData)
    }
  }
}
</script>

