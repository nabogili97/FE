<template>
    <div class="blog container-fluid">
        <div class="row">
            <div class="container">
                <div  v-for="(item, index) in news.data" :key="index">
                    <div class="row mb-3">
                        <div class="col-md-4 col-12">
                            <div class="post-img">
                                <NuxtLink :to="'/post/' + item.id" style="text-decoration:none">
                                    <img :src=item.img>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="col-md-8 col-12">
                            <div>
                                <NuxtLink :to="'/post/' + item.id" style="text-decoration:none">
                                    <h4>{{item.title}}</h4>
                                </NuxtLink>
                                <i>{{item.public_start_at}}</i>
                                <p class="mt-3" style=" text-align: justify;">{{item.description}}</p>
                            </div>
                            <div>
                                <NuxtLink :to="'/post/' + item.id" style="text-decoration:none">
                                    <span class="d-flex align-content-end flex-wrap">Xem thêm ....</span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            news: []
        }
    },
    async fetch() {
      this.news = await fetch("http://127.0.0.1:8000/api/posts").then(res => res.json());
      return this.news 
    },
}
</script>
<style scoped>


img {
    object-fit: cover;
    width: 100%;
    min-height: 245px;
}
</style>