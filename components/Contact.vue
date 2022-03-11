<template>
    <div class="contact container-fluid">
        <div class="row">
            <div class="bg-contact col-md-12">
                <img src="../assets/images/slide1.png">
            </div>
            <div class="col-md-12 mt-5">
                <h3 class=" text-center">CONTACT</h3>
            </div>
            <div class="container mt-5 mb-5 contact-cards">
                <div class="row">
                    <div class="col-md-5 p-0">
                        <div class="contact-card">
                            <h4 class="mb-5">Contact</h4>
                            <div class="mail mb-5">
                                <b>BY MAIL</b>
                                <p>Ngocuong691@gmail.com</p>
                            </div>
                            <div class="social  mb-5">
                                <b>Social</b>
                                <div class="d-flex justify-content-start">
                                    <div class="pr-3">Zalo  </div>
                                    <div class="pr-3">Youtube  </div>
                                    <div>Facebook</div>
                                </div>
                            </div>
                            <div class="description mb-5 pl">
                                <b>BY FORM</b>
                                <p>sadsa asd asd as ddas dsad sad asd asd sad asd asd sadas as dad </p>
                            </div>
                            <div class="address">
                                <b>Địa chỉ:</b>
                                <p>Tổ 5, Quang Minh, Mê Linh, Hà Nội</p>
                            </div>
                        </div>
                    </div>
            <div class="col-md-7 mt-5 ">
                <form class="pl-3 pr-3 pb-3">
                    <div v-if="loading" class="center">
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                    </div>
                    <!-- <div v-if="loading"  class="spinner-border text-info">
                        <div class="loading-page "/>
                    </div> -->
                     <div v-if="notification" class="alert alert-success" role="alert">Gửi Mail thành công !!!</div>
                     <p v-if="error.length > 0">
                        <ul>
                            <li class="text-danger" v-for="(aleft, index) in error" :key="index">{{ aleft }}</li>
                        </ul>
                    </p>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Họ tên</label>
                        <input v-model="form.name" type="text" class="form-control" id="formGroupExampleInput" placeholder="Ngô Thế Cường">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email </label>
                        <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="abc@gmail.com">
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Điện thoại </label>
                        <input v-model="form.phone" type="text" class="form-control"   placeholder="0326966656">
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Nội dung </label>
                        <textarea v-model="form.message" class="form-control box-text" />
                    </div>
                    <button type="submit" class="btn btn-primary"  @click.prevent="sendMailContact()" >Gửi</button>
                </form>
            </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data () {
        return {
            form: {
                name: '',
                email: '',
                message: '',
                phone:''
            },
            notification: false,
            error: [],
            loading: false,
        }
    },

    methods: {
        sendMailContact () {
            this.error = [];

            if (!this.form.name) {
                this.error.push("Họ tên không được để trống.");
            }

            if (!this.form.email) {
                this.error.push("Email không được để trống.");
            }

            if (!this.form.phone) {
                this.error.push("Điện thoại không được để trống.");
            }

            if (!this.form.message) {
                this.error.push("Nội dung không được để trống.");
            }

            if (!this.error.length) {
                this.notification = false;
                this.loading = true;
                axios.post('http://127.0.0.1:8000/api/mail-contact', {
                'name': this.form.name,
                'email': this.form.email,
                'phone': this.form.phone,
                'message': this.form.message,
                }).then(res=> {
                    this.notification = true;
                    this.loading = false;
                    this.form.name = '';
                    this.form.email = '';
                    this.form.phone = '';
                    this.form.message = '';
                    console.log(res)
                }).catch(e => {
                    this.loading = false;
                    console.log(e)
                })
                
            }  
            
        }
  }
}
</script>
<style scoped>
.contact img {
    max-height: 250px;
    width: 100%;
    object-fit:cover;
}

.contact-cards {
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
}

.contact-card {
    background-color: #f0eee3;
    opacity: 0.5;
    padding: 30px;

}

.box-text {
    height: 180px;
}

.alert {
  width: 100%;
  padding: 12px 16px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 12px;
  font-size: 16px;
}

.alert.alert-success {
  background-color: rgba(227, 253, 235, 1);
  border-color: rgba(38, 179, 3, 1);
  color: rgba(60, 118, 61, 1);
}

.alert.alert-info {
  background-color: rgba(217, 237, 247, 1);
  color: rgba(49, 112, 143, 1);
  border-color: rgba(126, 182, 193, 1);
}


.alert.alert-warning {
  background-color: rgba(252, 248, 227, 1);
  border-color: rgba(177, 161, 129, 1);
  color: rgba(138, 109, 59, 1);
}

.alert.alert-danger {
  background-color: rgba(248, 215, 218, 1);
  border-color: rgba(220, 53, 69, 1);
  color: rgba(114, 28, 36,1);
}

  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
  }

.center {
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wave {
  width: 5px;
  height: 50px;
  background: linear-gradient(45deg, red, #fff);
  margin: 10px;
  animation: wave 1s linear infinite;
  border-radius: 20px;
}
.wave:nth-child(2) {
  animation-delay: 0.1s;
}
.wave:nth-child(3) {
  animation-delay: 0.2s;
}
.wave:nth-child(4) {
  animation-delay: 0.3s;
}
.wave:nth-child(5) {
  animation-delay: 0.4s;
}
.wave:nth-child(6) {
  animation-delay: 0.5s;
}
.wave:nth-child(7) {
  animation-delay: 0.6s;
}
.wave:nth-child(8) {
  animation-delay: 0.7s;
}
.wave:nth-child(9) {
  animation-delay: 0.8s;
}
.wave:nth-child(10) {
  animation-delay: 0.9s;
}

@keyframes wave {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>