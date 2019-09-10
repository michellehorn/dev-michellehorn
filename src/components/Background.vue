<template>
  <div id="background">
    <img src="../assets/back.jpg" alt class="stretch">
  </div>
</template>

<script>
export default {
  name: "Background"
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
  background: #272020;
}

.stretch {
  width: 100%;
  height: 100%;
  opacity: 0.25;
  filter: blur(3px);
}
</style>
