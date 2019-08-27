<template>
  <div id="app">
    <div id="nav">
      <Header/>
      <router-link to="/">Home </router-link>| 
      <router-link to="/about"> About </router-link>| 
      <router-link to="/projects"> Projects </router-link>| 
      <router-link to="/contact"> Contact </router-link>
    </div>
    <router-view/>
      <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
