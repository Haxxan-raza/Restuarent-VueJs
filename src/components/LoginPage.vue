<template>
  <img class="logo" src="../assets/resto-logo.jpg" alt="" />
  <h1>Login</h1>
  <div class="login">
    <input
      type="text"
      name="email"
      v-model="email"
      placeholder="Enter Email ..."
    /><br /><br />
    <input
      type="text"
      name="password"
      v-model="password"
      placeholder="Enter password ..."
    /><br /><br />
    <button v-on:click="login">Login</button><br />
    <router-link to="/sing-up">SignUp</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>