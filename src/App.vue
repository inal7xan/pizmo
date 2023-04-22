<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBarMenu from './components/NavBarMenu.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <div class="container">
    <div class="header">
      <header>
        <NavBarMenu />
      </header>
    </div>
    <div class="bod">
      <RouterView />
    </div>
    <div class="footer">
      <footer>
        <FooterBar />
      </footer>
    </div>
  </div>
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
  background-color: var(--danger-light);
  transition: 0.6s background-color ease;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  padding: 20px;
}
.bod {
  width: 100%;
}
footer {
  background: var(--danger-light);
  padding: 100px;
}
</style>
