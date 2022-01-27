<template>
    <div>
        <keep-alive>
            <component v-bind:is="component" />
        </keep-alive>
        <button v-on:click="changeComponent(1)">Form One</button>
        <button v-on:click="changeComponent(2)">Form Two</button>
    </div>
</template>

<script>
import formOne from "./components/formOne.vue";
import formTwo from "./components/formTwo.vue";

export default {
    components: {
        "form-one": formOne,
        "form-two": formTwo,
    },
    data() {
        return {
            component: "form-two",
        };
    },
    methods: {
        handleSubmit: function () {
            alert("thanks for submitting");
        },
        changeComponent(id) {
            this.component = id == 1 ? "form-one" : "form-two";
        },
    },
};
</script>

<style>
button {
    margin: 0 auto;
    font-family: "Nunito SemiBold";
}
</style>
