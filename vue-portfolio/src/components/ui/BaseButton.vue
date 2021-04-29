<template>
  <div>
    <button v-if="!link" :class="mode">
      <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: var(--dark-color);
  border: 1px solid var(--dark-color);
  color: var(--hell-color);
  cursor: pointer;
  border-radius: 1rem;
  margin-right: 0.5rem;
  display: inline-block;
  position: relative;
  z-index: 2;
  overflow: hidden;
}

button::before,
a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 0;
  background: var(--hell-color);
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  transition: all 0.4s cubic-bezier(0.24, 0.89, 0.68, -0.37);
}

a:hover,
a:active,
button:hover,
button:active {
  
  color: var(--dark-color);
  
} 

button:hover::before,
a:hover::before{
  height: 300%;
}

/* a:hover,
a:active,
button:hover,
button:active {
  background-color: var(--hell-color);
  border-color: var(--dark-color);
  color: var(--dark-color);
  transition: all 0.1s linear;
} */

a:focus,
button:focus {
  outline: 0;
}

.flat {
  background-color: transparent;
  color: var(--dark-color);
  border: none;
}

.outline {
  background-color: transparent;
  border-color:var(--dark-color);
  color: var(--dark-color);
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: var(--dark-color);
  transition: all 0.1s linear;
}

.flat:focus,
.ountline:focus {
  outline: 0;
}
</style>