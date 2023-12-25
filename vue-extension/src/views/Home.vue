<template>
    <div class="container-feed-main">
        <div class="container-feed-left">
        </div>
        <div class="container-feed-middle">
            <div class="post-wrapper">
                <div v-for="item in posts" :key="item.id" class="post">
                    <Post 
                        :id="item.id"
                        :createTime="item.createTime" 
                        :postPicture="item.postPicture"
                        :postHeader="item.postHeader"
                        :postContent="item.postContent"
                    />
                </div>
            </div>
        </div>
        <div class="container-feed-right">
        </div>
    </div>
</template>


<script>
import Post from '@/components/Post.vue'
export default {
    name: "Home",
    components: {
        Post
    },
    data() {
        return {
            posts: [],
        }
    },

    methods: {
        fetchPosts() {
        fetch('http://localhost:3000/Posts')
        .then((response) => response.json())
        .then((data) => {
          (this.posts = data)
          console.log(data)
        })
        .catch((err) => console.log(err.message))
    },
    },
        mounted() {
        this.fetchPosts()
    }
}
</script>