<template>
    <div class="post container">
        <div class="row">
            <div v-for="(item, index) in news" :key="index" class="col-md-12 mb-5">
                <div  class="title">
                    <h2>{{item.title}}</h2>
                </div>
                <div class="date">
                    <i>{{item.public_start_at}}</i>
                </div>
                <div class=" mb-4 mt-4">
                    <img id="proimg" class="card-img-top" :src=item.img alt="Card image cap">
                </div>
                <div style=" text-align: justify;" class="content">
                    {{item.content}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['news'],
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.content img {
    margin: auto;
    width: 80%;
}

#right-title {
    border-bottom: 2px solid red;
    margin-bottom: 40px;
    display: block;
}

.right-title {
    margin: 0;
    font-size: 20px;
    line-height: 20px;
    display: inline-block;
    text-transform: uppercase;
}


.post-card img {
    min-height: 250px;
    height: 250px;
    object-fit: cover;
    width: 350px;
}

.post {
    margin-top: 120px;
}
</style>
