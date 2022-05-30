<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="addresto">Add Resturent</router-link>
    <router-link to="updateresto"> Update Resturent</router-link>
    <a v-on:click="logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>
<style>
.nav {
  background-color: darkmagenta;
  overflow: hidden;
  padding: 0px 8px;
}
.nav a {
  font-size: 20px;
  float: left;
  color: white;
  text-decoration: none;
  text-align: left;
  margin: 10px;
}
.nav a:hover {
  background-color: antiquewhite;
  color: rgb(0, 2, 2);
}
</style>