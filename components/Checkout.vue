<template>
    <div class="register container pt-5 pb-5 mb-5">
        <div class="row">
            <div class=" col-md-7 border-right">
               <form class="pl-4 pr-2">
                    <h5 class="mb-5">Thông tin vận chuyển</h5>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Tên</label>
                        <input type="text" v-model="name" class="form-control" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Số điện thoại</label>
                        <input type="text" v-model="phone" class="form-control" >
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="email" v-model="email" class="form-control" >
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Địa chỉ</label>
                        <input type="text" v-model="address" class="form-control">
                    </div>
                    <button type="submit" v-on:click.prevent="getUserAddress()" class="btn btn-primary">Đặt hàng</button>
                </form>
            </div>
            <div class="col-md-5 ">
                <form class="pl-4 pr-2 ">
                    <h5 class="mb-5">Chi tiết hóa đơn</h5>
                    <div v-for="sumitem in items" :key="sumitem.id">
                        <div class="d-flex justify-content-between pb-2 border-bottom">
                            <div v-if="sumitem.name" class="product-name">
                                {{sumitem.name}}
                            </div>
                            <div v-if="sumitem.name"  class="total text-right">
                                <b>{{formatPrice(sumitem.total)}}</b>
                                <p>
                                    SL: {{sumitem.quantity}} x 
                                    Giá: {{formatPrice(sumitem.retail_price)}}
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="d-flex justify-content-between pb-3 mt-3">
                    <div>
                        <b>Tổng tiền: </b>
                    </div>
                    <div >
                       <b>{{formatPrice(items.totalAmount)}} VNĐ</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    setup() {
        
    },
    data() {
        return {
            items:[],
            name:'',
            phone:'',
            address:'',
            email:''
        }
    },
    mounted() {
        this.$root.$on('changeInCart', (item) => {
            this.itemCount = item;
        })
    },

    methods: {
        async getCartitem() {
            const response = await axios.get('http://127.0.0.1:8000/api/checkout/get/items');
            this.items = response.data


        },

        formatPrice(value) {
            const val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        
        async getUserAddress() {
            if(this.name !== '' && this.phone !== '' && this.address !== '') {
                const response = await axios.post('http://127.0.0.1:8000/api/payment',{
                'name':this.name,
                'phone':this.phone,
                'address':this.address,
                'email':this.email,
                'order':this.items,
                'amount':this.items.totalAmount
            });

            console.log(response.data);
            alert('Đặt hàng thành công')
            return this.$router.push('/user/order_list')
            }
        }
    },

    created() {
        this.getCartitem();
    },
}
</script>

<style scoped>
.register {
    margin-top: 20px;
    padding: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px;
}
.register img {
    width: 100%;
}
.product-name {
    max-width: 230px;
}
</style>