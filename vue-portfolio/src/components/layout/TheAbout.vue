<template>
  <div id="about" class="grid">
    <div class="containe grid wide ">
      <base-card heading="The About" subheading="The Sub Heading" setColor="var(--dark-color)">
        <h1 class="title">
          <writting-effect
            basisText="Hallo,"
            :typeArray="[
              'dolor sit amet consectetur',
              'suscipit dolore facere',
              'quisquam voluptas repellat iste',
            ]"
            :typingSpeed="100"
            :erasingSpeed="50"
          ></writting-effect>
        </h1>
        <div class="row">
          <div class="col l-4">
            <div class="about_photo">
              <div class="parallax-photo"></div>
            </div>
          </div>
          <div class="about__desc col l-8">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              velit similique, suscipit dolore facere nihil voluptas sit aliquam
              odit aperiam ad cupiditate odio voluptatibus excepturi illo
              explicabo porro earum pariatur? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Quam officia, quisquam voluptas
              repellat iste, deleniti dolorum sit omnis, veniam labore mollitia
              maiores asperiores quasi eius odit facilis laudantium! Quos,
              quibusdam.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              velit similique, suscipit dolore facere nihil voluptas sit aliquam
              odit aperiam ad cupiditate odio voluptatibus excepturi illo
              explicabo porro earum pariatur? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Quam officia, quisquam voluptas
              repellat iste, deleniti dolorum sit omnis, veniam labore mollitia
              maiores asperiores quasi eius odit facilis laudantium! Quos,
              quibusdam. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Saepe velit similique, suscipit dolore facere nihil voluptas
              sit aliquam odit aperiam ad cupiditate odio voluptatibus excepturi
              illo explicabo porro earum pariatur? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Quam officia, quisquam voluptas
              repellat iste, deleniti dolorum sit omnis, veniam labore mollitia
              maiores asperiores quasi eius odit facilis laudantium! Quos,
              quibusdam.
            </p>
            <div class="about__desc-btn">
              <base-button class="about__desc-btn">Hire me now</base-button>
            </div>
          </div>
        </div>
      </base-card>
    </div>
  </div>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
import WrittingEffect from "../../components/ui/WrittingEffect";
export default {
  components: { BaseButton, WrittingEffect },
};
</script>

<style scoped>
.title {
  margin: 0;
  
}
.about_photo {
  margin-top: 2rem;
  padding-top: 140%;
  background: url("../../assets/img/photo.jpg") top center / cover no-repeat;
  border-radius: 2.5rem;
  z-index: 10;
}

.about__desc-btn {
  text-align: center;
}




</style>