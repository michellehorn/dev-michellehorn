<template>
  <div class="form fadeIn">
    <h5 class="text-secondary text-font-secondary pb-5">Hey! Me envie uma mensagem :)</h5>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-2" label="Seu Nome:" label-for="input-2" class="text-light">
        <b-form-input id="input-2" v-model="form.name" required placeholder="Insira seu nome"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="E-mail:" class="text-light" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Insira seu email"
        ></b-form-input>
      </b-form-group>

      <b-form-textarea
        id="textarea"
        v-model="form.message"
        placeholder="Insira sua mensagem"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <div class="d-flex pt-3 justify-content">
        <div class="mr-auto">
          <b-button type="reset" variant="outline-secondary">Limpar</b-button>
        </div>
        <div class="ml-auto">
          <b-button type="submit" variant="success">Enviar</b-button>
        </div>
      </div>
      <div v-if="msg === 'success'" class="text-success fadeIn pt-3">
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
    msg: ""
  }),
  methods: {
    onSubmit(evt) {
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
