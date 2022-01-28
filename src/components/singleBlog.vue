<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
        <h3>Categories</h3>
        <ul>
            <li v-for="cat in blog.categories" :key="cat">{{ cat }}</li>
        </ul>
        <p>Author :</p>
        <h3>{{ blog.author }}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            blog: {},
        };
    },
    created() {
        this.$http
            .get("https://vue-blog-34e4c-default-rtdb.firebaseio.com/posts/" + this.id + ".json")
            .then(function (data) {
                return data.json();
            })
            .then((data) => {
                this.blog = data;
            });
    },
};
</script>

<style>
#single-blog {
    max-width: 960px;
    margin: 0 auto;
}
</style>
