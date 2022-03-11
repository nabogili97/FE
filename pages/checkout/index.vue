<template>
    <div>
        <Menu />
        <Checkout id="checkout" style="margin-top:100px" />
        <Footer />
    </div>
</template>
<script>
import Checkout from '../../components/Checkout.vue'
import Footer from '../../components/Footer.vue'
import Menu from '../../components/Menu.vue'
export default {
  components: { Checkout, Menu, Footer },
    setup() {
        
    },
    data() {
        return{
            
        }

    },
    methods: {
        getCartItems() {

        }
    },
    created() {
        this.getCartItems()
    },
}
</script>
<style scoped>
#checkout {
    margin-top: 85px;
}
</style>
