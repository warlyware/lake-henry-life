<template>
  <div class="z-0 bg-gradient-to-r from-cyan-500 to-blue-500">
    <h1 class="py-6 text-6xl font-bold text-center text-yellow-400 font-script">
      Lake Henry Real Estate Agency
    </h1>
    <div class="flex flex-wrap">
      <!-- card -->
      <div
        v-for="listing in listings" :key="listing._id"
        class="w-full md:w-1/3"
      >
        <a :href="`https://magiceden.io/item-details/${listing.mintAddress}`" target="_blank">
          <div class="p-4 m-3 bg-gray-200 border shadow-md cursor-pointer rounded-xl hover:shadow-xl">
            <img :src="listing.img" alt="">
            <div class="flex items-center justify-between text-2xl font-bold">
              {{ listing.title }}
              <span class="text-sm">
                {{ listing.price }} SOL
              </span>
            </div>
            <div class="text-xl">
              <span class="font-bold">
                District: 
              </span>
              {{ getTrait(listing, 'District') }}
            </div>
            <div class="text-xl">
              <span class="font-bold">
                Block: 
              </span>
              {{ getTrait(listing, 'Block') }}
            </div>
            <div class="text-xl">
              <span class="font-bold">
                Foundation: 
              </span>
              {{ getTrait(listing, 'Foundation') }}
            </div>
            <div class="text-xl">
              <span class="font-bold">
                House: 
              </span>
              {{ getTrait(listing, 'House') }}
            </div>
            <div class="mb-2 text-xl">
              <span class="font-bold">
                Foliage: 
              </span>
              {{ getTrait(listing, 'Foliage') }}
            </div>
            <div class="italic">
              {{ listing.content }}
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      listings: []
    }
  },
  async mounted() {
    const PROXY = window.location.hostname === "localhost"
      ? "https://cors-anywhere.herokuapp.com"
      : "/cors-proxy";
  
    const url = 'https://api-mainnet.magiceden.io/rpc/getListedNFTsByQuery?q=%7B%22%24match%22%3A%7B%22collectionSymbol%22%3A%22metavillage%22%2C%22%24and%22%3A%5B%7B%22%24or%22%3A%5B%7B%22attributes%22%3A%7B%22%24elemMatch%22%3A%7B%22trait_type%22%3A%22Neighborhood%22%2C%22value%22%3A%22Lake%20Henry%22%7D%7D%7D%5D%7D%5D%7D%2C%22%24sort%22%3A%7B%22takerAmount%22%3A1%2C%22createdAt%22%3A-1%7D%2C%22%24skip%22%3A0%2C%22%24limit%22%3A20%7D'
    const proxiedUrl = window.location.hostname === "localhost" ? url : `${PROXY}/${url}`

    const { data } = await axios.get(proxiedUrl)

    this.listings = data.results
    console.log(data)
  },
  methods: {
    getTrait(listing, trait) {
      return listing.attributes
        .find(({ trait_type }) => trait_type === trait).value
    }
  }
}
</script>
