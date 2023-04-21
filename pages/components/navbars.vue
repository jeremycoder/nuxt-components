<template>
  <div>
    <h1>Nav bars</h1>
    <p>Use these navigation bars to easily add navigation to your Nuxt app.</p>
    <h3>Regular theme (light)</h3>
    <NxNavbar :menu="menu" />
    <h3>Dark theme</h3>
    <NxNavbar :menu="menu" theme="dark" />
    <h3>None theme</h3>
    <NxNavbar :menu="menu" theme="none" />
    <h3>Primary theme</h3>
    <NxNavbar :menu="menu" theme="primary" />
    <h3>Secondary theme</h3>
    <NxNavbar :menu="menu" theme="secondary" />
    <h3>Info theme</h3>
    <NxNavbar :menu="menu" theme="info" />
    <h3>Warning theme</h3>
    <NxNavbar :menu="menu" theme="warning" />
    <h3>Danger theme</h3>
    <NxNavbar :menu="menu" theme="danger" />
  </div>
</template>

<script setup lang="ts">
const menu = [
  {
    name: 'Home',
  },
  {
    name: 'About',
    link: '/components/buttons',
  },
  {
    name: 'Disabled',
    disabled: true,
  },
  {
    name: 'Hidden',
    show: false,
  },
  {
    name: 'Children',
    link: '/components/dropdown-menus',
    hasBorder: true,
    children: [
      {
        name: 'Child One',
      },
      {
        name: 'Child Two',
        children: [
          {
            name: 'Grand Child One',
          },
          {
            name: 'Grand Child Two',
          },
        ]
      },
    ]
  },
  {
    name: 'Hide Children',
    showChildren: false,
    children: [
      {
        name: 'Hidden Child',
      }
    ]
  }
]
</script>