<template>
    <div class="profile-main">
        <Menu />
        <div class="profile">
            <Profile />
        </div>
        <Footer />
    </div>
</template>
<script>
import Profile from '../../components/user/profile.vue'
import Menu from '../../components/Menu.vue'
import Footer from '../../components/Footer.vue'
export default {
    components:{Profile, Menu, Footer},
    setup() {
        
    },
}
</script>
<style scoped>
.profile {
    margin-top: 100px;
    margin-bottom: 100px;
}

.profile-main {
    background-color: #fcfcfc;
}
</style>