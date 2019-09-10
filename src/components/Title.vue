<template>
  <div class="container pt-5">
    <div class="title-style p-5 text-font-primary">{{el}}</div>
  </div>
</template>

<script>
export default {
  name: "Title",
  data: () => ({
    el: "",
    i: 0,
    txt:
      `Hi, my name is Michelle. I'm a front-end developer based in Florianópolis, Brasil`
  }),
  created() {
    this.typeWriter();
  },
  methods: {
    typeWriter() {
      if (this.i < this.txt.length) {
        this.el += this.txt.charAt(this.i);
        this.i += 1;
        setTimeout(this.typeWriter, 50);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.title-style {
  font-size: 55px;
  animation-name: fadeIn;
  font-weight: lighter;
  animation-duration: 1.5s;
  color: white;
  text-shadow: 1px 2px 2px white;
  letter-spacing: 3px;
}

@media screen and (max-width: 500px) {
  .title-style {
    font-size: 35px;
    padding: 10px !important;
  }
}

</style>
