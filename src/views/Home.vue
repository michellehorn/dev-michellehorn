<template>
  <div class="home text-center">
    <h1 class="text-header-home text-font-primary">
      <span>dev</span>.michellehorn
    </h1>
    <h6 class="text-light text-font-secondary sub">front-end developer</h6>
    <div class="skills text-font-tertiary font-weight-bold fadeIn">
      <span v-for="item in items" :key="item"># {{item}}</span>
    </div>
    <div class="social">
      <a href="https://www.github.com/michellehorn"><i class="fab fa-github text-secondary fa-2x"> </i></a>
      <a href="https://www.linkedin.com/in/michelle-horn"><i class="fab fa-linkedin text-primary fa-2x"></i></a>
      <a href="https://wa.me/5548996614422"><i class="fab fa-whatsapp text-success fa-2x"></i></a>
    </div>
  </div>
</template>

<script>

export default {
  name: "home",
  components: {},
  data: () => ({
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'Angular',
      'Vuejs'
    ]
  })
};
</script>
<style lang="scss" scoped>
h6.sub {
  margin-top: -20px;
  padding-left: 25%;
  letter-spacing: 1em;
  opacity: 0.5;
}
.home {
  padding-top: 5em;
  .skills {
    padding-top: 4em;
    span {
      box-shadow: 1px 1px 2px #42b983;
      color: #42b983;
      font-size: 14px;
      background-color: #222;
      border-radius: 3px;
      padding: 0.1em 0.5em;
      margin: 1em 1.5em;
    }
  }
}

.text-header-home {
  font-size: 100px;
  color: rgb(209, 135, 231);
  span {
    font-size: 60px;
    color: rgb(209, 135, 231);
    opacity: 0.45;
  }
}

@media screen and (max-width: 500px) {
  h6.sub {
  margin-top: -20px;
  padding-left: 40%;
  font-size: 13px;
  letter-spacing: 0.3em;
}
  .text-header-home {
    text-align: center;
    font-size: 45px;
    span {
      font-size: 20px;
    }
  }
  .skills {
    padding-top: 4em;
      margin: 0em 3em;
    span {
      background-color: #222;
      border-radius: 3px;
      padding: 0.1em 5em;
      display: block;
    }
  }
}
</style>

