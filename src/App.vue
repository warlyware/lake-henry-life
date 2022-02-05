<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="w-full h-full flex justify-center items-center relative">
    <div class="h-full w-full absolute top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    <div class="h-full w-full absolute top-0 left-0 lake-bg bg-center"></div>
    <h1 
      class="text-center text-yellow-400 max-w-3xl z-10 font-bold bg-blue-900 py-4 rounded-md"
      style="background-color: rgba(30, 58, 175, 0.4)"
    >
      <h1 class="md:text-9xl text-6xl tracking-wide">
        Life is better on the lake
      </h1>
    </h1>
  </div>
</template>

<style>
#app {
  @apply h-full;
  font-family: 'Dancing Script', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.lake-bg {
  background-image: url(./assets/img/lake-bg-2.jpeg)
}
</style>
