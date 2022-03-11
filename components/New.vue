<template>
    <div class="new container">
        <div class="new-list ">
             <VueSlickCarousel v-bind="settings">
                    <div v-for="(item, index) in news.data" :key="index" class="card-deck">
                        
                            <div class="card card-new" style="width: 18rem;">
                                <img class="card-img-top" :src=item.img alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">{{item.title}}</h5>
                                    <p class="card-text card-content mt-3">{{item.content}}</p>
                                    <NuxtLink :to="'/post/' + item.id" style="text-decoration:none">
                                        <a href="#" class="mt-3">Xem thêm</a>
                                    </NuxtLink>
                                </div>
                            </div>
                    </div>
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'MyComponent',
    props:['news'],
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        },
      }
    },
    // async fetch() {
    //   this.news = await fetch("http://127.0.0.1:8000/api/posts").then(res => res.json());
    //   return this.news
    // },
  }
</script> 

<style scoped>
.card-title {
    display: block;
    display: -webkit-box;
    max-width: 100%;
    height: 30px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 1;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card-content {
    display: block;
    display: -webkit-box;
    max-width: 100%;
    height: 48px;
    margin: 0 auto;
    font-size: 12px;
    line-height: 1;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

img {
    height: 200px;
    width: auto;
    object-fit: cover;
}

.card-new p {
    text-align: justify;
}
</style>