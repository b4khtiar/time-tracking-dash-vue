<script setup>
import { ref } from 'vue';
import CardUser from './components/CardUser.vue';
import CardTimer from './components/CardTimer.vue';
import data from './data.json'

const user = {
  name: 'Jeremy Robson',
  avatar: '/images/image-jeremy.png',
}

const viewMode = ref('daily')

const switchMode = (mode) => {
  viewMode.value = mode
}
</script>

<template>
  <div class="container grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 py-16">
    <CardUser class="md:col-span-2 lg:col-span-1 lg:row-span-2" :user="user" defaultView="daily"
      @viewMode="switchMode" />
    <CardTimer v-for="item in data" :key="item.title" :data="item" :currentView="viewMode" />
  </div>
</template>

<style>
:root {
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  color: white;
}
</style>
