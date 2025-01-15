<template>
  <div>
    <nav class="border-zinc-900 dark:bg-zinc-900 flex flex-col my-auto items-center fixed w-screen h-32">
            <br/>
            <p class="text-gray-900 dark:text-white text-4xl">Football Tournament Scheduler</p>
            <br/>
            <div class="flex flex-row mt-0 mr-6 space-x-24 text-xl">
            
                  <span></span>
                  <router-link class="text-gray-900 dark:text-white hover:underline" to="/">Home</router-link>   
                  <router-link class="text-gray-900 dark:text-white hover:underline" to="/login">Login</router-link>
                  <router-link class="text-gray-900 dark:text-white hover:underline" to="/dashboard">Dashboard</router-link>
                  <!--<router-link class="text-gray-900 dark:text-white hover:underline" to="/register">Register</router-link> -->
                  <span></span>   
          </div>
      </nav>
      <router-view />
  </div>
</template>