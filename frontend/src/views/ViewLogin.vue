<template>
  <Header />
  <div class="form">
    <form method="POST" @submit.prevent="fetchLogin()">
      <div class="fields">
        <input
          type="text"
          name="email"
          placeholder="ex:exemple@domaine.com"
          v-model="email"
        />

        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          v-model="password"
        />

        <button type="submit">Se connecter</button>
      </div>

      <div class="errors" v-if="errors">
        {{ errors.message }}
      </div>
    </form>
  </div>

</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios"

export default {
  name: "Login",
  components: { Header },
  data() {
    return {
      email: "",
      password: "",
      errors: {}
    };
  },
  methods: {

    fetchLogin() {
      axios.post("http://localhost:3000/api/auth/login", {
        email: this.email,
        password: this.password,
      }, {withCredentials: true})
      .then(response => this.$router.push("/blog"))
      .catch(err => (this.errors = err.response.data))
    }
  },
};
</script>

<style>
.form {
  width: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fields {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>