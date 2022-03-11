<template>
    <div class="product-list container">
        <div class="row d-flex justify-content-between">
            <div v-for="(item, index) in product" :key="index" class="product-card col-md-3 col-sm-6 col-6 card-group mb-4">
                <div class="card" >
                    <img class="card-img-top" :src=item.image alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title product-name"> <NuxtLink :to="'/product/' + item.id" style="text-decoration:none">{{
                  item.name
                }}</NuxtLink>
                   
                        
                        </h5>
                        <p class="card-text product-price">{{formatPrice(item.retail_price)}} VNĐ </p>
                       
                        <a href="#" class="btn btn-primary cart-add">THÊM GIỎ HÀNG</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
export default {
    props: ['product'],
    computed: {
        fas () {
            return fas 
        },
      },
      methods: {
    formatPrice(value) {
        const val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
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

</style>