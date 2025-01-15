<template>
  <div class="h-32"></div>
  <div class="border-zinc-800 dark:bg-zinc-800">
    <br/>
    <h1 class="text-gray-900 dark:text-white text-center text-4xl">Welcome to Tournament Scheduler</h1>
    <br/>
      <div class="border-zinc-900 dark:bg-zinc-900 mx-6 px-6 py-6">
            <form class="flex flex-col items-center justify-center" @submit.prevent="sub1">
                <h2 class="text-gray-900 dark:text-white text-center text-4xl">Create a Tournament</h2>
                <br />
                <button class="text-gray-900 dark:text-white text-xl bg-black px-8 py-4" type="submit">Start Now</button>
                <div v-if="error">{{ error }}</div>
            </form>
        </div>
        <br/>
    <h1 class="text-gray-900 dark:text-white text-center text-4xl">Tournaments</h1>
    <br/>
      <div class="border-zinc-900 dark:bg-zinc-900 mx-6 px-6 py-6">
      <ul class="flex flex-col space-y-2" v-if="tournaments.length">
        <li class="border-zinc-800 dark:bg-zinc-800 text-gray-900 dark:text-white hover:underline hover:bg-violet-600 px-2" v-for="tournament in tournaments" :key="tournament.tournament_id">
          <p class="text-gray-900 dark:text-white text-center text-2xl py-2 cursor-pointer">
            <router-link :to="'/Display/' + tournament.tournament_id">
              {{  tournament.tournament_id + " - " + tournament.tournament_name }}
            </router-link>
          </p>
        </li>
      </ul>
    </div>


    <br/>
    <br/>
  </div>
</template>

<script>

import { tournaService } from '../../services/tourna.service';

export default {
  data() {
    return {
      tournaments: [],
      error: "",
      selected: "",
      name: "",
      round: 0,
      id: 0,
      submitted: false,
      lol: 0,
      maxid: 0,
    };
  },
  mounted() {
      tournaService.getAll()
      .then((tournaments) => {
        this.tournaments = tournaments;
      })
      .catch((error) => this.error = error);
  },
  methods: {
    sub1(){
      this.submitted = true
      this.error = ""

      this.$router.push("/dashboard")
    }
  },
};
</script>

<style>
</style>