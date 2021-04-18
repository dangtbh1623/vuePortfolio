<template>
<div id="slider">
    <div class="slider-content">
    <transition appear @before-enter="beforeEnter" @enter="enter">
        <h1 class="slider-content__header">Dang Trinh</h1>
    </transition>
    <transition appear name="fadeup">
        <div class="slider-content__desc">Software Developer</div>
    </transition>

    </div>
</div>    
</template>

<script>
import gsap from 'gsap';
export default {
  methods:{
    beforeEnter(el){
      el.style.transform = 'translateY(-8rem)';
      el.style.opacity = 0;
    },
    enter(el){
      gsap.to(el,{
        duration: 1,
        y:0,
        opacity: 1,
        ease: 'bounce.out'
      });
    }
  }
}
</script>


<style scoped>
#slider {
    font-family: 'Zen Dots', cursive;
    margin-top: 5rem;
    position: relative;
    padding-top: 50%;
    background: linear-gradient(0, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.1)), url('../../assets/img/landing_4.png') top center / cover no-repeat;
    background-attachment: fixed;
}

.slider-content{
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 7rem);
}

.slider-content__header{
   margin: 0;
   font-size: 7rem;
}

.slider-content__desc{
    margin: 4rem 0;
    padding-top: 1rem;
    font-size: 3rem;
    border-top: 0.5rem solid;
}



</style>