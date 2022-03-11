<template>
    <div class="product-list container ">
        <div class="row d-flex justify-content-between">
            <div v-for="(item, index) in products.data" :key="index" class="product-card col-md-3 col-sm-6 col-6 card-group mb-4">
                <div class="card" >
                    <img class="card-img-top" :src=item.image alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title product-name"> 
                            <NuxtLink :to="'/product/' + item.id" style="text-decoration:none">
                                {{item.name}}
                            </NuxtLink>
                        </h5>
                        <p class="card-text product-price">{{formatPrice(item.retail_price)}} VNĐ </p>
                    </div>
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
</template>

<script>
import AddToCart from './AddToCart.vue'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios';
export default {
    props: ['products', 'productId', 'userId'],
    components:{AddToCart},
    // computed: {
    //     fas () {
    //         return fas 
    //     },
    // },
    data() {
        return {
            pagination: {},
            id:'',
            proList:[],
            cart:[],
            price:0,
            total:0,
            err:'',
        }
    },
    // created() {
    //     this.viewProduct();
    // },
    // async fetch() {
    //   this.pagination = await fetch("http://127.0.0.1:8000/api/product/listProduct").then(res => res.json());
    //   return this.pagination
    // },
    // mounted(){
    //     this.list()
    // },
    methods: {
        // async list(page=1){
        //     await axios.get(`http://127.0.0.1:8000/api/product/listProduct?page=${page}`).then(({data})=>{
        //         this.listCategories = data
        //     }).catch(({ response })=>{
        //         console.error(response)
        //     })
        // },
        // viewProduct(pagi){
        //     pagi = pagi || '/api/product/listProduct';
        //     fetch(pagi)
        //     .then(res => res.json())
        //     .then(res => {
        //         this.product = res.data;
        //         this.pagination = {
        //             current_page: res.meta.current_page,
        //             last_page: res.meta.last_page,
        //             from_page: res.meta.from,
        //             to_page: res.meta.to,
        //             total_page: res.meta.total,
        //             path_page: res.meta.path+"?page=",
        //             first_link: res.link.first,
        //             last_link: res.link.last,
        //             prev_link: res.link.prev,
        //             next_link: res.link.next
        //         };
        //     }).catch(err => console.log(err));
        // },


        formatPrice(value) {
            const val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        addToCart() {
            alert("Vui lòng đăng nhập để mua hàng")
            // const response = await axios.post('http://127.0.0.1:8000/api/cart',{
            //     'product_id': (index+1)
            // });

            // this.$root.$emit("changeInCart", response.data.items);
        }  

        
    }
}
</script>
<style scoped>
.card {
    width: 90%;
}

.product-price {
    color: red;
}

@media (max-width: 575.98px)  {
   .product-card{
       padding-right: 0 !important;
       padding-left: 0 !important;
   }

    h5 {
        font-size: 17px;
    }

    .product-price {
        font-size: 12px;
    }

    .product-name {
        font-size: 16px;
    }

    .cart-add {
        height: 30px;
    }

    a {
        font-size: 10px;
    }
}
 .product-name a {
    color: black;
}

@media (max-width: 1199.98px) {
    .product-card {
        padding-left: 20px;
        padding-right: 20px;
    }
}

.size-value {
    border: 0.5px solid black;
    border-radius: 2px;
}

.product-name {
    min-height: 50px;
}

.card-img-top {
    min-height: 187px;
    max-height: 187px;
    object-fit: cover;
}

.product-list {
    position: relative;
}

.card img {
    transition: transform .2s;
}

.card img:hover {
    transform: scale(1.2);
}

</style>