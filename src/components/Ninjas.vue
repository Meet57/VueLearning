<template>
    <div id="ninjas">
        <ul>
            <li
                v-for="(item, index) in ninjas"
                :key="index"
                v-on:click="item.show = !item.show"
            >
                <h2>{{ item.name }}</h2>
                <p v-show="item.show">{{ item.speciality }}</p>
            </li>
        </ul>
        <button v-on:click="deleteNinja">Delete ninja</button>
    </div>
</template>

<script>
export default {
    props: {
        ninjas: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            
        };
    },
    methods: {
        deleteNinja(){
            this.ninjas.pop();
        }
    },
    // lifecycle hooks
    beforeCreate(){
        alert('beforeCreate')
    },
    created(){
        alert('Created')
    },
    beforeMount(){
        alert('beforeMount')
    },
    mounted(){
        alert('mounted')
    },
    beforeUpdate(){
        alert('beforeUpdate')
    },
    updated(){
        alert('updated')
    }
};
</script>

<style scoped>
#ninjas {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
