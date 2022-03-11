<template>
    <div class="footer pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-5">
                    <div class="logo">
                            <svg viewBox="0 0 200 40">
                                <symbol id="s-text" class="pt-2">
                                    <text text-anchor="middle" x="50%" y="50%">Cường Shoes</text>
                                </symbol>

                                <g class = "g-ants">
                                    <use xlink:href="#s-text" class="text-copy"></use>
                                    <use xlink:href="#s-text" class="text-copy"></use>
                                    <use xlink:href="#s-text" class="text-copy"></use>
                                    <use xlink:href="#s-text" class="text-copy"></use>
                                    <use xlink:href="#s-text" class="text-copy"></use>
                                </g>
                            </svg>
                        </div>
                </div>
            </div>
            <div class="row  footer-detail">
                <div class="about col-md-4">
                    <div class="footer-title">
                        <div>
                            <h4> About Us</h4>
                            <p><b>Cường Shoes</b> chuyên cung cấp các mẫu giày hot trend từ các hãng : Gucci, LV, Dior, Converser, Nike ...</p>
                        </div>
                    </div>
                </div>
                <div class="information col-md-3">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="contact col-md-5">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>Address: </li>
                        <li>Phone: </li>
                        <li>Email: </li>
                    </ul>
                    <div class="social d-flex justify-content-stard">
                        <div class="mr-2">
                            <a href="#"><img src="../assets/images/icon/fb.png"></a>
                        </div>
                        <div class="mr-2">
                            <a href="#"> <img src="../assets/images/icon/tw.png"></a>
                        </div>
                        <div class="mr-2">
                            <a href="#"> <img src="../assets/images/icon/youtube.png"></a>
                        </div>
                        <div class="mr-2">
                            <a href="#"> <img src="../assets/images/icon/instagram.png"></a>
                        </div>
                    </div>
                </div>
        </div>
        <div class="copyright text-center">
            <span class="mt-2">Copyright © 2021 Ngô Thế Cường  . All Rights Reserved.</span>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.footer-title b {
    color: red;
}

ul li {
    list-style: none;
}

ul {
    padding-left: 0;
}

ul li a {
    text-decoration: none;
    color: #fff;
}

ul li a:hover {
    color: #edb12d;
}

.footer h4 {
    padding-bottom: 15px ;
    color: #edb12d;
}

.logo {
    border:#BD0034 1px solid;
}

.footer {
    color: #fff;
    background-color: #000;
}

.footer-detail {
    border-bottom: 1px #fff solid;
}

.text-copy {
    fill: none;
    stroke: white;
    stroke-dasharray: 6% 25%;
    stroke-width: 1px;
    stroke-dashoffset: 0%;
    animation: stroke-offset 3.5s infinite linear;
}

.text-copy:nth-child(1){
	stroke: #4D163D;
	animation-delay: -1;
}

.text-copy:nth-child(2){
	stroke: #840037;
	animation-delay: -2s;
}

.text-copy:nth-child(3){
	stroke: #BD0034;
	animation-delay: -3s;
}

.text-copy:nth-child(4){
	stroke: #BD0034;
	animation-delay: -4s;
}

.text-copy:nth-child(5){
	stroke: #FDB731;
	animation-delay: -5s;
}

@keyframes stroke-offset{
	100% {stroke-dashoffset: -35%;}
}

.social img {
    width: 30px;
    height: 30px;
}

.copyright {
    color: white;
}
</style>