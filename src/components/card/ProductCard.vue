<template>
  <div class="card">
    <div class="card-img">
        <img src="../../assets/frasco.webp" alt="imagem de um frasco de perfume" />
        <span class="infoAdd">Novidade</span>
    </div>
    <h3 class="brand my">Marca</h3>
    <span class="stars my">*****</span>
    <div  class="price-box">
        <div>
            <span class="discount my">R$ 199,99</span>
            <span class="price my">R$ 130,99</span>
        </div>
        <span class="installment my">2x 100,99</span>
    </div>
    <span class="frete">FRETE GRATIS</span>
    <p class="description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio
      sapiente ratione provident ea quo inventore, ex recusandae perspiciatis
    </p>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data: () => ({}),
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
    margin: 4px;
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
