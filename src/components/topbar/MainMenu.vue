<template>
  <dialog class="modal" :open="open">
    <div class="modalItems" v-for="(item, index) in mainMenuItems" :key="index">
      <router-link :to="item.to">{{ item.title }}</router-link>
      <router-link :to="item.to">{{ item.title }}</router-link>
    </div>
  </dialog>
</template>

<script>
export default {
  name: "MainMenu",
  props: {
    open: Boolean,
  },
  data: () => ({
    showMenu: false,
    mainMenuItems: [
      { title: "First menu !", to: "www.google.com" },
      { title: "First menu !", to: "www.google.com" },
    ],
  }),
};
</script>

<style>
.modal {
  position: absolute;
  height: 200px;
  width: 100%;
  padding: 20px 40px;
  z-index: 1;
  border: none;
  margin-top: 1px;
  border-bottom: 1px solid grey;
}
.modalItems {
  display: flex;
  flex-direction: column;
}
</style>
