<template>
  <div id="app">
    <HeaderMenu />
    <router-view class="pd" />
  </div>
</template>

<script>
import HeaderMenu from "./components/topbar/HeaderMenu.vue";

export default {
  components: { HeaderMenu },
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
}
.pd {
  padding: 0 5%;
}
</style>
