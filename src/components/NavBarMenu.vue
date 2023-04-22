<script>
export default {
  data() {
    return {
      navItems: [
        { page: 'Home', link: `/` },
        { page: 'Order', link: `/order` },
        { page: 'Menu', link: `/menu` },
        { page: 'About', link: `/about` },
        { page: 'Info', link: `/info` }
      ]
    }
  }
}
</script>
<template>
  <nav>
    <div class="logo"></div>
    <ul>
      <li v-for="navItem in navItems" :key="navItem.page">
        <RouterLink :to="navItem.link">{{ navItem.page }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* logo */
nav .logo {
  float: left;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url('https://images.vexels.com/media/users/3/136312/isolated/preview/213fb725b5fbbd669093a338c9c16bdd-logo-pizza-fast-food.png');
  background-position: center;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  background-size: 100% 100%;
}
nav ul {
  display: flex;
  justify-content: flex-end;
}
nav ul li {
  margin: 10px;
}
nav ul li a {
  padding: 10px;
  font-weight: bold;
  color: var(--faded);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 0.3s ease;
}
nav ul li a:hover {
  background: var(--faded);
  color: var(--danger);
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}
/* responsive media */
@media (max-width: 499px) {
  /* problem */
  .logo {
    display: none;
  }
}
</style>
