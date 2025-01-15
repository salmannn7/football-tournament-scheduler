<template>
      <div class="h-32"></div>
      <div class="border-zinc-800 dark:bg-zinc-800">
        <br/>
      <h1 class="text-gray-900 dark:text-white text-center text-4xl">Enter Teams</h1>
      <br/>
      <div class="border-zinc-900 dark:bg-zinc-900 mx-6 px-6 py-6">
        <form class="flex flex-col items-center justify-center">
          <label class="text-gray-900 dark:text-white text-xl">Team Name:</label>
          <input class="text-center form-control block w-2/5 px-3 py-1.5 text-base text-gray-700 bg-grey-500 focus:text-gray-700 focus:bg-white focus:outline-none" placeholder="Team Name" id="Tn" v-model="Tname">
        <br/>
        <button class="text-black text-xl bg-zinc-500 px-8 py-4" v-on:click = sub1()>Set Team</button>
        </form>
      </div>
      <br/>
      <h1 class="text-gray-900 dark:text-white text-center text-4xl">Teams</h1>
      <br/>
      <div class="border-zinc-900 dark:bg-zinc-900 mx-6 px-6 py-6">
      <p class="text-gray-900 dark:text-white text-center text-2xl">{{"There Are Currently " + t + " Teams"}}</p>
      <br/>
      <ul class="flex flex-col space-y-2" v-if="teams.length">
        <li class="border-zinc-800 dark:bg-zinc-800 text-gray-900 dark:text-white hover:underline hover:bg-violet-600 px-2" v-for="team in teams" :key="team.team_id">
          <p>
            {{ team.team_name }}
          </p>
        </li>
      </ul>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  </template>
  
  <script>

    import { teamService } from '../../services/team.service';
    import { tournaService } from '../../services/tourna.service';

  export default {
    data() {
      return {
        teams: [],
        tournaments: [],
        Tname: "",
        null_teams: null,
        submitted: false,
        submitted1: false,
        selected: "",
        c: 0,t: 0, b: 0, done: 0, list: null, ll: true,
      };
    },
    created() {
      tournaService.getOne(this.$route.params.id)
      .then((tournaments) => {
        this.tournaments = tournaments;
        teamService.getAll(this.$route.params.id)
        .then((teams) => {
          this.teams = teams
          this.t = this.teams.length
        })
        .catch((error) => this.error = error)

      })
      .catch((error) => this.error = error);
    },
    mounted(){
    },
    methods: {
        sub1(){
          this.submitted = true
            this.c = this.teams.length
            this.c = this.c + 1
              console.log(this.c)
              if(this.c < 17) { 
                teamService.create(this.$route.params.id, this.Tname)
              .then(result => {
                console.log("success")
                this.done = 1
                this.$router.go(0)
              })
              .catch(error => this.error = error);
              }
              else {
                document.getElementById('Tn').readOnly = false
                this.$router.push("/Tree/" + this.$route.params.id)
              }

        },
    },
  };
  </script>
  
  <style>
  </style>