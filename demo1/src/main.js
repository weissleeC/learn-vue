import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false; // 开发配置，提示项，生产版关闭

new Vue({
  render: (h) => h(App),
}).$mount("#app");
