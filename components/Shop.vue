<template>
    <div class="shop container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="banner text-center d-flex align-items-center justify-content-center mb-5">
                    <h3>S H O P</h3>
                </div>
            </div>
            <div class="col-md-2 border-right">
                <MenuLeft />
            </div>
            <div class="col-md-10">
                <product-list :products="products" />
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import MenuLeft from '../components/shop/MenuLeft.vue'
import ProductList from './product/ProductList.vue'
export default {
     components: {  ProductList, MenuLeft},
    data() {
        return {
            products: [],
            news: []
        }
  },

//    async fetch() {
//       this.products = await fetch("http://127.0.0.1:8000/api/productLists").then(res => res.json());
//       return this.products 
//     }, 

    mounted(){
        this.list()
    },


    methods: {
        async list(page=1){
            await axios.get(`http://127.0.0.1:8000/api/product/listProduct?page=${page}`).then(({data})=>{
                this.products = data.data
                console.log( 'data------------------->',this.products)
            }).catch(({ response })=>{
                console.error(response)
            })
        },

        // async fetch(page) {
        //     if (typeof page === "undefined") {
        //     page = 1;
        //     }
        //     const res = this.cate = await fetch("http://127.0.0.1:8000/api/product/listProduct?page=" + page + "&limit=12").then(res => res.json());
        //     return this.listCategories = res.data.sort((a,b)=>a.weight<b.weight?1:-1) 
        // },

        searchProduct(keywork) {
            this.loading = true
            this.$axios.$get('http://127.0.0.1:8000/api/categories?name='+ keywork)
            .then(res => {
                this.listCategories = res.data;
            })
            this.loading = false
        },
    },
}
</script>
<style scoped>
.banner {
    height: 100px;
    background-color: #d9d9d9;
}

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