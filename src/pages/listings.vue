<template>
  <div class="bg-gradient-to-r from-cyan-500 to-blue-500 z-0">
    <h1 class="text-6xl text-center py-6 font-script text-yellow-400 font-bold">
      Lake Henry Real Estate Agency
    </h1>
    <div class="flex flex-wrap">
      <!-- card -->
      <div
        v-for="listing in listings" :key="listing._id"
        class="w-1/3"
      >
        <a :href="`https://magiceden.io/item-details/${listing.mintAddress}`" target="_blank">
          <div class="rounded-xl border p-4 m-3 shadow-md hover:shadow-xl cursor-pointer bg-gray-200">
            <img :src="listing.img" alt="">
            <div class="font-bold text-2xl flex justify-between items-center">
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
            <div class="text-xl mb-2">
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
    const { data } = await axios.get(
      'https://api-mainnet.magiceden.io/rpc/getListedNFTsByQuery?q=%7B%22%24match%22%3A%7B%22collectionSymbol%22%3A%22metavillage%22%2C%22%24and%22%3A%5B%7B%22%24or%22%3A%5B%7B%22attributes%22%3A%7B%22%24elemMatch%22%3A%7B%22trait_type%22%3A%22Neighborhood%22%2C%22value%22%3A%22Lake%20Henry%22%7D%7D%7D%5D%7D%5D%7D%2C%22%24sort%22%3A%7B%22takerAmount%22%3A1%2C%22createdAt%22%3A-1%7D%2C%22%24skip%22%3A0%2C%22%24limit%22%3A20%7D'
    )
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
