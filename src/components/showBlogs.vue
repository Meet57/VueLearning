<template>
    <div v-theme:column="theme" id="show-blogs">
        <h1>All Blogs Articles</h1>
        <input type="text" v-model="search" placeholder="Search Box" />
        <h3 v-if="isLoading">Loading...</h3>
        <div v-else v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
            <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
            <p>{{ blog.body | snippet }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: [],
            isLoading: true,
            theme: "narrow",
            search: "",
        };
    },
    methods: {},
    created() {
        this.$http.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
            this.blogs = data.body.slice(0, 10);
            this.isLoading = false;
        });
    },
    computed: {
        filteredBlogs() {
            return this.blogs.filter((blog) => {
                return blog.title.toLowerCase().match(this.search.toLowerCase());
            });
        },
    },
    filters: {
        toUppercase(value) {
            return value.toUpperCase();
        },

        snippet(value) {
            return value.length + " - " + value.slice(0, 200) + "...";
        },
    },
    directives: {
        rainbow: {
            bind(el) {
                el.style.color = "#" + Math.random().toString().slice(2, 8);
            },
        },
        theme: {
            bind(el, binding) {
                if (binding.value == "wide") {
                    el.style.maxWidth = "1200px";
                } else if (binding.value == "narrow") {
                    el.style.maxWidth = "560px";
                }
                if (binding.arg == "column") {
                    el.style.background = "#ddd";
                    el.style.padding = "20px";
                }
            },
        },
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
