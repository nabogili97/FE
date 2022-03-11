<template>
    <div class="">
        <Menu />
        <div class="container-fuild">
            <div class="row">
                <div class="col-md-12">
                    <div class="banner text-center d-flex align-items-center justify-content-center mb-5">
                        <h3>S H O P</h3>
                    </div>
                </div>
                <div class="col-md-2">
                    <MenuLeft />
                </div>
                <div class="col-md-10">
                    <ProductLists :product="product" />
                </div>
            </div>
        </div>
        
        <Footer />
    </div>
</template>
<script>
import MenuLeft from '../../../components/shop/MenuLeft.vue'
import ProductLists from '../../../components/shop/ProductLists.vue'
import Menu from '../../../components/Menu.vue'
import Footer from '../../../components/Footer.vue'
export default {
    components: { Menu, MenuLeft, Footer, ProductLists },
    data() {
        return {
            product: [],
            id: this.$route.params.id,
        }
    },
    methods: {
        async findproductByBrand() {
        this.product = await this.$axios.$get("http://127.0.0.1:8000/api/productLists/brand/" + this.id)
        }
    },
    mounted() {
        this.findproductByBrand()
    }
    
       
}
</script>
<style scoped>
.banner {
    margin-top:100px;
    height: 80px;
    background-image:url("https://media.istockphoto.com/vectors/abstract-template-white-and-gray-color-luxury-background-design-vector-id1216756726?k=20&m=1216756726&s=170667a&w=0&h=s7Iol7Sk7Rn7tKBYfNB_OEXlBUmenhSxvV8VEOb8S_0=") ;
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