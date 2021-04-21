<template>
  <div id="projects" class="grid">
    <div class="containe grid wide">
      <base-card
        heading="My Projects"
        subheading="The Sub Project Heading"
        setColor="var(--hell-color)"
      >
        <div class="row">
          <div class="col l-2"></div>
          <div class="col l-3">
            <div class="project-item">
              <img
                src="../../assets/img/projects/1.png"
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
           <div class="col l-3">
            <div class="project-item">
              <img
                src="../../assets/img/projects/1.png"
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
           <div class="col l-3">
            <div class="project-item">
              <img
                src="../../assets/img/projects/1.png"
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
          <div class="col l-2"></div>
        </div>
      </base-card>
    </div>
  </div>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>

<style scoped>
#projects {
  background-image: linear-gradient(to bottom right, #2c3e508c, #2c3e50);
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
</style>