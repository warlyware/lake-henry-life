<template>
<div class="h-full w-full absolute top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
  <div class="h-full w-full absolute top-0 left-0 lake-bg bg-center"></div>
  <div class="w-full h-full min-h-screen flex flex-col justify-center items-center relative">
    <div 
      class="text-center text-yellow-400 max-w-3xl z-10 font-bold bg-cyan-900 py-4 rounded-lg mb-8"
      style="background-color: rgba(22, 78, 99, 0.45)"
    >
      <h1 class="md:text-9xl text-7xl tracking-wide font-script">
        Life is better on the lake
      </h1>
    </div>
    <div 
      class="text-center text-yellow-400 max-w-3xl z-10 font-bold bg-cyan-900 p-4 rounded-lg"
      style="background-color: rgba(22, 78, 99, 0.45)"
    >
      <span class="font-script text-4xl">
        Join us! 
      </span>
      <br>
      <span class="font-script text-2xl">
        Grab a MetaVillage NFT in the Lake Henry neighborhood:
      </span>
      <br>
      <div class="mt-2">
        <a 
          href="https://magiceden.io/marketplace/metavillage"
          target="_blank"
          class="underline uppercase font-bold text-xl"
        >
          Magic Eden
        </a>&nbsp;|&nbsp;
        <a 
          href="https://solanart.io/collections/metavillage#list"
          target="_blank"
          class="underline uppercase font-bold text-xl"
        >
          Solanart
        </a>
      </div>
    </div>
  </div>
  <div class="absolute bottom-2 z-10 text-white mx-auto w-full text-center text-xs font-bold uppercase tracking-widest">
    Made with ♥️ by
    <a href="https://twitter.com/warly_sol" 
    target="_blank"
    style="background-color: rgba(30, 58, 175, 0.4)"
    >
      warly.sol
    </a>
  </div>
</template>

<style>
.lake-bg {
  background-image: url(../assets/img/lake-bg-2.jpeg)
}
</style>
