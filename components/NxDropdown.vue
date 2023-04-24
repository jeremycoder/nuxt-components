<template>
  <div class="slot">
    <span @click="toggleShowMenu(showMenu)">
      <slot />
    </span>
    <div class=" menu" :style="`left: ${props.position}%`">
      <NxMenu v-if="showMenu" :menu="menu" class="menu" />
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

const props = defineProps({
  menu: Array<Link>,
  position: {
    type: Number,
    default: 0,
  }
})

const showMenu = ref(false)

const menu = [
  {
    name: 'Home',
  },
  {
    name: 'Place',
  },
]

/**
 * Sets showMenu to opposite of given value
 * @param value Boolean value
 */
function toggleShowMenu(value: boolean) {
  showMenu.value = !value
}
</script>

<style scoped>
.slot {
  position: relative;
  max-width: max-content;
}

.menu {
  position: absolute;
}
</style>