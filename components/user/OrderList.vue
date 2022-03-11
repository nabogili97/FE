<template>
    <div class="cart container-fulid mb-5">
        <div class="row">
            <div class="col-md-12">
                <div class="banner text-center d-flex align-items-center justify-content-center mb-5">
                    <h3>DANH SÁCH ĐƠN HÀNG</h3>
                </div>
            </div>
            <div class="container">
                 <div class="col-md-12 card p-0 table-order">
                <table class="table product-list text-center  table-striped">
                    <thead>
                        <tr>
                            <th >STT</th>
                            <th >Sản phẩm</th>
                            <th >Địa chỉ</th>
                            <th >Tổng tiền</th>
                            <th >Ngày đặt</th>
                            <th >Trang thái</th>
                            <!-- <th scope="col">Thao tác</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in orderLists" :key="index" >
                            <th scope="row" >{{index+1}}</th>
                            <td class="list-product"> 
                                <ul v-for="(item, index) in JSON.parse(item.order_details)" :key="index" >
                                    <li class="d-flex justify-content-start">
                                        <div>
                                            <img :src="item.img">
                                        </div>
                                        <div class="pl-3">
                                            {{item.name}}
                                        </div>
                                    </li>
                                </ul>
                            </td>
                            <td class="text-left">
                                {{item.address}}
                            </td>
                            <td >
                                {{formatPrice(item.amount) }} VNĐ
                            </td>
                            <td >
                                {{item.created_at}}
                            </td>
                            <td style="color:blue;">
                                <div  v-if="item.status == 0">
                                    Đang xử lý
                                </div>
                                <div v-if="item.status == 1">
                                    Đã xác nhận 
                                </div>
                                <div v-if="item.status == 2">
                                    Đang giao hàng
                                </div>
                                <div v-if="item.status == 3" >
                                    Đã giao hàng
                                </div>
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
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['orderLists'],
    setup() {
        
    },
    data() {
        return {
            user_id: 1 ,
        }
    },

    mounted() {

    },

    methods: {
        formatPrice(value) {
            const val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
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

.list-product ul li {
    text-decoration: none;
    list-style: none;
    text-align: left;
}

.table-order {
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
}
</style>