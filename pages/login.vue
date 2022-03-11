<template>
    <div>
         <Menu />
         <div class="register container pt-5 pb-5 mb-5 login">
            <div class="row">
                <div class="register-left col-md-5">
                    <img src="https://images-cdn.newscred.com/Zz04NjA3ZjljMjQ0ODkxMWViOWRjYzU1OGJkNjI1ZjVkZA==">
                </div>
                <div class="register-right col-md-7 ">
                    <form   class="pl-4 pr-2 border-left">
                        <h5 class="mb-5">ĐĂNG NHẬP</h5>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input v-model="userForm.email" type="email" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Mật khẩu</label>
                            <input v-model="userForm.password"  type="password" class="form-control" >
                        </div>
                        <div class="mb-5">
                            <a href="/register">Đăng ký</a>
                        </div>
                        <!-- <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" >
                            <label class="form-check-label" for="exampleCheck1">Ghi nhớ mật khẩu</label>
                        </div> -->
                        <button @click.prevent="loginUser" type="submit" class="btn btn-primary" >Đăng Nhập</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Menu from '../components/Menu.vue'
import Footer from '../components/Footer.vue'
export default {
     components: { Menu, Footer },
    data() {
        return {
            userForm: {
                email: '',
                password: ''
            },
            user : [],
            isLogin : ''
            
        }
    },

    methods: {
        // async loginUser() {
        //     // if(this.login.email.trim() == '') return this.e('Vui lòng điền email !')
        //     // if(this.login.password.trim() == '') return this.e('Vui lòng điền mật khẩu !')
        //     // if(this.login.password.length < 6 ) return this.e('Mật khẩu quá ngắn !')
        //     this.isLogin = true
        //     const response = this.user = await this.$axios.$post('http://127.0.0.1:8000/api/auth/login', this.login)

        //     this.isLogin = false

        //     console.log('data-------------------',this.user)
        //     this.$root.$emit("userLogin", response.data);

        //     // return this.$router.push('/')
        // }

        async loginUser() {
        // đoạn code này sẽ tự động gọi đến endpoint login mà chúng ta đã define trong phần nuxt.config.js
        await this.$auth.login({
            data: this.userForm
        }).then(() => this.$router.push('/product')); // muốn dùng được đoạn này thì cài thêm vue-router nhé
    }


        
    },
}
</script>

<style scoped>
.register {
    color: #fff;
    background-color: #321d61;
    margin-top: 20px;
    padding: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px;
}
.register img {
    width: 100%;
}

.login {
    margin-top: 150px;
}
</style>