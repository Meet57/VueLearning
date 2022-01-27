<template>
    <div v-theme:column="theme" id="show-blogs">
        <h1>All Blogs Articles</h1>
        <h3 v-if="isLoading">Loading...</h3>
        <div v-else v-for="blog in blogs" :key="blog.title.slice(0,10)" class="single-blog">
            <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
            <p>{{ blog.body | snippet }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: [],
            isLoading : true,
            theme: 'narrow'
        };
    },
    methods: {},
    created() {
        this.$http.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
            this.blogs = data.body.slice(0, 10);
            this.isLoading = false
        });
    },
};
</script>

<style>
#show-blogs {
    max-width: 800px;
    margin: 0px auto;
}
.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
