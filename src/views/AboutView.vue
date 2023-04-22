
<script>
export default {
  data() {
    return {
      aboutMediaItems: [
        { aboutIcon: `<i style="color: #d62976" class='bx bxl-instagram'></i>`, mLink: `/` },
        { aboutIcon: `<i style="color: #3b5998" class='bx bxl-facebook' ></i>`, mLink: `/` },
        { aboutIcon: `<i style="color: #075E54" class='bx bxl-whatsapp' ></i>`, mLink: `/` },
        { aboutIcon: `<i style="color: #c8232c" class='bx bxl-pinterest-alt' ></i>`, mLink: `/` },
        { aboutIcon: `<i style="color: #4C75A3" class='bx bxl-vk' ></i>`, mLink: `/` }
      ]
    }
  }
}
</script>
<template>
  <div class="aboutContainer">
<div class="about">
  <div class="aboutH">
      <h1>Pizmo Pizza Restournat Cafe</h1>
    </div>
    <div class="aboutP">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, et? Commodi fuga quia
        nisi aperiam illum eaque placeat accusamus ex laboriosam enim explicabo similique atque,
        laborum asperiores, saepe deserunt nulla.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, et? Commodi fuga quia
        nisi aperiam illum eaque placeat accusamus ex laboriosam enim explicabo similique atque,
        laborum asperiores, saepe deserunt nulla.
      </p>
    </div>
    <div class="aboutMedia">
      <ul>
        <li v-for="aboutMediaItem in aboutMediaItems" :key="aboutMediaItem"><RouterLink :to="aboutMediaItem.mLink" v-html="aboutMediaItem.aboutIcon"></RouterLink></li>
      </ul>
    </div>
</div>
  </div>
</template>

<style>
.aboutContainer {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about {
  display: grid;
  place-items: center;
  margin: 20px;
  width: 100%;
  max-width: 800px;
}
.aboutMedia ul li {
  float: left;
  padding: 10px;
  margin: 10px;
  border-radius: 50%;
  transition: .2s;
  border: 2px solid var(--danger-light);
}
.aboutMedia ul li:hover {
  background: var(--danger);
}
.aboutMedia ul li a {
  font-size: 1.5rem;
}
.aboutMedia {
  position: relative;
  top: 20px;
}
.aboutH {
  color: var(--danger);
}
.aboutP {
  position: relative;
  top: 30px;
}
</style>
