<template>
  <div>
  <b-carousel
    id="carousel-fade"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="First slide"
      img-src="../assets/images/slide1.png"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      img-src="../assets/images/slide2.png"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      img-src="../assets/images/slide3.png"
    ></b-carousel-slide>
  </b-carousel>
</div>
</template>

<script>
  export default {
    methods: {
      prev() {
        this.$refs.myCarousel.prev()
      },
      next() {
        this.$refs.myCarousel.next()
      }
    }
  }
</script>