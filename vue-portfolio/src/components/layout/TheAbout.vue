<template>
  <div id="about" class="grid wave">
    <div class="wave_top_wrapper">
      <svg
        class="wave_top"
        viewBox="0 0 1500 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10.3791L15.625 12.1412C31.25 13.9033 62.5 17.4275 93.75 14.487C125 11.5906 156.25 2.11936 187.5 2.15239C218.75 2.11936 250 11.5906 281.25 17.4275C312.5 23.2644 343.75 25.6873 375 25.0595C406.25 24.4758 437.5 20.9517 468.75 15.6654C500 10.3791 531.25 3.33078 562.5 0.985C593.75 -1.40482 625 1.01803 656.25 3.33078C687.5 5.64353 718.75 8.06638 734.375 9.20074L750 10.3791V28H734.375C718.75 28 687.5 28 656.25 28C625 28 593.75 28 562.5 28C531.25 28 500 28 468.75 28C437.5 28 406.25 28 375 28C343.75 28 312.5 28 281.25 28C250 28 218.75 28 187.5 28C156.25 28 125 28 93.75 28C62.5 28 31.25 28 15.625 28H0V10.3791Z"
          fill="#fff"
        />
        <path
          d="M750 10.3791L765.625 12.1412C781.25 13.9033 812.5 17.4275 843.75 14.487C875 11.5906 906.25 2.11936 937.5 2.15239C968.75 2.11936 1000 11.5906 1031.25 17.4275C1062.5 23.2644 1093.75 25.6873 1125 25.0595C1156.25 24.4758 1187.5 20.9517 1218.75 15.6654C1250 10.3791 1281.25 3.33078 1312.5 0.985C1343.75 -1.40482 1375 1.01803 1406.25 3.33078C1437.5 5.64353 1468.75 8.06638 1484.37 9.20074L1500 10.3791V28H1484.37C1468.75 28 1437.5 28 1406.25 28C1375 28 1343.75 28 1312.5 28C1281.25 28 1250 28 1218.75 28C1187.5 28 1156.25 28 1125 28C1093.75 28 1062.5 28 1031.25 28C1000 28 968.75 28 937.5 28C906.25 28 875 28 843.75 28C812.5 28 781.25 28 765.625 28H750V10.3791Z"
          fill="#fff"
        />
      </svg>
    </div>

    <div class="containe grid wide">
      <base-card
        heading="The About"
        subheading="The Sub Heading"
        setColor="var(--dark-color)"
      >
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
          <div class="col l-4" v-appear-scrolling:rotation-zoom>
            <div class="about_photo">
              <div class="parallax-photo"></div>
            </div>
          </div>
          <div class="about__desc col l-8" >
            <p v-appear-scrolling:bottom>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              velit similique, suscipit dolore facere nihil voluptas sit aliquam
              odit aperiam ad cupiditate odio voluptatibus excepturi illo
              explicabo porro earum pariatur? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Quam officia, quisquam voluptas
              repellat iste, deleniti dolorum sit omnis, veniam labore mollitia
              maiores asperiores quasi eius odit facilis laudantium! Quos,
              quibusdam.
            </p>
            <p v-appear-scrolling:bottom>
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
            <div class="about__desc-btn" v-appear-scrolling:left>
              <base-button class="about__desc-btn" >Hire me now</base-button>
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
.wave {
  position: relative;
}

.wave_top_wrapper {
  overflow: hidden;
  width: 100%;
  position: absolute;
  bottom: calc(100% - 4px);
  left: 0;
  z-index: 1;
}

.wave_top {
  width: 200%;
  animation: wave 10s linear infinite;
  z-index: 1;
}

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

.before-enter{
  opacity:0;
}

.enter{
  opacity: 1;
  transition: all 3s ease-in-out;
}
</style>

<style>
@keyframes wave {
  0% {
    transform: translateX(0);
    transform: translate()
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>