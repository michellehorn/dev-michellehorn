<template>
  <div id="background">
    <img src="../assets/header.jpg" alt class="stretch">
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
#background {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: -1; /* Ensure div tag stays behind content; -999 might work, too. */
  background: linear-gradient(
    to top left,
    rgb(29, 27, 27) 5%,
    rgb(61, 28, 61) 10%,
    black 10%,
    rgb(61, 28, 61) 5%,
    black 50%
  );
}

.stretch {
  width: 100%;
  height: 100%;
  opacity: 0.1;
}
</style>
