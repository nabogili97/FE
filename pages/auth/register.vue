<template>
    <div class=" mt-5 mb-5">
        <Menu />
        <Register class=" mb-5" />
        <Footer />
    </div>
</template>
<script>
import Register from '../../components/Register.vue'
import Menu from '../../components/Menu.vue'
import Footer from '../../components/Footer.vue'
export default {
  components: { Register, Menu, Footer },
    setup() {
        
    },
}
</script>