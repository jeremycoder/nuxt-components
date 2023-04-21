<template>
  <div>
    <h1>Tables</h1>
    <p>Display any array of objects as a table. The objects must have the same keys.</p>
    <NxObjectAsTable title="Users" :data="users" />

  </div>
</template>

<script setup lang="ts">

const users = [
  {
    name: "John",
    age: 26,
    location: 'Kenya'
  },
  {
    name: "Martha",
    age: 86,
    location: 'Zambia'
  },
  {
    name: "Grace",
    age: 40,
    location: 'Philippines'
  },
  {
    name: "John",
    age: 26,
    location: 'Kenya'
  },
]

</script>