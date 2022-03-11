<template>
    <div class="blog">
        <Menu />
        <div class="col-md-12 post">
                <div class="banner text-center d-flex align-items-center justify-content-center mb-5">
                    <h3>BÀI VIẾT</h3>
                </div>
            </div>
        <Post />
        <Footer class="mt-5" />
    </div>
</template>
<script>
import Post from '../../components/Post.vue'
import Footer from '../../components/Footer.vue'
import Menu from '../../components/Menu.vue'
export default {
  components: { Post, Menu, Footer },
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.banner {
    margin-top:100px;
    height: 80px;
    background-image:url("https://media.istockphoto.com/vectors/abstract-template-white-and-gray-color-luxury-background-design-vector-id1216756726?k=20&m=1216756726&s=170667a&w=0&h=s7Iol7Sk7Rn7tKBYfNB_OEXlBUmenhSxvV8VEOb8S_0=") ;
}

.post {
    margin-top: 50px;
}
</style>