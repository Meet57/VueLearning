<template>
    <div>
        <app-header :title="title" v-on:changeTitle="updateTitle($event)" />
        <app-ninjas :ninjas="ninjas" />
        <app-footer  :title="title" />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Ninjas from "./components/Ninjas.vue";
export default {
    data() {
        return {
            title: "Meet Patel",
            ninjas: [
                { name: "Ryu", speciality: "Vue Components", show: false },
                { name: "Crystal", speciality: "HTML Wizardry", show: false },
                { name: "Hitoshi", speciality: "Click Events", show: false },
                { name: "Tango", speciality: "Conditionals", show: false },
                { name: "Kami", speciality: "Webpack", show: false },
                { name: "Yoshi", speciality: "Data Diggin", show: false },
            ],
        };
    },
    components: {
        "app-header": Header,
        "app-footer": Footer,
        "app-ninjas": Ninjas,
    },
    methods:{
        updateTitle(updatedTitle){
            this.title = updatedTitle
        }
    }
};
</script>

<style scoped>
div{
    margin:0;
    padding:0;
}
</style>
