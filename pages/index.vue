<template>
  <div class="pt-4 container-fluid">
    <Menu class="mb-5" />
    <Slide class="mt-5" />
    <service />
    <div class="title-card text-center pt-5 pb-5">
        <h2>SẢN PHẢM MỚI</h2>
        <div class="title-border"></div>
    </div>
    <product-list :products="products"  />
    <div class="title-card text-center pt-5 pb-5">
        <h2>TIN TỨC MỚI NHẤT</h2>
        <div class="title-border"></div>
    </div>
    <New class="mb-5" :news="news" />
    <Footer />
  </div>
</template>

<script>
// import axios from 'axios';
import Footer from '../components/Footer.vue'
import Menu from '../components/Menu.vue'
import New from '../components/New.vue'
import ProductList from '../components/product/ProductList.vue'
import Service from '../components/Service.vue'
import Slide from '../components/Slide.vue'
export default {
  components: { Menu, Slide, Service, ProductList, New, Footer },
     data() {
    return {
      products: [],
      sizes:[],
      news:[]
    }
  },

  
    mounted () {
      this.fetch()
    },
    
    methods: {
        async fetch(page) {
        if (typeof page === "undefined") {
          page = 1;
        }
            this.products = await fetch("http://127.0.0.1:8000/api/product/listProduct?page=" + page + "&limit=5").then(res => res.json());
 
        },


        searchProduct(keywork) {
            this.$axios.$get('http://127.0.0.1:8000/api/product/listProduct?name='+ keywork)
                .then(res => {
                this.products = res;
                })
            },
    },
  async fetch() {
      this.products = await fetch("http://127.0.0.1:8000/api/productLists").then(res => res.json());
      this.news = await fetch("http://127.0.0.1:8000/api/posts").then(res => res.json());
      return this.products
    },

  //  mounted () {
  //    axios
  //     .get('http://127.0.0.1:8000/api/posts')
  //     .then(response => (this.test = response.data));
  // }
}
</script>
<style scoped>
.title-card h2 {
    letter-spacing: 3px;
}

.title-border {
  height: 2px;
  width: 15%;
  background-color: black;
  margin: auto;
}

</style>
