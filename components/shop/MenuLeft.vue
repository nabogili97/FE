<template>
    <div class="shop container-fluid">
        <div class="row">
            <div class="">
                <div class="pl-5 mb-5">
                    <div class="brand mt-3">
                        <div class="border-bottom pr-2">
                            <h5><b>DANH MỤC</b></h5>
                        </div>
                        <div class="brand-list mt-2 mb-5">
                            <div  v-for="(item, index) in categories.data" :key="index" class="form-check">
                                <NuxtLink :to="'/product/cate/' + item.id" style="text-decoration:none;">
                                    <p>
                                        {{item.name}}
                                    </p>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="brand mt-3">
                        <div class="border-bottom pr-2">
                            <h5><b>THƯƠNG HIỆU</b></h5>
                        </div>
                        <div class="brand-list mt-2 mb-5">
                            <div  v-for="(item, index) in brands.data" :key="index" class="form-check">
                                <NuxtLink :to="'/product/brand/' + item.id" style="text-decoration:none">
                                    <p>
                                        {{item.name}}
                                    </p>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="color mb-5">
                        <div class="border-bottom">
                            <h5><b>MÀU SẮC</b></h5>
                        </div>
                        <div  v-for="(color, index) in colors.data" :key="index" class="form-check">
                                <NuxtLink :to="'/product/color/' + color.id" style="text-decoration:none">
                                    <p>
                                        {{color.color_value}}
                                    </p>
                                </NuxtLink>
                            </div>
                    </div>
                    <div class="price">
                        <div>
                            <h5><b>Giá</b></h5>
                        </div>
                        <div>
                            <form>
                                <div class="form-row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="0">
                                    </div>
                                    <div class="pt-1">
                                        <span>~</span>
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="1000">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            categories: [],
            brands: [],
            colors: []
        }
    },
    async fetch() {
      this.categories = await fetch(
        'http://127.0.0.1:8000/api/categories'
      ).then(res => res.json());

      this.brands = await fetch(
        'http://127.0.0.1:8000/api/brands'
      ).then(res => res.json());

      this.colors = await fetch(
        'http://127.0.0.1:8000/api/colors'
      ).then(res => res.json());

    },
  
}
</script>
<style scoped>
.banner {
    height: 100px;
    background-color: #d9d9d9;
}

.title-card h2 {
    letter-spacing: 3px;
}

.title-border {
  height: 2px;
  width: 15%;
  background-color: black;
  margin: auto;
}
</style>