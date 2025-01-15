<template>
    <div class="h-32"></div>
    <div class="border-zinc-800 dark:bg-zinc-800">
        <br/>
        <h1 class="text-gray-900 dark:text-white text-center text-4xl">Login</h1>
        <br/>
        <form class="border-zinc-900 dark:bg-zinc-900 mx-6 px-6 py-6 flex flex-col items-center justify-center" @submit.prevent="handleSubmit">
          <br/>
          <label class="text-gray-900 dark:text-white text-xl">Email: </label>
          <input class="text-center form-control block w-3/5 px-3 py-1.5 text-base text-gray-700 bg-grey-500 focus:text-gray-700 focus:bg-white focus:outline-none" type="email" name="email" v-model="email" />
          <div class="text-red-700 dark:text-red-700" v-show="submitted && !email">Email is Required</div>

          <br /><br />

          <label class="text-gray-900 dark:text-white text-xl">Password: </label>
          <input class="text-center form-control block w-3/5 px-3 py-1.5 text-base text-gray-700 bg-grey-500 focus:text-gray-700 focus:bg-white focus:outline-none" type="password" name="password" v-model="password" />
          <div class="text-red-700 dark:text-red-700" v-show="submitted && !password">Password is Required</div>

          <br /><br />

          <button class="text-gray-900 dark:text-white text-xl bg-black px-8 py-4" v-on:click = handleSubmit(e)>Login</button>
          <br/>
          <div v-if="error">{{ error }}</div>
      </form>
      <br/>
    </div>
  </template>
  
<script>

    import { usersService } from '../../services/users.service';
    //import * as EmailValidator from 'email-validator';

    export default {

        data(){
            return {
                email: "",
                password: "",
                error: "",
                submitted: false
            }
        },
        methods: {
            handleSubmit(e){
                this.submitted = true
                this.error = ""

                usersService.login(this.email, this.password)
                .then(result => {
                    console.log("Auth - go to dash")
                    this.$router.push("/dashboard")
                })
                .catch(error => {
                    this.error = error
                    this.loading = false
                });
            }
        },
    }
</script>