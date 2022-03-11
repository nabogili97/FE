<template>
    <div class="">
        <Menu />
        <div class="profile">
            <OrderList :orderLists="orderLists" :products="products" />
        </div>
        <Footer />
    </div>
</template>
<script>

import OrderList from '../../components/user/OrderList.vue'
import Menu from '../../components/Menu.vue'
import Footer from '../../components/Footer.vue'
export default {
    components:{OrderList, Menu, Footer},
    data() {
        return {
            orderLists:'',
            products:''
        }
    },

   async fetch() {
        this.orderLists = await fetch('http://127.0.0.1:8000/api/orderList').then(res =>
      res.json())
    },

    methods: {
         converOrder() {
            const res  = this.$axios.$get('http://127.0.0.1:8000/api/orderList').then(res =>res.json())
            return res.order_details
        }
    },
}
</script>
<style scoped>
.profile {
    margin-top: 100px;
    margin-bottom: 100px;
}
</style>