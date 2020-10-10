<template>
  <div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
       <nav  class="w-full z-30 top-0 py-1 bg-gray-500 text-center">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
            <div class="order-1 md:order-2 align-middle ">
                <img src= "@/assets/img/logo.svg" alt="pokémon">
                        
            </div>         
        </div>
    </nav>
      <summary-favorites
        :pokemon-list="statePokemonDataList"
        :favorites="stateFavoritePokemonList"
        @addFavorite="addFavorite"
        @eraseFavoritePokemonList="eraseFavoritePokemonList"
      />
    <div class="" >
         <pokemon-list class=""
        :pokemon-list="statePokemonDataList"
        :favorites="stateFavoritePokemonList"
        @deleteFavorite="deleteFavorite"
        @addFavorite="addFavorite"
      />
    
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PokemonList from '@/components/PokemonList'
import SummaryFavorites from '@/components/SummaryFavorites'
export default {
    components: {
        PokemonList,
        SummaryFavorites,
    },
    computed: {
        ...mapState(['statePokemonDataList', 'stateFavoritePokemonList','filter']),
       
    },
    async created() {
        const pokemonData = await this.getPokemonData()
        this.setPokemonData(pokemonData)
    },
    methods: {
        async getPokemonData() {
            const data = await fetch(
                'https://pokeapi.co/api/v2/pokemon?limit=151'
            )
            const json = await data.json()
            return json.results
        },
        
        ...mapActions(['setPokemonData', 'addFavorite', 'deleteFavorite', 'eraseFavoritePokemonList']),

    }

}
</script>
