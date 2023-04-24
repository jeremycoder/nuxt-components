<template>
  <div>
    <h1>Forms</h1>
    <p>Construct a form from a typed object. Submit button returns ids as keys with entered values.</p>
    <NxForm :data="data" />

  </div>
</template>

<script setup lang="ts">
type FormInput = {
  label?: string,
  id: string, //required, must be unique
  type?: 'input:text' | 'input:password' | 'input:email' | 'input:number' | 'textarea' | 'select',
  options?: Array<string>,
  disabled?: boolean,
  show?: boolean,
}

const data = [
  {
    label: 'First Name',
    id: 'first_name',
    type: 'input:text',
  },
  {
    label: 'Last Name',
    id: 'last_name',
    type: 'input:text',
  },
  {
    label: 'Email',
    id: 'email',
    type: 'input:email',
  },
  {
    label: 'Password',
    id: 'password',
    type: 'input:password',
  },
  {
    label: 'Permissions',
    id: 'permission',
    type: 'input:text',
    disabled: true,
  },
  {
    label: 'Choose Account',
    id: 'account',
    type: 'select',
    options: [
      'Blue', 'Yellow', 'Red'
    ]
  },
  {
    label: 'Stats',
    id: 'stats',
    type: 'input:text',
  },
] as Array<FormInput>

</script>