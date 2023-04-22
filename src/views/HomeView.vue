<script>
export default {
  data() {
    return {
      serviceCardItems: [
        {
          cardIcon: `<i class='bx bx-basket' ></i>`,
          cardH: 'Fast Courier',
          cardP:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora excepturi laboriosam ut porro dolorem fugiat rem sint quo qui labore recusandae officia hic unde officiis assumenda perferendis quidem, architecto enim.'
        },
        {
          cardIcon: `<i class='bx bx-basket' ></i>`,
          cardH: 'Hot Food',
          cardP:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora excepturi laboriosam ut porro dolorem fugiat rem sint quo qui labore recusandae officia hic unde officiis assumenda perferendis quidem, architecto enim.'
        },
        {
          cardIcon: `<i class='bx bx-qr-scan' ></i>`,
          cardH: 'QR Code Pay',
          cardP:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora excepturi laboriosam ut porro dolorem fugiat rem sint quo qui labore recusandae officia hic unde officiis assumenda perferendis quidem, architecto enim.'
        }
      ]
    }
  }
}
</script>
<template>
  <div class="introContainer">
    <div class="introImage">
      <img src="../assets/intro.png" alt="" />
    </div>
    <div class="introText">
      <h1>Welcome Pizmo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dignissimos fugit? Animi
        recusandae eligendi ratione porro, debitis rem dolorum eum soluta nobis corporis consectetur
        ducimus praesentium et quaerat error! Vel?
      </p>
    </div>
  </div>
  <!-- service -->
  <div class="serve">
    <div class="services">
      <div
        class="serviceCard"
        v-for="serviceCardItem in serviceCardItems"
        :key="serviceCardItem.cardIcon"
      >
        <div class="icon" v-html="serviceCardItem.cardIcon"></div>
        <div class="cardHeader">
          <h3 v-text="serviceCardItem.cardH"></h3>
        </div>
        <div class="cardParagraph">
          <p v-text="serviceCardItem.cardP"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* intro  */
.introContainer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--danger);
  transition: 0.6s background-color ease;
}
.introContainer .introImage {
  position: relative;
}
.introText p,
.introText h1 {
  user-select: none;
}
.introText {
  width: 100%;
  max-width: 800px;
  font-size: 1.4em;
  margin: 20px;
  color: var(--faded);
  text-shadow: var(--primary) 1px 0 10px;
}
.introContainer .introImage img {
  width: 100%;
  max-width: 800px;
  filter: drop-shadow(0 0 0.75rem var(--primary));
}

/* responsive */
@media (max-width: 520px) {
  .introContainer {
    display: flex;
    flex-direction: wrap;
    flex-wrap: wrap;
  }
  .introText {
    margin-top: -200px;
  }
}

/* service */
.services {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
}
.serviceCard {
  position: relative;
  float: left;
  top: 80px;
  width: 100%;
  max-width: 350px;
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  margin: 30px;
  text-align: center;
}
.serviceCard .icon {
  font-size: 4rem;
  margin-top: 20px;
  color: var(--danger);
}
.serviceCard .cardHeader {
  font-size: 2rem;
}
.serviceCard .cardParagraph {
  margin: 30px;
  font-size: 1.2rem;
}
/* responsive */
@media (max-width: 699px) {
  .services {
    display: flex;
    flex-direction: wrap;
    flex-wrap: wrap;
  }
}
</style>
