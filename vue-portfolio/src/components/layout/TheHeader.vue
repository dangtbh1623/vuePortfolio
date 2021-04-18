<template>
  <header class="header grid">
    <nav class="header__navBar grid wide">
      <div class="row">
        <div class="header__navBar-logo col l-2">
          <router-link to="/"
            ><img src="../../assets/icon/logoD.png" class="logoNavigation"
          /></router-link>
        </div>
        <div class="header__navBar-list col l-7">
          <ul class="row">
            <li class="header__navBar-item"><a href="/">Home</a></li>
            <li class="header__navBar-item"><a href="/home#about">About</a></li>
            <li class="header__navBar-item"><a href="#">Projects</a></li>
            <li class="header__navBar-item"><a href="#">Skills</a></li>
            <li class="header__navBar-item"><a href="#">Contact</a></li>
            <li class="header__navBar-item subnav" @click="showNav" @mouseleave="leaveNavBar" >
              More
              <i
                class="material-icons more"
                :style="{ transform: styleButton }"
              >
                expand_more</i
              >
              <transition name="submenu">
                <ul class="subnavComponent" v-if="isShowNav" >
                  <li><a href="#">Loreum</a></li>
                  <li><a href="#">Loreum</a></li>
                  <li><a href="#">Loreum</a></li>
                </ul>
              </transition>
            </li>
          </ul>
        </div>
        <div class="header__navBar-list col l-3">
          <ul class="row">
            <li class="header__navBar-item">
              <router-link to="/registration">Sign Up</router-link>
            </li>
            <li class="header__navBar-item">
              <router-link to="/login">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isShowNav: false,
    };
  },
  methods: {
    showNav() {
      this.isShowNav = !this.isShowNav;
    },
    leaveNavBar(){
      this.isShowNav = false;
      console.log("LEAVE");
    }
  },
  computed: {
    styleButton() {
      return this.isShowNav ? "rotate(180deg)" : "";
    },
  },
};
</script>

<style scoped>
ul {
  margin: 0;
}

li {
  display: inline-block;
  min-width: 9rem;
  font-size: 1.6rem;
  font-weight: 500;
}
.header {
  background-color: var(--dark-color);
  height: 5rem;
  line-height: 5rem;
      position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
.logoNavigation {
  height: 5rem;
  padding: 0;
  margin: 0;
}

.logoNavigation:hover {
  opacity: 0.8;
  transition: all 0.3s ease;
}

.header__navBar-item {
  list-style-type: none;
  color: var(--hell-color);
}

.header__navBar-item a {
  display: inline-block;
  width: 100%;
  color: var(--hell-color);
  text-decoration: none;
}

.header__navBar-item:hover {
  background-color: var(--hell-color);
  color: var(--dark-color);
  transition: all 0.3s ease;
}

.header__navBar-item:hover > a {
  color: var(--dark-color);
  transition: all 0.3s ease;
}

.header__navBar-item a.router-link-active {
  opacity: 0.6;
  background-color: var(--hell-color);
  color: var(--dark-color);
}

.header__navBar-item.subnav {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}

.header__navBar-item.subnav li {
  display: block;
}

.material-icons.more {
  font-size: 2.2rem;
  margin-left: 0.3rem;
  margin-top: 0.3rem;
  transition: transform 0.5s ease;
}

.subnavComponent {
  position: absolute;
  width: 200%;
  top: 100%;
  left: 0;
  background-color: var(--hell-color);
  padding: 0;
  box-shadow: 0.5rem 0.2rem 0.7rem #33435580;
}
.subnavComponent a {
  color: var(--dark-color);
  text-decoration: none;
}

.subnavComponent a:hover {
  color: var(--hell-color);
  background-color: var(--dark-color);
  transition: all 0.3s ease;
}

/* animations */

.submenu-enter-active,
.submenu-leave-active {
  transition: 0.5s all ease;
}

.submenu-enter-to,
.submenu-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.submenu-leave-to,
.submenu-enter-from {
  opacity: 0;
  transform: translateY(-2rem);
  transition: 0.5s all ease;
}
</style>