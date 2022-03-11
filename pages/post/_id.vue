<template>
    <div>
        <Menu />
        <PostDetail :news="news" />
        <Footer />
    </div>
</template>
<script>
import Menu from '../../components/Menu.vue'
import Footer from '../../components/Footer.vue'
import PostDetail from '../../components/PostDetail.vue'
export default {
    components: {Menu, PostDetail, Footer},
    data() {
        return {
            id: this.$route.params.id,
            news: []
        }
    },
    
    methods: {
        async findNewById() {
        this.news = await this.$axios.$get("http://127.0.0.1:8000/api/posts/show/" + this.id)
        }
    },
    mounted() {
        this.findNewById()
    }
}
</script>