<template>
    <div>
        <Menu />
        <ProductDetail :products="products" class="product-detail"   />
        <Footer />
    </div>
</template>
<script>
import Menu from '../../components/Menu.vue'
import Footer from '../../components/Footer.vue'
import ProductDetail from '../../components/product/ProductDetail.vue'
export default {
    components: {Menu, ProductDetail, Footer},
    data() {
        return {
            id: this.$route.params.id,
            products: [],
            brands:[],
        }
    },

    async fetch() {
      this.brands = await fetch("http://127.0.0.1:8000/api/brands").then(res => res.json());
      return this.brands 
    },

    
    methods: {
        async findproductById() {
        this.products = await this.$axios.$get("http://127.0.0.1:8000/api/product/show/" + this.id)
        }
    },
    mounted() {
        this.findproductById()
    }
}
</script>
<style scoped>
.product-detail {
    margin-top:80px;
}
</style>