<template>
    <div class="h-32"></div>
    <div class="border-zinc-800 dark:bg-zinc-800">
        <br/>
        <h1 class="text-gray-900 dark:text-white text-center text-4xl">Tournament Tree</h1>
        <br/>
        <div class="border-zinc-900 dark:bg-zinc-900 mx-6 px-6 py-6">
      <div class="grid grid-cols-7 gap-4">
        <div class="grid grid-rows-7 gap-2">
            <div id="1">
                <Box :name="n1" :score="s1"></Box>
                <Box :name="n2" :score="s2"></Box>
            </div>
            <br/>
            <div id="2">
                <Box :name="n3" :score="s3"></Box>
                <Box :name="n4" :score="s4"></Box>
            </div>
            <br/>
            <div id="3">
                <Box :name="n5" :score="s5"></Box>
                <Box :name="n6" :score="s6"></Box>
            </div>
            <br/>
            <div id="4">
                <Box :name="n7" :score="s7"></Box>
                <Box :name="n8" :score="s8"></Box>
            </div>
        </div>


        <div class="grid grid-rows-7 gap-2">
            <div></div>
            <div>
                <Box :name="n17" :score="s17"></Box>
                <Box :name="n18" :score="s18"></Box>
            </div>
            <br/>
            <div>
                <Box :name="n19" :score="s19"></Box>
                <Box :name="n20" :score="s20"></Box>
            </div>
        </div>


        <div class="grid grid-rows-7 gap-2">
            <div></div>
            <div>
                <Box :name="n25" :score="s25"></Box>
                <Box :name="n26" :score="s26"></Box>
            </div>
        </div>


        <div class="grid grid-rows-7 gap-2">
            <div></div>
            <div>
                <Box :name="n29" :score="s29"></Box>
                <Box :name="n30" :score="s30"></Box>
            </div>
        </div>


        <div class="grid grid-rows-7 gap-2">
            <div></div>
            <div>
                <Box :name="n27" :score="s27"></Box>
                <Box :name="n28" :score="s28"></Box>
            </div>
        </div>


        <div class="grid grid-rows-7 gap-2">
            <div></div>
            <div>
                <Box :name="n21" :score="s21"></Box>
                <Box :name="n22" :score="s22"></Box>
            </div>
            <br/>
            <div>
                <Box :name="n23" :score="s23"></Box>
                <Box :name="n24" :score="s24"></Box>
            </div>
        </div>


        <div class="grid grid-rows-7 gap-2">
            <div id="5">
                <Box :name="n9" :score="s9"></Box>
                <Box :name="n10" :score="s10"></Box>
            </div>
            <br/>
            <div id="6">
                <Box :name="n11" :score="s11"></Box>
                <Box :name="n12" :score="s12"></Box>
            </div>
            <br/>
            <div id="7">
                <Box :name="n13" :score="s13"></Box>
                <Box :name="n14" :score="s14"></Box>
            </div>
            <br/>
            <div id="8">
                <Box :name="n15" :score="s15"></Box>
                <Box :name="n16" :score="s16"></Box>
            </div>
        </div>
      </div>
      <div class="hidden">
        <p id="l1">{{ team1.team_name }}</p>
      <p id="l2">{{ team2.team_name }}</p>
      <p id="l3">{{ team3.team_name }}</p>
      <p id="l4">{{ team4.team_name }}</p>
      <p id="l5">{{ team5.team_name }}</p>
      <p id="l6">{{ team6.team_name }}</p>
      <p id="l7">{{ team7.team_name }}</p>
      <p id="l8">{{ team8.team_name }}</p>
      <p id="l9">{{ team9.team_name }}</p>
      <p id="l10">{{ team10.team_name }}</p>
      <p id="l11">{{ team11.team_name }}</p>
      <p id="l12">{{ team12.team_name }}</p>
      <p id="l13">{{ team13.team_name }}</p>
      <p id="l14">{{ team14.team_name }}</p>
      <p id="l15">{{ team15.team_name }}</p>
      <p id="l16">{{ team16.team_name }}</p>
      </div>
        </div>
      <div class="h-48"></div>
      <div class="bg-black h-1/3 w-screen bottom-0 fixed flex flex-col items-center justify-center">
        <p class="text-white hidden">{{"lol1: " + sc1 + " lol2: "+ sc2 + " lol3: " + nxtrd + " b1: " + b1 + " b2: " + b2}}</p>
        <h2 class="text-gray-900 dark:text-white text-center text-xl">Score 1:</h2>
        <input class="text-center form-control block w-1/12 px-3 py-1 text-base text-gray-700 bg-grey-500 focus:text-gray-700 focus:bg-white focus:outline-none" v-model="score1" :maxlength="maxLength">
        <h2 class="text-gray-900 dark:text-white text-center text-xl">Score 2:</h2>
        <input class="text-center form-control block w-1/12 px-3 py-1 text-base text-gray-700 bg-grey-500 focus:text-gray-700 focus:bg-white focus:outline-none" v-model="score2" :maxlength="maxLength">
        <br/>
        <button class="text-gray-900 dark:text-white border-white border-2 text-xl bg-black px-8 py-2" v-on:click = handleSubmit(e)>Submit</button>
      </div>
    </div>
  </template>
  
  <script>
  import Box from "../components/Box.vue";
  import BoxSel from "../components/BoxSel.vue";
  import { teamService } from '../../services/team.service';
  import { tournaService } from '../../services/tourna.service';
  import { scoreService } from '../../services/score.service';

  export default {
    components: {
    Box,
    BoxSel,
    },
    data() {
      return {
        teams: [],
        team1:{}, team2:{}, team3:{}, team4:{}, team5:{}, team6:{}, team7:{}, team8:{},
        team9:{}, team10:{}, team11:{}, team12:{}, team13:{}, team14:{}, team15:{}, team16:{},
        tournaments: [],
        sc1: -1, sc2: 0, nxtrd: 16, b1: 1, b2: 2, j:0, max:0, min:0, done:0,
        maxLength: 2,
        s1: 0, s2: 0, s3: 0, s4: 0, s5: 0, s6: 0, s7: 0, s8: 0,
        s9: 0, s10: 0, s11: 0, s12: 0, s13: 0, s14: 0, s15: 0, s16: 0,
        s17: 0, s18: 0, s19: 0, s20: 0, s21: 0, s22: 0, s23: 0, s24: 0,
        s25: 0, s26: 0, s27: 0, s28: 0, s29: 0, s30: 0,
        score1: "", score2: "",
        nam: null,
        q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0, q8: 0,
        q9: 0, q10: 0, q11: 0, q12: 0, q13: 0, q14: 0, q15: 0, q16: 0,
        n1: "", n2: "", n3: "", n4: "", n5: "", n6: "", n7: "", n8: "",
        n9: "", n10: "", n11: "", n12: "", n13: "", n14: "", n15: "", n16: "",
        n17: "TBD", n18: "TBD", n19: "TBD", n20: "TBD", n21: "TBD", n22: "TBD", n23: "TBD", n24: "TBD",
        n25: "TBD", n26: "TBD", n27: "TBD", n28: "TBD", n29: "TBD", n30: "TBD",
        submitted: false,
        dd:1, output: 0,
      };
    },
    created(){
        tournaService.getOne(this.$route.params.id)
        .then((tournaments) => {
            this.tournaments = tournaments;
        })
        .catch((error) => this.error = error);
        teamService.getAll(this.$route.params.id)
        .then((teams) => {
            this.teams = teams
            this.teams.forEach(elements => {
                if(elements.team_id > this.max) {
                    this.max = elements.team_id
                }
            });
            //console.log(this.max)
            this.min = this.max - 15
            this.q1 = this.min + 0
            this.q2 = this.min + 1
            this.q3 = this.min + 2
            this.q4 = this.min + 3
            this.q5 = this.min + 4
            this.q6 = this.min + 5
            this.q7 = this.min + 6
            this.q8 = this.min + 7
            this.q9 = this.min + 8
            this.q10 = this.min + 9
            this.q11 = this.min + 10
            this.q12 = this.min + 11
            this.q13 = this.min + 12
            this.q14 = this.min + 13
            this.q15 = this.min + 14
            this.q16 = this.min + 15
            //console.log(this.min)
                //this.maxx = this.max + 2
                for(let i=0; i < 2 ; i++){
                    
                //console.log(i)
                teamService.getOne(this.q1)
                .then((team1) => {
                    this.team1 = team1
                    //console.log(this.team)
                    //for(let e=0; e < 2; e++){
                    this.n1 = document.getElementById("l1").innerHTML
                    //}
                    //var Place = document.getElementById("l1").innerHTML
                    //console.log(Place)
                    
                })
                .catch((error) => this.error = error)
                teamService.getOne(this.q2)
                .then((team2) => {
                    this.team2 = team2
                    this.n2 = document.getElementById("l2").innerHTML
                })
                .catch((error) => this.error = error)
                teamService.getOne(this.q3)
                .then((team3) => {
                    this.team3 = team3
                    this.n3 = document.getElementById("l3").innerHTML
                })
                .catch((error) => this.error = error)
                teamService.getOne(this.q4)
                .then((team4) => {
                    this.team4 = team4
                    this.n4 = document.getElementById("l4").innerHTML
                })
                .catch((error) => this.error = error)
                teamService.getOne(this.q5)
                .then((team5) => {
                    this.team5 = team5
                    this.n5 = document.getElementById("l5").innerHTML
                })
                .catch((error) => this.error = error)
                teamService.getOne(this.q6)
                .then((team6) => {
                    this.team6 = team6
                    this.n6 = document.getElementById("l6").innerHTML
                })
                .catch((error) => this.error = error)
                teamService.getOne(this.q7)
                .then((team7) => {
                    this.team7 = team7
                    this.n7 = document.getElementById("l7").innerHTML
                })
                .catch((error) => this.error = error)
                teamService.getOne(this.q8)
                .then((team8) => {
                    this.team8 = team8
                    this.n8 = document.getElementById("l8").innerHTML
                })
                .catch((error) => this.error = error)
                teamService.getOne(this.q9)
                .then((team9) => {
                    this.team9 = team9
                    this.n9 = document.getElementById("l9").innerHTML
                })
                .catch((error) => this.error = error)
                teamService.getOne(this.q10)
                .then((team10) => {
                    this.team10 = team10
                    this.n10 = document.getElementById("l10").innerHTML
                })
                .catch((error) => this.error = error)
                teamService.getOne(this.q11)
                .then((team11) => {
                    this.team11 = team11
                    this.n11 = document.getElementById("l11").innerHTML
                })
                .catch((error) => this.error = error)
                teamService.getOne(this.q12)
                .then((team12) => {
                    this.team12 = team12
                    this.n12 = document.getElementById("l12").innerHTML
                })
                .catch((error) => this.error = error)
                teamService.getOne(this.q13)
                .then((team13) => {
                    this.team13 = team13
                    this.n13 = document.getElementById("l13").innerHTML
                })
                .catch((error) => this.error = error)
                teamService.getOne(this.q14)
                .then((team14) => {
                    this.team14 = team14
                    this.n14 = document.getElementById("l14").innerHTML
                })
                .catch((error) => this.error = error)
                teamService.getOne(this.q15)
                .then((team15) => {
                    this.team15 = team15
                    this.n15 = document.getElementById("l15").innerHTML
                })
                .catch((error) => this.error = error)
                teamService.getOne(this.q16)
                .then((team16) => {
                    this.team16 = team16
                    this.n16 = document.getElementById("l16").innerHTML
                })
                .catch((error) => this.error = error)
                
            }
            
        })
        .catch((error) => this.error = error)
        
    },
    mounted(){


    },
    methods: {
        handleSubmit(e){
            this.submitted = true
            if(this.score1 !== this.score2){
                this.sc1 = this.sc1 + 2
                this.sc2 = this.sc2 + 2
                this.b1 = this.b1 + 2
                this.b2 = this.b2 + 2
                this.nxtrd = this.nxtrd + 1
                eval('this.s' + this.sc1 + ' = parseInt(this.score1)')
                eval('this.s' + this.sc2 + ' = parseInt(this.score2)')
                if(eval('this.s' + this.sc1 + ' > ' + 'this.s' + this.sc2)) {
                    scoreService.create(this.$route.params.id, this.score1, eval('this.n'+this.sc1))
                    .then((result) => {
                        console.log("success")
                        console.log(this.$route.params.id, this.score1, eval('this.n'+this.sc1))
                    })
                    .catch((error) => this.error = error)
                    scoreService.create(this.$route.params.id, this.score2, eval('this.n'+this.sc2))
                    .then((result) => {
                        console.log("success")
                        console.log(this.$route.params.id, this.score2, eval('this.n'+this.sc2))
                    })
                    .catch((error) => this.error = error)
                    eval('this.n' + this.nxtrd + ' = this.n' + this.sc1)
                }
                else if(eval('this.s' + this.sc2 + ' > ' + 'this.s' + this.sc1)) {
                    console.log(this.$route.params.id, this.score1, eval('this.n'+this.sc1))
                    console.log(this.$route.params.id, this.score2, eval('this.n'+this.sc2))
                    scoreService.create(this.$route.params.id, this.score1, eval('this.n'+this.sc1))
                    .then((result) => {
                        console.log("success")
                    })
                    .catch((error) => this.error = error)
                    scoreService.create(this.$route.params.id, this.score2, eval('this.n'+this.sc2))
                    .then((result) => {
                        console.log("success")
                    })
                    .catch((error) => this.error = error)
                    eval('this.n' + this.nxtrd + ' = this.n' + this.sc2)
                }
                else {
                    console.log("error")
                }
            }
            else if(this.score1 == this.score2){
                console.log("error")
                this.teams.forEach(elements => {
                    console.table(elements);
                });
            }
            else {
                console.log("error")
                this.teams.forEach(elements => {
                    console.log(elements.team_no + elements.team_name)
                });
            }
            //this.s1 = parseInt(this.score1)
            //this.s2 = parseInt(this.score2)
            if(this.b1 > 30){
                this.$router.push("/Display/" + this.$route.params.id)
            }
        }
    },
  };
  </script>
  
  <style>
  </style>