<template>
  <div class="about fadeIn">
    <h1>
      <code>Meet Mi</code>!
    </h1>
    <div class="form-inline container pt-4">
      <div class="col-md-4 col-lg-4 col-sm-12">
        <img class="img" src="../assets/code.jpg" alt="a">
      </div>
      <div class="text-half col-md-8 col-lg-8 pt-3 col-sm-12 text-light text-font-secondary text-left">
        <h6>
          25 anos, nascida em Florianópolis. Apaixonada por Star wars e friends.
          Desenvolvedora de Front-end ha cerca de 3 anos.
        </h6>
        <div class="d-flex pt-2">
          <div class="col-4 pl-0">
            <h6>
              <b>Hardskills</b>:
              <span
                class="skill"
                v-for="(skill, index) in hardSkills"
                :key="index"
              ><code>#{{skill}}</code></span>
            </h6>
          </div>
          <div class="col-8">
            <h6>
              <b>Softskills</b>:
              <span
                class="skill"
                v-for="(skill, index) in softSkills"
                :key="index"
              ><code>{{skill}}</code></span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "About",
  data: () => ({
    hardSkills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Angular",
      "Vuejs",
      "Git",
      "Vue Native"
    ],
    softSkills: [
      'Autodidata',
      'Team Player',
      'Analítica',
      'Boa comunicação e fácil socialização',
      'Organização',
      'Ótima concentração (em caso de incêndio, git commit & git push'

    ]
  })
};
</script>

<style>
img.img {
  max-height: 300px;
}
.about {
  padding: 1em 15em;
}
.skill {
  display: block;
  border-radius: 3px;
  font-size: 14px;
  margin: 10px 0px;
}
@media screen and (max-width: 500px) {
  .about {
    padding: 1em 1em;
    padding-bottom: 5em;
  }
  .text-half {
    padding-left: 3em!important;
  }
}
</style>
