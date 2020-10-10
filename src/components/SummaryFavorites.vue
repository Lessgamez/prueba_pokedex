<template>
  <div class="w-full md:w-1/3 xl:w-2/5 p-24 flex flex-col shadow-inner bg-gray-100">
    <h2>Elige tus Pokemos Favoritos</h2>
    <p v-if="favoriteListLength < maximumList">
      Te ayudamos a Elegir? <button
        class="bg-red-400 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        @click="startInterval"
      >
        Eligir Pokemons
      </button>
    </p>
    <template>
      <p
        v-for="(pokemonName, index) in favorites"
        :key="index"
        class=""
      >
     
        {{ pokemonName }}
      </p>
    </template>
    <p v-if="favoriteListLength > 1 && favoriteListLength < maximumList">
     Puedes agregar {{ maximumList - favoriteListLength }} más Pokemons
    </p>
    <p v-if="favoriteListLength > 9">
      Tu Lista Esta LLena!
    </p>
    <br>
    <div class="">
      
    <p v-if="favoriteListLength > 9">
      ¿Quieres<button
        class="bg-red-400 text-white"
        @click="emptyFavoritePokemonList"
      >
        ELIMINAR
      </button> la lista?
    </p>
    </div>
     <br>
    <div>
    <router-link
      v-if="favoriteListLength > 0"
      class="bg-red-500 hover:bg-blue-400 text-white align-middle font-bold py-2 px-4 border-b-2 border-blue-700 hover:border-blue-500 rounded"
      to="/Favorites"
    >
     Mira a tus Pokemos Favoritos
    </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'SummaryFavorites',
        props: {
          pokemonList: {
            type: Array,
            required: true
          },
          favorites: {
            type: Array,
            required: true
          }
        },
        data: function() {
            return {
                maximumList: 10
            }
        },
        computed: {
            favoriteListLength() {
                return this.favorites.length
            }
        },
        methods: {
          startInterval() {
            const self = this
            const intervalID = window.setInterval(pickRandomPokemonOrClearInterval, 500)
            function pickRandomPokemonOrClearInterval() {
              if(self.favoriteListLength < self.maximumList) {
                self.pickRandomPokemon()
              } else {
                clearInterval(intervalID)
              }
            }
          },
          pickRandomPokemon() {
            const list = this.pokemonList.filter(function(pokemon){
              return !this.favorites.includes(pokemon.name)
            }, this)
            
            const number = Math.floor(Math.random() * Math.floor(list.length))
            this.$emit('addFavorite', list[number].name)
          },
          emptyFavoritePokemonList() {
            this.$emit('eraseFavoritePokemonList')
          }
        }
    }
</script>

<style scoped>
.chosen-pokemon {
    text-transform: capitalize;
}
</style>