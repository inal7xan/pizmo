<script>
export default {
  data() {
    return {
      selectedPizza: ' ',
      selectedDrink: ' ',
      getPizzaMenu: [
        { pizza: 'classic small pizza', cost: '20$' },
        { pizza: 'peperoni pizza', cost: '25$' },
        { pizza: 'sousage pizza', cost: '35$' },
        { pizza: 'classic standart pizza', cost: '25$' },
        { pizza: 'fish pizza', cost: '30$' },
        { pizza: 'chocolate pizza', cost: '30$' },
        { pizza: 'classic big pizza', cost: '30$' },
        { pizza: 'lahmacun', cost: '15$' }
      ],
      getDrinkMenu: [
        { drink: 'Ayran', dCost: '5$' },
        { drink: 'Cola Shugar', dCost: '8$' },
        { drink: 'Cola Standart', dCost: '8$' },
        { drink: 'Sprite', dCost: '8$' },
        { drink: 'Fanta', dCost: '8$' },
        { drink: 'Expresso', dCost: '15$' },
        { drink: 'Ayran', dCost: '5$' }
      ]
    }
  },
  methods: {}
}
</script>


<template>
  <div class="orderContainer">
    <div class="order">
      <h1 class="orderH" style="text-align: center">Order Now</h1>
      
      <div class="priceBox">
        <div>{{ selectedPizza }}</div>
        <br />
        <div>{{ selectedDrink }}</div>
        <br />
      </div>
      <div class="orderInput">
        <select v-model="selectedPizza">
          <option v-for="getPizza in getPizzaMenu" :value="getPizza.pizza" :key="getPizza">
            {{ getPizza.pizza }} - {{ getPizza.cost }}
          </option>
        </select>

        <select v-model="selectedDrink">
          <option v-for="getDrink in getDrinkMenu" :key="getDrink" :value="getDrink.drink">
            {{ getDrink.drink }} - {{ getDrink.dCost }}
          </option>
        </select>
        <input type="text" class="input" placeholder="write Your Address" />
        <input type="submit" class="sendOrder" value="Send Order" />
      </div>
    </div>
  </div>
</template>

<style>
.orderContainer {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
ul li {
  padding: 10px;
}
.priceBox {
  position: relative;
}
.priceBox div {
  font-weight: bolder;
  padding: 10px;
  border-radius: 10px;
  background: var(--danger-light);
  color: var(--faded);
}
select {
  margin: 10px;
}
select {
  padding: 10px;
  border: none;
  background: var(--faded);
  color: var(--danger);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}
option {
  border-radius: 5px;
}
.order {
  background-image: url('https://media.istockphoto.com/id/1320215732/photo/meat-pizza-pie.jpg?s=612x612&w=0&k=20&c=w9mdi_36hoGkQ4r3bcSDTiyIbEeZzP0LY0pGTgirYOE=');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: grid;
  place-items: center;
  place-content: center;
  width: 100%;
  max-width: 350px;
  height: 450px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.input {
  padding: 10px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  border-radius: 10px;
}
.input:focus {
  border: 2px solid var(--danger);
}
.sendOrder {
  padding: 10px;
  margin: 10px;
  color: var(--faded);
  background: var(--danger);
  border: none;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  border-radius: 10px;
  font-weight: bold;
  transition: 0.2s;
}
.sendOrder:hover {
  color: var(--danger);
  background: var(--faded);
}
.orderH {
  padding: 10px;
  background: var(--faded);
  border-radius: 10px;
  color: var(--danger-light);
}
</style>