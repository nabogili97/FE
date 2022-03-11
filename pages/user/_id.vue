<template>
    <div>
        <Menu />
        <user-form-edit />
        <Footer />
    </div>
</template>
<script>
import Menu from '../../components/Menu.vue'
import Footer from '../../components/Footer.vue'
import UserFormEdit from '../../components/user/UserFormEdit.vue'
export default {
    components: {Menu, Footer, UserFormEdit},
    data() {
        return {
            user: [],
            edit:true,
            id: this.$route.params.id,
        };
    },

   methods: {
    async findUserById() {
         this.user = await this.$axios.$get("http://127.0.0.1:8000/api/users/show/" + this.id)
    }
   },
    mounted() {
        this.findUserById()
    }
}
</script>
<style scoped>
.product-detail {
    margin-top:150px;
}
</style>