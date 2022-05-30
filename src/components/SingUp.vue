<template>
  <img class="logo" src="../assets/resto-logo.jpg" alt="" />
  <h1>SingUp</h1>
  <div class="login">
    <input
      type="text"
      name="name"
      v-model="name"
      placeholder="Enter Name ..."
    /><br /><br />
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
    <button v-on:click="getUser">SignUp</button><br />
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SingUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async getUser() {
      console.log("singup", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
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
