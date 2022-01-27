import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

Vue.config.productionTip = false;

export const bus = new Vue();

// custom directives
Vue.directive("rainbow", {
    bind(el) {
      el.style.color = "#" + Math.random().toString().slice(2,8)
    },
});

Vue.use(VueResource);

new Vue({
    render: (h) => h(App),
}).$mount("#app");
