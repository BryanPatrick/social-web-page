<template>
  <div id="app">
    <HeaderMenu />
    <router-view/>
  </div>
</template>

<script>
import HeaderMenu from "@/components/topbar/HeaderMenu.vue"

export default {
  components: {
    HeaderMenu,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  padding: 0 5%;
}
</style>
