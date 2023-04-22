<script>
export default {
  data() {
    return {
      footerMediaItems: [
        { footerIcon: `<i style="color: #d62976" class='bx bxl-instagram'></i>`, mLink: `/` },
        { footerIcon: `<i style="color: #3b5998" class='bx bxl-facebook' ></i>`, mLink: `/` },
        { footerIcon: `<i style="color: #075E54" class='bx bxl-whatsapp' ></i>`, mLink: `/` },
        { footerIcon: `<i style="color: #c8232c" class='bx bxl-pinterest-alt' ></i>`, mLink: `/` },
        { footerIcon: `<i style="color: #4C75A3" class='bx bxl-vk' ></i>`, mLink: `/` }
      ],
      footerNavItems: [
        { fPage: 'Home', fLink: `/` },
        { fPage: 'Order', fLink: `/order` },
        { fPage: 'Market', fLink: `/market` },
        { fPage: 'About', fLink: `/about` },
        { fPage: 'Info', fLink: `/info` }
      ]
    }
  }
}
</script>
<template>
  <!-- footer media icon  -->
  <nav>
    <ul>
      <li
        v-for="footerMediaItem in footerMediaItems"
        class="media"
        :key="footerMediaItem.footerIcon"
      >
        <RouterLink :to="footerMediaItem.mLink" v-html="footerMediaItem.footerIcon"></RouterLink>
      </li>
    </ul>
  </nav>
  <!-- footer nav menu list  -->
  <nav>
    <ul>
      <li v-for="footerNavItem in footerNavItems" :key="footerNavItem.fPage">
        <RouterLink :to="footerNavItem.fLink">{{ footerNavItem.fPage }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
nav ul li.media {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 10px;
  background: var(--faded);
  border-radius: 50%;
  transition: 0.3s box-shadow ease;
}
nav ul li {
  margin: 10px;
}
nav ul li.media:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
nav ul li a {
  font-size: 1rem;
  font-weight: bold;
  color: var(--faded);
  transition: 0.3s text-shadow ease;
}
nav ul li:hover {
  text-shadow: var(--primary) 1px 0 10px;
}
</style>
