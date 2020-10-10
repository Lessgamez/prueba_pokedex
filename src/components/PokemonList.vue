<template>
  <div class="">
      <h2 class="ont-serif text-red-700 text-center text-2xl">Selecciona tu POKEMON</h2>   
      <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
         <div
      v-for="(pokemon, index) in pokemonList"
      :key="pokemon.url"
      class="w-full md:w-1/3 xl:w-1/4 p-24 flex flex-col shadow-inner bg-gray-100"
    >
 
      {{ index + 1 + '. ' }}<i
        v-if="favorites.includes(pokemon.name)"
        
      />
      
   
      <label class="font-black ..."> {{ pokemon.name }}</label>
     
      <img class="divImg "
        :key="pokemon.url"
        :src="
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
            1}.png`
        "
        alt="Pokemon`"
      >
       <a
        v-show="!favorites.includes(pokemon.name)"
        class="bg-red-400 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        :class="{ 'is-disabled': favoriteListLength === 10 }"
        @click="setFavorites(pokemon.name), playPokemonCry(index + 1)"
      >Agregar Favorito</a>
    <button
        v-show="favorites.includes(pokemon.name)"
        class="bg-red-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        @click="setFavorites(pokemon.name), playPokemonCry(index + 1)"
      >
        Eliminar de Favoritos
      </button>
        </div>
      </div>
  
  </div>
</template>

<script>
export default {
    name: 'PokemonList',
 
    props: {
        pokemonList: {
            type: Array,
            required: true,
        },
        favorites: {
            type: Array,
            required: true,
        },
        filter: [],
       
    },
    computed: {
        favoriteListLength() {
            return this.favorites.length
        },
    },
    methods: {
        setFavorites(name) {
            if (this.favorites.includes(name)) {
                const indexInArray = this.favorites.indexOf(name)
                this.$emit('deleteFavorite', indexInArray)
                return
            }
            if (this.favoriteListLength < 10) {
                this.$emit('addFavorite', name)
            }
        },
            playPokemonCry(pokemonId) {
            const audio = new Audio(
                `https://pokemoncries.com/cries-old/${pokemonId}.mp3`
            )
            audio.play()
        }
   
      
    },
}
</script>

<style scoped>
.divImg{
  overflow: hidden;
  width: 200px;
  height: 200px;
  padding: 25px 15px;
}
</style>