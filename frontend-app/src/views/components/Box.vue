<template>
    
        <div class="w-auto border-white border-2 bg-black dark:bg-purple grid grid-cols-2 gap-4">
            <div class=" text-start">
                <p class="text-white">{{name}}</p>
            </div>
            <div class="text-end">
                <p class="text-white">{{score}}</p>
            </div>
        </div>
    
  </template>
  
  <script>
  export default {
    props: {
        name: String,
        score: Number,
    },
    data() {
      return {
        maxLength: 2,
      };
    },
  };
  </script>