<template>
  <div id="projects" class="grid wave">
    <svg
      class="wave_top"
      viewBox="0 0 702 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M702 7.66667H643.5C585 7.66667 468 7.66667 351 14.0635C234 20.3646 117 33.3021 58.5 39.6031L0 46V0H58.5C117 0 234 0 351 0C468 0 585 0 643.5 0H702V7.66667Z"
        fill="#fff"
      />
    </svg>

    <div class="containe grid wide">
      <base-card
        heading="My Projects"
        subheading="The Sub Project Heading"
        setColor="var(--hell-color)"
      >
        <div class="row">
          <div class="col l-2 slider_buttons">
            <div class="slider_button">
              <i class="material-icons back"> chevron_left </i>
            </div>
          </div>
          <div class="col l-8">
            <div class="row">
              <div class="col l-4">
                <div class="project-item">
                  <img
                    src="../../assets/img/projects/3.png"
                    class="project_photo"
                  />
                  <div class="text">
                    <h3 class="text__heading">Title</h3>
                    <p class="text__subheading">Lorem, ipsum dolor</p>
                    <p>
                      sit amet consectetur adipisicing elit. Tempore accusamus,
                      itaque voluptate, alias eveniet expedita veniam corrupti
                      sapiente quaerat nisi ipsa modi nesciunt odio accusantium
                      velit, sit corporis impedit nostrum.
                    </p>
                    <div class="text__btn">
                      <base-button>Hire me now</base-button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col l-4">
                <div class="project-item">
                  <img
                    src="../../assets/img/projects/2.png"
                    class="project_photo"
                  />
                  <div class="text">
                    <h3 class="text__heading">Title</h3>
                    <p class="text__subheading">Lorem, ipsum dolor</p>
                    <p>
                      sit amet consectetur adipisicing elit. Tempore accusamus,
                      itaque voluptate, alias eveniet expedita veniam corrupti
                      sapiente quaerat nisi ipsa modi nesciunt odio accusantium
                      velit, sit corporis impedit nostrum.
                    </p>
                    <div class="text__btn">
                      <base-button>Hire me now</base-button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col l-4">
                <div class="project-item">
                  <img :src="test" class="project_photo" />
                  <div class="text">
                    <h3 class="text__heading">Title</h3>
                    <p class="text__subheading">Lorem, ipsum dolor</p>
                    <p>
                      sit amet consectetur adipisicing elit. Tempore accusamus,
                      itaque voluptate, alias eveniet expedita veniam corrupti
                      sapiente quaerat nisi ipsa modi nesciunt odio accusantium
                      velit, sit corporis impedit nostrum.
                    </p>
                    <div class="text__btn">
                      <base-button>Hire me now</base-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col l-2 slider_buttons">
            <div class="slider_button">
              <i class="material-icons back"> chevron_right </i>
            </div>
          </div>
        </div>
        <ul class="row dots">
          <li></li>
          <li class="active"></li>
          <li></li>
          <li></li>
        </ul>
      </base-card>
    </div>
    <svg
      class="wave_bottom"
      viewBox="0 0 702 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 38.3333H58.5C117 38.3333 234 38.3333 351 31.9365C468 25.6354 585 12.6979 643.5 6.39687L702 0V46H643.5C585 46 468 46 351 46C234 46 117 46 58.5 46H0V38.3333Z"
        fill="#fff"
      />
    </svg>
  </div>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      data_url: "../../assets/img/projects/1.png",
    };
  },
  computed: {
    test() {
      return require("@/assets/img/projects/1.png");
    },
  },
};
</script>

<style scoped>
#projects {
  background: linear-gradient(0, rgba(241, 238, 238, 0.226), rgba(255, 255, 255, 0.1)), url('../../assets/img/landing.png') top center / cover no-repeat;
  background-attachment: fixed;
}

.project_photo {
  width: 100%;
  border-radius: 2rem 2rem 0 0;
}

.project_photo:hover {
  transform: scale(1.05);
  opacity: 0.8;
  transition: all 0.3s linear;
}

.project-item:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.project-item {
  height: 100%;
  background-color: var(--hell-color);
  background-clip: content-box;
  border-radius: 2rem;
  overflow: hidden;
}

.text {
  padding: 1.5rem 1.5rem 3.5rem 1.5rem;
  font-size: 1.6rem;
  line-height: 1.4;
  text-align: start;
}

.text__subheading {
  opacity: 0.8;
}

.text__btn {
  text-align: center;
}

.wave {
  position: relative;
}

.wave_top {
  position: absolute;
  top: 0;
  left: 0;
}

.wave_bottom {
  position: absolute;
  bottom: 0;
  left: 0;
}

.row.dots {
  justify-content: center;
  margin-top: 4rem;
}

.row.dots li {
  width: 1.6rem;
  height: 1.6rem;
  background-color: var(--hell-color);
  display: inline-block;
  border-radius: 50%;
  margin: 0 1rem;
  opacity: 0.5;
  cursor: pointer;
}

.row.dots li:hover{
  opacity: 1;
}

.row.dots .active {
  width: 4.8rem;
  opacity: 0.9;
  border-radius: 30%;
}

.slider_buttons {
  align-items: center;
  justify-content: center;
  display: flex;
}

.slider_button {
  width: 6rem;
  height: 6rem;
  background-color: var(--hell-color);
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s linear;
}

.slider_button:hover{
  transform: scale(1.1); 
}

.slider_button:active{
  transform: translate(0, 0.5rem) ;
}



.slider_button .back,
.slider_button .next {
  line-height: 6rem;
    font-size: 5rem;
    color: var(--dark-color);
}
</style>