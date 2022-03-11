<template>
    <div>
         <button class="btn btn-primary cart-add" @click.prevent="addToCart()" >THÊM GIỎ HÀNG</button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props: ['products', 'productId', 'userId'],
    setup() {
        
    },
    data() {
        return {
            pagination: {},
            proList:[],
            cart:[],
            price:0,
            total:0,
            err:''
        }
    },
    methods: {
        async addToCart() {
             
            

            // if(!this.userId) {
            //     alert("Vui long dang nhap")
            // } else {
            //     alert(this.userId)
            // }
            
            const response = await axios.post('http://127.0.0.1:8000/api/cart',{
                'product_id': this.productId,
                'user_id': this.userId
            });
            
            this.$root.$emit("changeInCart", response.data.items);
            alert("Thêm giỏ thành công")
        }
    },
}
</script>