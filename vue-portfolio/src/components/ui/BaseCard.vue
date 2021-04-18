<template>
  <div class="content">
    <div class="content__header">
      <h2 class="header__heading">{{ heading }}</h2>
      <p class="header__subheading">{{ subheading }}</p>
    </div>
    <div class="content__text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["heading", "subheading"],
};
</script>

<style scoped>
.content {
  padding: 5rem 0;
}

.header__heading {
  color: var(--dark-color);
  font-size: 2rem;
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
  margin-top: 1.8rem;
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
