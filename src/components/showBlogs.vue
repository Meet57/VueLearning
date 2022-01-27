<template>
    <div v-theme:column="theme" id="show-blogs">
        <h1>All Blogs Articles</h1>
        <input type="text" v-model="search" placeholder="Search Box">
        <h3 v-if="isLoading">Loading...</h3>
        <div v-else v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
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
            theme: 'narrow',
            search: ''
        };
    },
    methods: {},
    created() {
        this.$http.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
            this.blogs = data.body.slice(0, 10);
            this.isLoading = false
        });
    },
    computed:{
        filteredBlogs(){
            return this.blogs.filter((blog) => {
                return blog.title.toLowerCase().match(this.search.toLowerCase())
            })
        }
    }
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
