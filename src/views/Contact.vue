<template>
  <div class="form fadeIn">
    <h5 class="text-font-primary pb-5" :style="{color: '#d187e7'}">Hey! Send me a message :)</h5>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-2" label="Your name:" label-for="input-2" class="text-font-secondary text-light">
        <b-form-input id="input-2" v-model="form.name" required placeholder="Insert your name"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="E-mail:" class="text-font-secondary text-light" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          class="text-font-secondary"
          required
          placeholder="Insert your email"
        ></b-form-input>
      </b-form-group>

      <b-form-textarea
      class="text-font-secondary"
        id="textarea"
        v-model="form.message"
        placeholder="Insert your message"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <div class="d-flex pt-3 justify-content">
        <div class="mr-auto">
          <b-button type="reset" variant="outline-secondary">Clear</b-button>
        </div>
        <div class="ml-auto">
          <b-button type="submit" variant="dark">Enviar</b-button>
        </div>
      </div>
      <div v-if="loading"><span class="text-light text-font-primary">Carregando <i class="round fa fa-spinner"></i></span></div>
      <div v-if="msg === 'success'" class="text-light fadeIn pt-3 text-font-primary">
        Mensagem enviada!
        <span class="p-1">
          <i class="fa-1x text-success fa fa-check-circle"></i>
        </span>
      </div>
    </b-form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Contact",
  data: () => ({
    form: {
      name: "",
      email: "",
      message: ""
    },
    msg: "",
    loading: false
  }),
  methods: {
    onSubmit(evt) {
      this.loading = true;
      evt.preventDefault();
      let ref = firebase.database().ref("messages");
      ref.push(this.form, () => {
        this.msg = "success";
        setTimeout(() => {
          this.msg = "";
          this.form.email = "";
          this.form.name = "";
          this.form.message = "";
        }, 3000);
        this.loading = false;
      });
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.email = "";
      this.form.name = "";
      this.form.message = "";
    }
  }
};
</script>

<style lang="scss" >
button {
  padding: 0.5em 3em !important;
}
.form {
  padding: 2% 25%;
}

@media screen and (max-width: 500px) {
  .form {
    padding: 4% 10%;
  }
  button {
    padding: 0.5em 2em !important;
  }
}
</style>
