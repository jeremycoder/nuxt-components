<template>
  <div>
    <h1>Dropdowns</h1>
    <p>Dropdowns have a slot and a menu. The slot allows you to use any element as a header.</p>
    <p>Use the position prop to move the menu to the left or right any way you want it. The position is a percentage of
      the
      menu's parent element's <strong>left</strong> absolute position percentage.
    </p>

    <h3>Dropdown with a button</h3>
    <NxDropdown :menu="menu">
      <NxButton>Menu</NxButton>
    </NxDropdown>

    <h3>Dropdown with a position at 50%</h3>
    <NxDropdown :menu="menu" :position="50">
      <NxButton>Menu</NxButton>
    </NxDropdown>

    <h3>Dropdown with a position at -25%</h3>
    <NxDropdown :menu="menu" :position="-25">
      <NxButton>Menu</NxButton>
    </NxDropdown>

    <h3>Dropdown with Avatar</h3>
    <NxDropdown :menu="menu">
      <NxAvatar />
    </NxDropdown>

    <h3>Dropdown with Avatar position at -25%</h3>
    <NxDropdown :menu="menu">
      <NxAvatar src="/resources/img/jeremy-headshot.jpg" name="Jeremy Mwangelwa" title="Jeremy Mwangelwa"
        :show-arrow="true" />
    </NxDropdown>
  </div>
</template>

<script setup lang="ts">
const menu = [
  {
    name: 'Menus',
    link: '/components/menus',
  },
  {
    name: 'Buttons',
    link: '/components/buttons',
  },
  {
    name: 'Google',
    link: 'http://www.google.com',
    isExternal: true,
  },
  {
    name: 'Disabled',
    link: '/',
    disabled: true,
  },
  {
    name: 'Border Bottom',
    link: '/components/menus',
    hasBorder: true,
  },
  {
    name: 'Hidden',
    link: '/components/menus',
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