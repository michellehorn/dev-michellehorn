<template>
  <div class="about fadeIn">
    <h1 class="title-about text-font-primary">Meet Mi!</h1>
    <div class="container pt-4" id="container-img">
      <div class="container-img" :class="size > 500 ? 'd-flex' : ''">
        <div class="card-img mb-5 mt-2" v-for="(img, index) in imgList" :key="index">
          <img :src="require(`../assets/${img.path}.jpg`)" class="img">
          <div class="pt-2 container">
            <h6 class="text-center text-light text-font-secondary">{{img.text}}</h6>
          </div>
        </div>
      </div>
      <div v-if="size > 600">
        <button @click="previous" class="previous-btn">
          <i class="fa fa-chevron-left"></i>
        </button>
        <button @click="next" class="next-btn">
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>
    </div>
    <div v-if="size > 600">
      <h5 class="text-light">{{this.initialPos + 1}} to {{this.finalPos}} of {{this.images.length}}</h5>
    </div>
  </div>
</template>

<script>
import { imagesData } from "../data/about.js";
export default {
  name: "About",
  data: () => ({
    images: imagesData,
    pos: 0,
    imgList: [],
    size: window.innerWidth,
    initialPos: 0,
    finalPos: 3
  }),
  methods: {
    buildList(init, fin) {
      this.imgList = [];
      for (let i = init; i < fin; i++) {
        this.imgList.push(this.images[i]);
      }
    },
    next() {
      if (this.finalPos < this.images.length) {
        this.finalPos = this.finalPos + 1;
        this.initialPos = this.initialPos + 1;
        this.buildList(this.initialPos, this.finalPos);
      }
    },
    previous() {
      if (this.initialPos > 0) {
        this.finalPos = this.finalPos - 1;
        this.initialPos = this.initialPos - 1;
        this.buildList(this.initialPos, this.finalPos);
      }
    }
  },
  created() {
    if (this.size > 500) {
      this.buildList(this.initialPos, this.finalPos);
    } else {
      this.buildList(0, this.images.length - 1);
    }
  }
};
</script>

<style lang="scss">
#container-img {
  position: relative;
  align-content: center;
  width: 100%;

  button {
    background-color: transparent;
    border: none;
    font-size: 30px;
    color: white;
    outline: none;
    &:active {
      outline: none;
    }
    &:hover {
      color: gray;
    }
  }
  .previous-btn {
    position: absolute;
    top: 140px;
    left: -100px;
  }
  .next-btn {
    position: absolute;
    right: -100px;
    top: 140px;
  }
  img {
    max-width: 100%;
    width: 250px;
    height: 250px;
  }
}
.about {
  padding: 1em 15em;
}
.title-about {
  color: rgb(209, 135, 231);
}
.container-img {
  max-width: 100%;
}
.bord {
  border: 1px solid red;
}

@media screen and (max-width: 500px) {
  .about {
    padding: 0em;
    padding-bottom: 5em;

  }
  .text-half {
    justify-content: space-between;
    text-align: justify;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
