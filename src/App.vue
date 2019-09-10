<template>
  <div id="app" >
    <div id="nav">
      <Background />
      <div class="navbar w-100" :class="pos > 100 ? 'bg-dark ' : 'bg-transparent'">
        <div v-if="size > 500" class="w-100">
          <router-link :to="item.path" v-for="(item, index) in items" :key="index">{{item.text}}</router-link>
        </div>
        <div  class="w-100" v-else>
          <router-link :to="item.path" v-for="(item, index) in items" :key="index">
            <span>
              <i class="fa" :class="item.icon"></i>
            </span>
          </router-link>
        </div>
      </div>
    </div>
    <router-view/>
    <Footer v-if="(this.$route.name === 'home') || (this.$route.name === 'contact')"/>
  </div>
</template>

<script>
import Background from "@/components/Background.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Background,
    Footer
  },
  data: () => ({
    items: [
      { path: "/", text: "Home", icon: "fa-home" },
      { path: "/about", text: "About", icon: "fa-user-ninja" },
      { path: "/projects", text: "Projects", icon: "fa-code" },
      { path: "/contact", text: "Contact", icon: "fa-phone" }
    ],
    size: window.innerWidth,
    pos: 0
  }),
   methods: {
    handleScroll () {
      this.pos = window.pageYOffset;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: darkgray;
}
.navbar {
  position: fixed!important;
  z-index: 1;
  top: 0;
  align-self: center;
  left: 0;
  height: 60px;
}
#nav {
  padding: 30px;
  a {
    font-weight: lighter;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    opacity: 0.5;
    color: white;
    cursor: pointer;
    &:hover {
      color: darkgray;
    }
    &.router-link-exact-active {
      font-weight: bolder;
      text-shadow: 1px 1px 1px white;
      opacity: 1;
    }
  }
  a,
  span {
    padding: 2px 10px;
  }
  span i {
    font-size: 25px;
  }
  .bg-dark {
    box-shadow: 2px 2px 20px 2px #151515;
    animation-name: colorIn;
    animation-duration: 1s;
  }
  .bg-transparent {
    animation-name: colorOut;
    animation-duration: 1s;
  }
}
@keyframes colorIn {
  0% {
    background-color: transparent;
  }
   100% {
    background-color: #343a40;
  }
}
@keyframes colorOut {
  0% {
   background-color: #343a40;
 }
  100% {
    background-color: transparent;
  }
}
</style>
