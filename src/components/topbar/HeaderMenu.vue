<template>
    <div class="topNav">
        <nav class="navigationBar1">
          <div>
              <span class="brand">SUA MARCA</span>
          </div>
          <div>
              <input type="text">
          </div>
          <div>
              <span>Help</span>
              <span>About US</span>
              <span>Entrar</span>
              <span>Cart</span>
          </div>
        </nav>
        <nav class="navigationBar2">
            <div class="primaryMenu">
                <span>Menu</span>
            </div>
            <div class="secundaryMenu">
                <span class="navItems">Items</span>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "HeaderMenu",
}
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
}
.primaryMenu {
    width: 200px;
    display: flex;
    justify-content: center;
}
.navItems{
    width: 40px;
    padding: 0 12px;
}
</style>