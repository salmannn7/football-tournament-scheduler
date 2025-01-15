<template>
    <div class="h-32"></div>
    <div class="border-zinc-800 dark:bg-zinc-800">
      <br/>
      <h1 class="text-gray-900 dark:text-white text-center text-4xl">Welcome to Dashboard!</h1>
      <br/>
      <div class="border-zinc-900 dark:bg-zinc-900 mx-6 px-6 py-6">
            <form class="flex flex-col items-center justify-center" @submit.prevent="sub1">
                <h2 class="text-gray-900 dark:text-white text-center text-2xl">Create a Tournament</h2>
                <label class="text-gray-900 dark:text-white text-xl">Name: </label>
                <input class="text-center form-control block w-2/5 px-3 py-1.5 text-base text-gray-700 bg-grey-500 focus:text-gray-700 focus:bg-white focus:outline-none" type="text" name="name" v-model="name" />
                <div v-show="submitted && !name">Title is Required</div>
                <br /><br />
                <button class="text-gray-900 dark:text-white text-xl bg-black px-8 py-4" type="submit">Add Tournament</button>
                <div v-if="error">{{ error }}</div>
            </form>
        </div>
      <div class="h-6"></div>
      <div class="h-6"></div>
      <div class="border-zinc-900 dark:bg-zinc-900 mx-6 px-6 py-6 flex flex-col items-center justify-center">
        <form @submit.prevent="sub">
          <button class="text-gray-900 dark:text-white text-xl bg-black px-8 py-4" type="submit">Log Out</button>
        </form>
      </div>
      <div class="h-6"></div>
      <div v-if="error">
        {{ error }}
      </div>
    </div>
  
  </template>
  
  <script>

  import { usersService } from '../../services/users.service';
  import { tournaService } from '../../services/tourna.service';
  
    export default {
      data() {
        return {
          error: "",
          submitted: false,
          tournaments: [],
          name:"",
          maxid: 0,
        }
      },
      mounted() {
    tournaService.getAll()
      .then((tournaments) => {
        this.tournaments = tournaments;

      })
      .catch((error) => this.error = error);
  },
      methods: {
        sub1() {
      this.submitted = true
      this.error = ""
      tournaService.create(this.name, this.round)
      .then(result => {
        console.log("success")
        this.tournaments.forEach(elements => {
          if(elements.tournament_id > this.maxid) {
            this.maxid = elements.tournament_id
          }
        });
        this.maxid = this.maxid + 1
        console.log(this.maxid)
        this.$router.push("/Create/" + this.maxid)
        })
        .catch(error => this.error = error);
      },
      sub() {
        this.error = ""

        usersService.logout()
        .then(result => {
          console.log("Logging Out")
          this.$router.push("/")
        })
        .catch(error => {
          this.error = error
          this.loading = false
        });
      },
    }
  }
  </script>
  