<template>
  <div class="topNav">
    <nav class="navigationBar1">
      <div>
        <span class="brand">SUA MARCA</span>
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <span>Help</span>
        <span>About US</span>
        <span>Entrar</span>
        <span>Cart</span>
      </div>
    </nav>
    <nav class="navigationBar2">
      <div class="primaryMenu" @mouseover="inside">
        <span>Menu</span>
        <template v-if="showMenu">
          <div class="navItems" @mouseover="inside">
            <span v-for="(item, index) in items" :key="index">
              <router-link :to="item.to">{{ item.title }}</router-link>
            </span>
          </div>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderMenu",
  data: () => ({
    showMenu: false,
    items: [
      { title: "Click Me", to: "www.google.com" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
  methods: {
    inside() {
      this.showMenu = true;
    },
    out() {
      this.showMenu = false;
    },
  },
};
</script>

<style>
.navigationBar1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid black;
}
.navigationBar2 {
  display: flex;
  align-items: center;
  height: 30px;
  border-bottom: 1px solid black;
  position: relative;
}
.primaryMenu {
  width: 200px;
  display: flex;
  justify-content: center;
}
.navItems {
  position: absolute;
  width: 100%;
  padding: 4px;
  background-color: red;
  z-index: 10;
  left: 0;
  top: 29px;
}
</style>
