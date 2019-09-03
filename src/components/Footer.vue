<template>
  <div class="social">
    <a href="https://www.github.com/michellehorn">
      <i class="fab fa-github text-secondary fa-2x"></i>
    </a>
    <a href="https://www.linkedin.com/in/michelle-horn">
      <i class="fab fa-linkedin text-primary fa-2x"></i>
    </a>
    <a href="https://wa.me/5548996614422">
      <i class="fab fa-whatsapp text-success fa-2x"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>


<style lang="scss">
.social {
  position: fixed;
  bottom: 10px;
  width: 100%;
  text-align: center;
  i {
    padding: 0em 0.5em;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
