<template>
    <div class="">
        <Menu    />
        <div class="col-md-12">
                <div class="banner text-center d-flex align-items-center justify-content-center mb-5">
                    <h3>MUA SẮM</h3>
                </div>
        </div>
        <div class="row main-product">
            <div class="col-md-2">
                <ProductSearchForm v-on:search="searchProduct"   />
                <MenuLeft />
            </div>
            <div class="col-md-10">
                <Product :products="products" />
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
// import Shop from '../../components/Shop.vue'
import ProductSearchForm from '../../components/shop/ProductFormSearch.vue'
import MenuLeft from '../../components/shop/MenuLeft.vue'
// import Menu from '../../components/Menu.vue'
import Product from '../../components/product/ProductList.vue'
import Footer from '../../components/Footer.vue'
export default {
    components: {  MenuLeft, Footer,Product, ProductSearchForm  },
    data() {
        return {
            products:[],
            search: " ",
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
    
       
}
</script>
<style scoped>
#shop {
    margin-top:85px
}

.banner {
    margin-top:100px;
    height: 80px;
    background-image:url("https://media.istockphoto.com/vectors/abstract-template-white-and-gray-color-luxury-background-design-vector-id1216756726?k=20&m=1216756726&s=170667a&w=0&h=s7Iol7Sk7Rn7tKBYfNB_OEXlBUmenhSxvV8VEOb8S_0=") ;
}
</style>