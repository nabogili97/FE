<template>
    <div class="search-fomr">
        <input v-model="search" class="form-control" type="text" placeholder="Search">
        <button type="button" class="btn btn-sm btn-info mt-2 mb-3"  @click="searchProduct" >Tìm kiếm</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
        search: '',
        listSearch:''
        }
  },

  methods: {
    searchProduct() {
        this.$emit("search",this.search);
    },
  }
}
</script>
<style scoped>
.search-fomr {
   margin-left: 50px;
}
</style>