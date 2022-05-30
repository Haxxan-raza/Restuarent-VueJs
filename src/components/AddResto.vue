<template>
  <HeaderPage />
  <h1>Hello ,Wellcome To Add Resturent</h1>
</template>

<script>
import HeaderPage from "./HeaderPage.vue";

export default {
  name: "AddResto",
  components: { HeaderPage },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SingUp" });
    }
  },
};
</script>