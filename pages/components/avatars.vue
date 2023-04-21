<template>
  <h1>Avatars</h1>
  <p>Just add an image source to this avatar component.</p>
  <h3>Avatar with image source</h3>
  <NxAvatar src="/resources/img/jeremy-headshot.jpg" title="Jeremy Mwangelwa" />
  <h3>Avatar with name</h3>
  <NxAvatar src="/resources/img/jeremy-headshot.jpg" name="Jeremy Mwangelwa" title="Jeremy Mwangelwa" />
  <h3>Avatar with name and arrow</h3>
  <NxAvatar src="/resources/img/jeremy-headshot.jpg" name="Jeremy Mwangelwa" title="Jeremy Mwangelwa"
    :show-arrow="true" />
  <h3>Avatar with no image source</h3>
  <NxAvatar />
</template>