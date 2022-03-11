<template>
    <div class="register container pt-5 pb-5 mb-5 ">
        <div class="row">
            <div class="register-left col-md-5">
                <img src="https://i.pinimg.com/originals/8a/2e/4c/8a2e4c79a1b9c983dc6bf8d6cbada43a.gif">
            </div>
            <div class="register-right col-md-7 ">
                <form class="pl-4 pr-2 border-left">
                    <h5 class="mb-5">ĐĂNG KÝ</h5>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Họ tên</label>
                        <input v-model="userForm.name" type="text" class="form-control"  aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input v-model="userForm.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Mật khẩu</label>
                        <input v-model="userForm.password" type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Điện thoại</label>
                        <input v-model="userForm.phone" type="text" class="form-control" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Địa chỉ</label>
                        <input v-model="userForm.address" type="text" class="form-control"  aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Giới tính</label>
                       <select v-model="userForm.sex" class="form-control" >
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                        </select>
                    </div>
                    
                    
                    <button @click.prevent="registerUser" type="submit" class="btn btn-primary">Đăng Ký</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    auth: false,

    data() {
        return {
            userForm: {
                name: '',
                email: '',
                password: '',
                phone:'',
                address:'',
                sex:''
            }
        }
    },

    methods: {
        async registerUser() {
            await this.$axios.post('/auth/register', this.userForm)
            this.$auth.loginWith('local',{
                data: this.userForm
            }).then(() => {
                this.$router.push('/product');  
            });
        }
    }
}
</script>

<style scoped>
.register {
    background-color: #233b4f;
    color: #fff;
    margin-top: 100px;
    margin-bottom: 50px;
    padding: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px;
}
.register img {
    width: 100%;
}
</style>