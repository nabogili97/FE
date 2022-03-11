<template>
    <div class="product-detail container-fuild">
        <div class="banner text-center d-flex align-items-center justify-content-center mb-5">
            <h3>CHI TIẾT SẢN PHẨM</h3>
        </div>
        <div v-for="(item, index) in products" :key="index" class="row p-3 mb-5"> 
            <div class="container">
                <div class="row">
                    <div class="col-md-5 col-sm-12 mb-5">
                <img :src=item.image>
            </div>
            <div  class="col-md-7 col-sm-12">
                <div class="product-name">
                    <h2>{{item.name}} </h2> 
                </div>
                <div class="brand">
                    <div class="d-flex">
                        <span><b>Thương Hiệu: </b></span>
                        <div class="ml-5" v-if="item.brand_id === 1 ">Gucci</div>
                        <div class="ml-5" v-else-if="item.brand_id === 2">Nike</div>
                        <div class="ml-5" v-else-if="item.brand_id === 3">Vans</div>
                        <div class="ml-5" v-else-if="item.brand_id === 4">Louis Vuition</div>
                        <div class="ml-5" v-else-if="item.brand_id === 5">Converse</div>
                    </div>
                </div>
                <!-- <div class="star">
                    *****
                </div> -->
                <div class="price">
                   <b>Giá: </b> <b>{{formatPrice(item.retail_price)}} VNĐ</b>
                </div>
                <div class="status mt-3">
                    <b>Trạng thái: </b>
                    <span v-if="item.status = 1"> Còn hàng</span>
                    <span v-else>Hết hàng</span>
                </div>
                <div class="d-flex justify-content-start">
                    <!-- <div class="size mt-2">
                        <b>Size:</b>
                        <span class="box">
                                <select>
                                    <option  v-for="(size, key) in item.size" :key="key" :value="size.size_value">{{size.size_value}}</option>
                                </select>
                        </span>
                    </div> -->
                <!-- <div class="size mt-2 ml-3">
                    <b>Màu:</b>
                    <span class="box">
                         
                            <select>
                                <option  v-for="(color, cokey) in item.color" :key="cokey" :value="color.color_value">{{color.color_value}}</option>
                            </select>
                    </span>
                </div> -->
                </div>
                <div class="description mt-2">
                    <b>Mô tả:</b><br>
                    <p>{{item.description}} </p>
                </div>
                <div class="border-top mt-3">
                    <div class="ml-0 mt-3 mb-3 d-flex justify-content-lg-start">
                        <input class="form-control qty mr-3"  placeholder="0">
                        <div style="width:30%;">
                            <div v-if="$auth.loggedIn" class="d-flex justify-content-center mb-3" style="margin:0 auto;">
                                <AddToCart   :productId="item.id" :userId="$auth.user.id"  />
                            </div>
                            <div v-if="!$auth.loggedIn" style="margin:0 auto;" class="mb-3">
                                <button class="btn btn-primary cart-add"   @click.prevent="addToCart()" >
                                    THÊM GIỎ HÀNG
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
            <div class="col-md-12 border-top">
                <div class="title-card text-center pt-5 pb-5">
                    <h2>SẢN PHẨM LIÊN QUAN</h2>
                    <div class="title-border"></div>
                </div>
                <div class="container">
                    <!-- <div v-for="(item, index) in products" :key="index">
                        <div class="row d-flex justify-content-between">
                            <div v-for="(product, index) in related_products" :key="index" class="product-card col-md-3 col-sm-6 col-6 card-group mb-4">
                                <div v-if="item.brand_id === product.brand_id" class="card" >
                                    <img class="card-img-top" :src=product.image alt="Card image cap">
                                    <div class="card-body">
                                        <h5 class="card-title product-name"> 
                                            <NuxtLink :to="'/product/' + product.id" style="text-decoration:none">
                                                {{product.name}}
                                            </NuxtLink>
                                        </h5>
                                        <p class="card-text product-price">{{formatPrice(product.retail_price)}} VNĐ </p>
                                    
                                        <a href="#" class="btn btn-primary cart-add">THÊM GIỎ HÀNG</a>
                                    </div>
                                </div>
                                <div  v-else-if="item.brand_id != product.brand_id">

                                </div>
                            </div>
                        </div>
                    </div> -->

                    <div class="new-list ">
                        <div v-for="(item, index) in products" :key="index">
                        <VueSlickCarousel v-bind="settings">
                                <div v-for="(product, index) in related_products" :key="index" class="card-deck">
                                    <div v-if="item.brand_id === product.brand_id" class="card card-new" style="width: 18rem;">
                                        <img class="card-img-top" :src=product.image alt="Card image cap">
                                        <div class="card-body">
                                            <NuxtLink :to="'/product/' + product.id" style="text-decoration:none">
                                                <h5 style="text-decoration:none" class="card-title product-name">{{product.name}}</h5>
                                            </NuxtLink>
                                            <p class="card-text product-price mt-3">{{formatPrice(product.retail_price)}} VNĐ </p>
                                            <button class="btn btn-primary cart-add"   @click.prevent="addToCart()" >THÊM GIỎ HÀNG</button>
                                        </div>
                                    </div>
                                </div>
                        </VueSlickCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import AddToCart from '../../components/product/AddToCart.vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    props: ['products', 'productId', 'userId'],
    name: 'MyComponent',
    components: { VueSlickCarousel, AddToCart },
    data() {
        return {
            id:'',
            proList:[],
            cart:[],
            price:0,
            total:0,
            err:'',
            related_products: [],
            settings: {
            arrows:true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        },
        }
    },
    async fetch() {
      this.related_products = await fetch(
        'http://127.0.0.1:8000/api/productLists'
      ).then(res => res.json())
    },
    methods: {

        formatPrice(value) {
            const val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },

        addToCart() {
            alert("Vui lòng đăng nhập để mua hàng")
        } 

    }
}
</script>
<style scoped>
.product-detail img {
    width: 100%;
}

.banner {
    height: 80px;
    background-image:url("https://media.istockphoto.com/vectors/abstract-template-white-and-gray-color-luxury-background-design-vector-id1216756726?k=20&m=1216756726&s=170667a&w=0&h=s7Iol7Sk7Rn7tKBYfNB_OEXlBUmenhSxvV8VEOb8S_0=") ;
}

.qty {
    width: 10%;
}

.price {
    font-size: 30px;
    color: red;
}

.box select {
  background-color: #0563af;
    color: white;
    padding: 5px;
    width: 60px;
    border: none;
    font-size: 14px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    outline: none;
}

.box::before {
  content: "\f13a";
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  text-align: center;
  font-size: 28px;
  line-height: 45px;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.box:hover::before {
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.2);
}

.box select option {
  padding: 30px;
}
.card-img-top {
    min-height: 187px;
    max-height: 187px;
    object-fit: cover;
}

.product-name {
    min-height: 50px;
    color: black;
}

.product-price {
    color: red;
}
</style>