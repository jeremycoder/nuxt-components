<template>
  <div class="container">
    <div>
      <h4>Nuxt Apps - Nuxt/Vue Components, Plugins, and Apps</h4>
      <p>Build your Nuxt app fast with these fully-typed independent components. Take advantage of Typescript. MIT
        license!
      </p>
    </div>
    <div class="navbar">
      <NxNavbar :menu="topMenu" theme="light" @clicked="menuClicked" />
    </div>

    <div class="wrapper">
      <div class="box1">
        <NxMenu :menu="sideMenu" :shadow="false" @clicked="menuClicked" />
      </div>
      <div class="box2">
        <slot />
      </div>
      <div class="box3">Three</div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Link = {
  name: string,
  link?: string,
  disabled?: Boolean,
  show?: Boolean,
  hasBorder?: Boolean,
  showChildren?: Boolean,
  children?: Links
}

type Links = Array<Link>

const sideMenu = [
  {
    name: "Alerts",
    link: "/components/alerts"
  },
  {
    name: "Avatars",
    link: "/components/avatars"
  },
  {
    name: "Buttons",
    link: "/components/buttons"
  },
  {
    name: "Cards",
    link: "/components/cards"
  },
  {
    name: "Dropdowns",
    link: "/components/dropdowns"
  },
  {
    name: "Forms",
    link: "/components/forms"
  },
  {
    name: "Menus",
    link: "/components/menus"
  },
  {
    name: "Modals",
    link: "/components/modals"
  },
  {
    name: "Navbars",
    link: "/components/navbars"
  },
  {
    name: "Tables",
    link: "/components/tables"
  },
] as Links

const topMenu = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'How it works',
    link: '/'
  },
  {
    name: 'Free Nuxt Tutorial',
    link: '/'
  },
] as Links

/**
 * @desc Receive clicked link from menu and navigate to that link
 * @param event Receive clicked link data
 */
function menuClicked(menuItem: Link) {  
  navigateTo(menuItem.link)
}

useHead({
  title: 'Nuxt Apps',
  link: {
    rel: "stylesheet",
    href: "/resources/css/styles.css",
    type: "text/css",
  },
})
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 2fr 7fr 2fr;
  grid-template-rows: 100px 100px;
  gap: 10px;
}

.box1 {
  grid-column: 1;

}

.box2 {
  grid-column: 2;
}

.box3 {
  grid-column: 3;

}

.navbar {
  margin: 2rem 0;
}

.container {
  margin: 0 2.5rem;
}
</style>
