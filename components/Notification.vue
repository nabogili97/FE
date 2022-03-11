<template>
   <div id="notification" style="width: 500px; margin: 0 auto;">
        <div class="alert success">
            <input type="checkbox" id="alert2"/>
            <label class="close" title="close" for="alert2">
        <i class="icon-remove"></i>
        </label>
            <p class="inner">
                {{message}}
            </p>
        </div>
   </div>
</template>
<script>
export default {
    props: ['message']
}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lobster);

@import url(https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css);

body {
  background-image: url(https://subtlepatterns.com/patterns/bedge_grunge.png);
  background-position: initial initial;
  background-repeat: initial initial;
}

h1 {
  font-size: 32pt;
  color: rgb(255, 153, 0);
  text-shadow: 0 2px 3px rgb(255, 238, 204);
  text-align: center;
  padding: 6px 0 0 0;
  margin: 6px 0 0 0;
}

.alert .inner {
  display: block;
  padding: 6px;
  margin: 6px;
  border-radius: 3px;
  border: 1px solid rgb(180,180,180);
  background-color: rgb(212,212,212);
}

.alert .close {
  float: right;
  margin: 3px 12px 0 0;
  cursor: pointer;
}

.alert .inner,.alert .close {
  color: rgb(88,88,88);
}

.alert input {
  display: none;
}

.alert input:checked ~ * {
  animation-name: dismiss,hide;
  animation-duration: 300ms;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-delay: 0s,100ms;
}

.alert.error .inner {
  border: 1px solid rgb(238,211,215);
  background-color: rgb(242,222,222);
}

.alert.error .inner,.alert.error .close {
  color: rgb(185,74,72);
}

.alert.success .inner {
  border: 1px solid rgb(214,233,198);
  background-color: rgb(223,240,216);
}

.alert.success .inner,.alert.success .close {
  color: rgb(70,136,71);
}

.alert.info .inner {
  border: 1px solid rgb(188,232,241);
  background-color: rgb(217,237,247);
}

.alert.info .inner,.alert.info .close {
  color: rgb(58,135,173);
}

.alert.warning .inner {
  border: 1px solid rgb(251,238,213);
  background-color: rgb(252,248,227);
}

.alert.warning .inner,.alert.warning .close {
  color: rgb(192,152,83);
}

@keyframes dismiss {
  0% {
    opacity: 1;
  }
  90%, 100% {
    opacity: 0;
    font-size: 0.1px;
    transform: scale(0);
  }
}

@keyframes hide {
  100% {
    height: 0;
    width: 0;
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: 0;
  }
}


</style>