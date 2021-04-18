<template>
  <span>
    {{ basisText }}
    <span class="typed-text"> {{ typeValue }}</span>
    <span class="cursor" :class="{ typing: typeStatus, mode:light }" >&nbsp;</span>
  </span>
</template>

<script>
export default {
  props: {
    basisText: {
      type: String,
      required: false,
      default: "To show some Effect",
    },
    light: {
      type: Boolean,
      required: false,
      default: false,
    },
    typeArray: {
      type: Array,
      required: false,
      default: () => ["Coding", "Typing", "Erasing"],
    },
    typingSpeed: {
      type: Number,
      required: false,
      default: 200,
    },
    erasingSpeed: {
      type: Number,
      required: false,
      default: 100,
    },
    newTextDelay: {
      type: Number,
      required: false,
      default: 2000,
    },
  },
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex++;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex--;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex++;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay);
  },
};
</script>

<style scoped>
.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: var(--dark-color);
  animation: cursorBlink 1s infinite;
}

.cursor.mode {
  display: inline-block;
  margin-left: 3px;
  width: 3px;
  background-color: var(--hell-color);
  animation: cursorBlinkLight 1s infinite;
}

.typing {
  animation: none;
}
</style>

<style>
@keyframes cursorBlink {
  49% {
    background-color: var(--dark-color);
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

@keyframes cursorBlinkLight {
  49% {
    background-color: var(--hell-color);
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>