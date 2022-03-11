<template>
    <div class="cart container-fulid mb-5">
        <div class="row">
            <div class="col-md-12">
                <div class="banner text-center d-flex align-items-center justify-content-center mb-5">
                    <h4>THÔNG TIN CÁ NHÂN</h4>
                </div>
            </div>
            <div class="profile">
                <div class="container ">
                    <div class="row p-5">
                        <div class="col-md-4 img-user border-right">
                            <img src="https://cdna.artstation.com/p/assets/images/images/040/951/926/original/maddie_creates-jj-ver2.gif?1630351796">
                        </div>
                        <div class="col-md-8 pl-5 ">
                            <div>
                                <b>Họ tên :</b><p v-if="$auth.loggedIn" > {{ $auth.user.name }}</p>
                            </div>
                            <div>
                                 <b>Email :</b><p v-if="$auth.loggedIn" > {{ $auth.user.email }}</p>
                            </div>
                            <div>
                                 <b>Điện thoại :</b><p v-if="$auth.loggedIn" > {{ $auth.user.phone }}</p>
                            </div>
                            <div>
                                <b>Giới tính :</b>
                                <div v-if="$auth.loggedIn" >
                                    <p v-if="$auth.user.sex === 1 ">
                                        Nam
                                    </p>
                                    <p v-if="$auth.user.sex === 0 ">
                                        Nữ
                                    </p>
                                </div>
                            </div>
                            <div>
                                <b>Địa chỉ :</b><p v-if="$auth.loggedIn" > {{ $auth.user.address }}</p>
                            </div>
                            <div>
                                <NuxtLink
                                :to="'/user/' + $auth.user.id"
                                class="btn btn-info btn-sm"
                                >
                                    Chỉnh sửa
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
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

.img-user img {
    width: 100%;
}

.profile {
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
   box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px;
   
}
</style>