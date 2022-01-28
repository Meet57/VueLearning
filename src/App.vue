<template>
    <div id="body">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
    components:{
        'app-header':Header
    },
    data(){
        return {

        }
    },
    methods:{

    }
};
</script>

<style scoped>
#body{
    margin: 0;
    padding: 0;
}
</style>
