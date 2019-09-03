<template>
  <div class="form-inline container ">
    <div class="col-md-3 col-sm-12 col-lg-3 fadeIn" v-for="(repo, index) in repos" :key="index">
      <div class="card h-100 m-1 bg-dark text-light p-2">
        <h6 class="font-md text-center text-font-tertiary font-weight-bold pt-2 title-repo">{{repo.name}}</h6>
        <span class="pt-2 text-font-secondary font-sm">{{repo.description}}</span>
        <div class="bottom-bar w-100">
          <div class="text-left">
            <span class="bg-warning rounded pl-1 pr-1 font-sm" v-if="repo.language !== null"># {{repo.language}}</span>
          </div>
          <div class="border-top form-inline position-relative">
            <div class="icon-repos mr-auto pt-1">
              <span>
                <i title="Open github project" @click="goTo(repo.clone_url)" class="fab fa-1x fa-github"></i>
              </span>
            </div>
            <div class="ml-auto">
              <span>
                <i
                  v-if="repo.homepage !== ''"
                  title="Open live demo"
                  @click="goTo(repo.homepage)"
                  class="fa fa-1x fa-eye icon-repos"
                ></i>
                <i v-else title="No live demo" class="fa fa-1x fa-eye-slash"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "Projects",
  data: () => ({
    repos: null,
    repoTags: null
  }),
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get(
          `https://api.github.com/users/michellehorn/repos?per_page=100&page=1`
        )
        .then(response => {
          this.repos = response.data;
        });
    },
    goTo(url) {
      window.open(url);
    }
  }
};
</script>
<style>
.title-repo {
  color: rgb(209, 135, 231);
}
.card.bg-dark {
    height: 150px!important;
    justify-content: flex-end;
}
.bottom-bar {
    position: relative;
    bottom: 0;
}
.font-sm {
    font-size: 13px;
}
.font-md {
    font-size: 15px;
    position: absolute;
    top: 0;
    width: 100%;
    text-align: center;
}
</style>
