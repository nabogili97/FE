<template>
    <div class="register container pt-5 pb-5 mt-5 mb-5">
        <div class="row">
            <div class="register-left col-md-5">
                <img src="../assets/images/background/bg-login.png">
            </div>
            <div class="register-right col-md-7 ">
                <form @submit.prevent="loginUser"    class="pl-4 pr-2 border-left">
                    <h5 class="mb-5">ĐĂNG NHẬP</h5>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input v-model="email" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Mật khẩu</label>
                        <input v-model="password"  type="password" class="form-control" >
                    </div>
                    <!-- <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" >
                        <label class="form-check-label" for="exampleCheck1">Ghi nhớ mật khẩu</label>
                    </div> -->
                    <button   type="submit" class="btn btn-primary"  @click.prevent="loginUser">Đăng Nhập</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: {
                email: '',
                password: '',
            },
            isLogin: false
            
        }
    },

    methods: {
    
    async loginUser() {
      await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          },
        })
        return this.$router.push('/product')
    },
  },
}
</script>

<style scoped>
.register {
    margin-top: 20px;
    padding: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px;
}
.register img {
    width: 100%;
}
</style>