<template>
  <div class="hrContainer">
    <div class="topNav">
      <nav class="navigationBar1">
        <div>
          <router-link to="/">
            <span class="brand">YOUR BRAND</span>
          </router-link>
        </div>
        <div>
          <input type="text" />
        </div>
        <div class="_nav">
          <router-link to="/aboutus">
            <span>About US</span>
          </router-link>
          <router-link to="/help">
            <v-icon title="Support" medium>mdi-face-agent</v-icon>
          </router-link>
          <router-link to="/login">
            <v-icon title="Login" medium>mdi-account</v-icon>
          </router-link>
          <router-link to="/cart">
            <v-icon title="Cart" medium>mdi-cart-variant</v-icon>
          </router-link>
        </div>
      </nav>
      <nav class="navigationBar2">
        <div @mouseleave="out">
          <div class="mainMenu" @mouseenter="inside">
            <span>Main menu</span>
          </div>
          <MainMenu :open="showMainMenu" />
        </div>
        <div class="_menu">
          <div>
            <span>Menu 1</span>
          </div>
          <div>
            <span>Menu 2</span>
          </div>
          <div>
            <span>Menu 3</span>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import MainMenu from "./MainMenu.vue";

export default {
  name: "HeaderMenu",
  components: {
    MainMenu,
  },
  data: () => ({
    showMainMenu: false,
    showSecondMenu: false,
  }),
  methods: {
    inside() {
      this.showMainMenu = true;
    },
    out() {
      this.showMainMenu = false;
    },
  },
};
</script>

<style>
.topNav {
  padding: 0 5%;
}
.hrContainer {
  border-bottom: 1px solid lightgrey;
}
.navigationBar1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  border-bottom: 1px solid lightgrey;
}
.navigationBar2 {
  display: flex;
  align-items: center;
  height: 40px;
}
.mainMenu {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  background-color: lightgrey;
  cursor: pointer;
}
.mainMenu span {
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}
.brand {
  font-size: 40px;
  cursor: pointer;
  color: black;
}
._nav span {
  color: black;
  cursor: pointer;
  margin: 0 6px;
}
._nav a {
  margin: 0 20px;
}
._menu {
  display: flex;
}
._menu div {
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
._menu span {
  color: black;
  width: 100px;
  text-align: center;
}
</style>
