<template>
  <div>
    <div class="card" v-for="(item, index) in cardItems" :key="index">
      <div class="card-img">
        <img
          src="../../assets/frasco.webp"
          alt="imagem de um frasco de perfume"
        />
        <span class="infoAdd">{{ item.detail }}</span>
      </div>
      <h3 class="brand my">{{ item.name }}</h3>
      <span class="stars my">{{ item.stars }}</span>
      <div class="price-box">
        <div>
          <span class="discount my">{{ item.discount }}</span>
          <span class="price my">{{ item.price }}</span>
        </div>
      </div>
      <template v-if="!!item.shipping">
        <span class="frete">FRETE GRATIS</span>
      </template>
      <p class="description">{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductCard",
  data: () => ({}),
  computed: {
    ...mapGetters({
      cardItems: "productsStore/cardItems",
    }),
  },
  methods: {
    ...mapActions({
      puxarJson: "productsStore/puxarJson",
    }),
  },
  created() {
    this.puxarJson();
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 200px;
  height: fit-content;
  padding: 4px;
  border: 1px solid lightgrey;
  overflow: hidden;
  border-radius: 5px;
  margin: 8px;
}
img {
  width: 100%;
}
.card-img {
  position: relative;
}
.infoAdd {
  position: absolute;
  bottom: 0;
  left: 0;
  border: 1px solid black;
  padding: 4px 12px;
  border-radius: 4px;
}
.my {
  margin: 2px 0;
}
.price-box div {
  display: flex;
  align-items: center;
}
.price-box div span {
  margin-right: 8px;
}
.discount {
  text-decoration: line-through;
  color: grey;
  font-size: 70%;
}
.price {
  color: black;
  font-weight: bold;
}
.frete {
  margin: 8px 0;
  color: purple;
  font-weight: bold;
}
.installment {
  font-size: 70%;
}
</style>
