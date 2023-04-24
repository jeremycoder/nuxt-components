<template>
  <div>
    <h1>Menus</h1> 
    <div class="menu-parent">
      <p>Use these dropdown menus to create endless multi-level menus</p>    
      <NxMenu :menu="menu" />
    </div>
    
    <div class="menu-parent">
      <p>Menu with no shadow</p>    
      <NxMenu :menu="menu" :shadow="false" />
    </div>

    <div class="menu-parent">
      <p>Menu with no shadow and no shadow on the children</p>    
      <NxMenu :menu="menu" :shadow="false" :shadow-on-children="false" />
    </div>         
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

<style scoped>
.menu-parent {
  margin-bottom: 20rem;
}
</style>