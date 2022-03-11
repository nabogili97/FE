<template>
    <div class="edit-profile">
        <div class="row">
            <div class="col-md-12">
                <div class="banner text-center d-flex align-items-center justify-content-center mb-5">
                    <h4>THÔNG TIN CÁ NHÂN</h4>
                </div>
            </div>
            <form class="profile"  >
                <div class="container ">
                    <div class="row p-5">
                        <div class="col-md-4 img-user">
                            <img src="../../assets/images/avt.png">
                        </div>
                        <div class="col-md-8 ">
                            <form>
                                <p v-if="error.length > 0">
                                    <ul>
                                        <li class="text-danger" v-for="(aleft, index) in error" :key="index">{{ aleft }}</li>
                                    </ul>
                                </p>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Tên : </label>
                                    <input type="text" class="form-control"  v-model="user.name" >
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Email : </label>
                                    <input type="text" class="form-control"  v-model="user.email" >
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Điện thoại : </label>
                                    <input type="text" class="form-control"  v-model="user.phone" >
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Địa chỉ : </label>
                                    <input type="text" class="form-control"  v-model="user.address" >
                                </div>
                                <div class="form-group row">
                                    <label for="inputEmail3" class="col-sm-3 col-form-label">Giới tính : </label>
                                    <div class="col-sm-9">
                                        <select v-model="user.sex" class="custom-select custom-select-sm">
                                            <option value="0"> Nam</option>
                                            <option value="1">Nữ</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-submit">
                                    <div class="form-group text-center p-3">
                                        <button class="btn btn-success" @click.prevent="submitData">Lưu</button>
                                        <button class="btn btn-primary"  @click.prevent="cancel">Hủy</button>
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    // props:{
    //     user: {
    //         type: Array,
    //         default: () => []
    //     },
    // },
    data() {
        return {
            id: this.$route.params.id,
            error: [],
            userId: this.$route.params.edit,
            user: {
                name: '',
                email: '',
                sex:'',
                address:'',
                phone:'',
                role: 1,
                status:1,
            },
        }
    },
    methods: {
        async submitData() {
            this.error = [];
            // this.user.role = Number(this.user.role)
            // this.user.sex = Number(this.user.sex)

            if (!this.user.name) {
                this.error.push("Tên không được để trống");
            }

            if (!this.user.email) {
                this.error.push("Email không được để trống");
            }

            if (!this.user.phone) {
                this.error.push("Điện thoại không được để trống");
            }

            if (!this.user.address) {
                this.error.push("Địa chỉ không được để trống");
            }

            if (!this.user.sex) {
                this.error.push("Giới tính không được để trống");
            }

            if (!this.error.length) {
                if (this.id) {
                    await this.$axios.$put('http://127.0.0.1:8000/api/users/update/' + this.id, this.user)
                    location.reload();
                    return this.$router.push('/user/profile')
                }
            }  
        },

        cancel() {
           return this.$router.push('/user/profile')
        },
    }
}
</script>
<style scoped>
.banner {
    height: 80px;
    background-image:url("https://media.istockphoto.com/vectors/abstract-template-white-and-gray-color-luxury-background-design-vector-id1216756726?k=20&m=1216756726&s=170667a&w=0&h=s7Iol7Sk7Rn7tKBYfNB_OEXlBUmenhSxvV8VEOb8S_0=") ;
}
.img-user img {
    width: 100%;
}

.profile {
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px, rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset;
   
}

.edit-profile {
    margin-top: 80px;
    margin-bottom: 30px;
}
</style>