<template>
  <div>
    <CarouselHome />
    <ProductCard />
  </div>
</template>

<script>
import CarouselHome from '@/components/carousel/CarouselHome.vue'
import ProductCard from '@/components/card/ProductCard.vue'

  export default {
    name: 'HomeView',

    components: {
        CarouselHome,
        ProductCard
    },
  }
</script>
