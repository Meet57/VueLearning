import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

Vue.config.productionTip = false;

export const bus = new Vue();

// custom directives

//Filters

Vue.use(VueResource);

new Vue({
    render: (h) => h(App),
}).$mount("#app");
