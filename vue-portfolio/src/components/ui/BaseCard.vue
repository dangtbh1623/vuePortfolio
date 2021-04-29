<template>
  <div class="content">
    <div class="content__header">
      <h2 class="header__heading" :style="{color: setColor}">{{ heading }}</h2>
      <p class="header__subheading" :style="{color: setColor}">{{ subheading }}</p>
    </div>
    <div class="content__text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["heading", "subheading","setColor"],
};
</script>

<style scoped>
.content {
  padding: 10rem 0 7rem 0;
  position: relative;
  z-index: 2;
}



.header__heading {
  color: var(--dark-color);
  font-size: 3.2rem;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-weight: 600;
  text-align: center;
}

.header__subheading {
  color: var(--dark-color);
  font-size: 1.6rem;
  font-style: italic;
  text-align: center;
  margin-top: 2.8rem;
  margin-bottom: 2.8rem;
  opacity: 0.7;
}

.content__text {
  color: var(--dark-color);
  font-size: 1.6rem;
  margin-top: 2.2rem;
  line-height: 1.6;
  text-align: justify;
}
</style>
