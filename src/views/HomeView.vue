<template>
  <div>
    <CarouselHome />
    <h2>Os mais procurados</h2>
    <ProductCard class="cardSection" />
    <h2>Os mais vendidos</h2>
    <ProductCard class="cardSection" />
    <h2>Ofertas e promoções</h2>
    <ProductCard class="cardSection" />
    <h2>Os kits mais desejados</h2>
    <ProductCard class="cardSection" />
  </div>
</template>

<script>
import CarouselHome from "@/components/carousel/CarouselHome.vue";
import ProductCard from "@/components/card/ProductCard.vue";

export default {
  name: "HomeView",

  components: {
    CarouselHome,
    ProductCard,
  },
};
</script>

<style scoped>
.cardSection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
h2 {
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  margin: 1rem 0;
}
</style>
