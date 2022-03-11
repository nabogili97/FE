<template>
    <div class="cart container-fulid mb-5">
        <div class="row">
            <div class="col-md-12">
                <div class="banner text-center d-flex align-items-center justify-content-center mb-5">
                    <h3>GIỎ HÀNG</h3>
                </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-7 ">
                <h4 class="p-3">Chi tiết giỏ hàng</h4>
                <table class="table product-list text-center  table-striped">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Ảnh</th>
                            <th scope="col">Tên sản phẩm</th>
                            <!-- <th scope="col">Size</th> -->
                            <th scope="col">Số lượng</th>
                            <th scope="col">Giá</th>
                            <!-- <th scope="col">Thao tác</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items" :key="item.id">
                            <th scope="row" v-if="item.name">{{item.id}}</th>
                            <td v-if="item.name">
                                <div class="d-flex justify-content-lg-start ">
                                    <div class="img">
                                        <img :src="item.img">
                                    </div>
                                </div>
                            </td>
                            <td v-if="item.name">
                                <span>{{item.name}}</span>
                            </td>
                            <!-- <td v-if="item.name">
                                <span>40</span>
                            </td> -->
                            <td v-if="item.quantity">
                                 <span>{{item.quantity}}</span>
                            </td>
                            <td v-if="item.retail_price">
                               {{formatPrice(item.retail_price)}}
                            </td>
                            <!-- <td v-if="item.name">
                                <button type="button" class="btn btn-primary btn-sm" @click="onDelete(item.id)">
                                    Xóa
                                </button>
                            </td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
            <div   class="col-md-3 border bill">
                <h4 class="p-3 text-center border-bottom">HÓA ĐƠN</h4>
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
                <!-- <div class=" border-bottom mt-3 pb-3">
                    <b>Mã giảm giá:</b>
                    <div>
                        <input class="form-control">
                    </div>
                    <div>
                        <button type="button" class="btn btn-danger mt-1">Áp dụng</button>
                    </div>
                </div> -->
                <div class="d-flex justify-content-between pb-3 mt-3">
                    <div>
                        <b>Tổng tiền: </b>
                    </div>
                    <div >
                       <b>{{formatPrice(items.totalAmount)}} VNĐ</b>
                    </div>
                </div>
                <div class="d-flex justify-content-center mb-3">
                    <a href="/checkout"  class="btn btn-primary" >THANH TOÁN</a>
                    
                </div>
            </div>
            <div class="col-md-1"></div>
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
            itemCount: '',
            items:[],
            user_id: 1 ,
        }
    },

    mounted() {
        this.$root.$on('changeInCart', (item) => {
            this.itemCount = item;
        })
    },

    methods: {
        async getCartitem() {
            const response = await axios.get('http://127.0.0.1:8000/api/checkout/get/items',{
                'user_id':this.user_id
            });
            this.items = response.data
        },
        formatPrice(value) {
            const val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        async onDelete(id) {
            if (confirm('Bạn có muốn xóa sản phẩm ? ')) {
                await this.$axios.$delete("http://127.0.0.1:8000/api/removeItemOrder/" + id)
                location.reload();
            }
        },
    },

    created() {
        this.getCartitem();
    },
}
</script>
<style scoped>
.banner {
    height: 80px;
    background-image:url("https://media.istockphoto.com/vectors/abstract-template-white-and-gray-color-luxury-background-design-vector-id1216756726?k=20&m=1216756726&s=170667a&w=0&h=s7Iol7Sk7Rn7tKBYfNB_OEXlBUmenhSxvV8VEOb8S_0=") ;
}

.product-list img {
    width: 80px;
    height: auto;
    object-fit: cover;
}

.product-qty  input{
    width: 50%;
}

.bill {
    background-color: #fafafa;
}

.product-name {
    max-width: 170px;
}

</style>