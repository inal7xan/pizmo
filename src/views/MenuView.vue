<script>
export default {
  data() {
    return {
      pizzaMenu: [
        { pizzaName: 'Peperoni Pizza', cost: '$12' },
        { piazzaName: 'Vodka Pizza', cost: '$12' },
        { pizzaName: 'Garden Pizza', cost: '$12' },
        { pizzaName: 'Plane Jane Pizza', cost: '$12' },
        { pizzaName: 'Meat Lovers Pizza', cost: '$12' },
        { pizzaName: 'White Pizza', cost: '$12' }
      ]
    }
  }
}
</script>

<template>
  <div class="menu">
    <div class="menuBox">
      <div class="pizzaMenu">
        <div>
          <h1>Pizza</h1>
        </div>
        <ul>
          <li v-for="pizza in pizzaMenu" :key="pizza">
            {{ pizza.pizzaName }} ..................... {{ pizza.cost }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}
.menuBox h1 {
  font-size: 3rem;
  text-align: center;
  text-shadow: #fc0 1px 0 10px;
}
.menuBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  height: 100vh;
  font-weight: bold;
  color: #fff;
  background-image: url('https://img.freepik.com/free-photo/flat-lay-frame-table-with-ingredients-beside_23-2148505653.jpg?w=740&t=st=1686232049~exp=1686232649~hmac=615fb9ce41526408ad5f0c67878ba1f63e9ec3e27948c6f854d52bf7e47b8dca');
  background-size: 100% 100%;
  background-position: center;
}
.menuBox li {
  font-size: 1.5rem;
  text-shadow: #fc0 1px 0 10px;
}
</style>
