<template>
    <div class="h-32"></div>
    <div class="border-zinc-800 dark:bg-zinc-800">
        <br/>
        <h1 class="text-gray-900 dark:text-white text-center text-4xl">{{tournament.tournament_name + "'s Tournament"}}</h1>
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
      <p id="l1">{{ team1.team_name }}</p> <p id="l2">{{ team2.team_name }}</p>
      <p id="l3">{{ team3.team_name }}</p><p id="l4">{{ team4.team_name }}</p>
      <p id="l5">{{ team5.team_name }}</p><p id="l6">{{ team6.team_name }}</p>
      <p id="l7">{{ team7.team_name }}</p><p id="l8">{{ team8.team_name }}</p>
      <p id="l9">{{ team9.team_name }}</p><p id="l10">{{ team10.team_name }}</p>
      <p id="l11">{{ team11.team_name }}</p><p id="l12">{{ team12.team_name }}</p>
      <p id="l13">{{ team13.team_name }}</p><p id="l14">{{ team14.team_name }}</p>
      <p id="l15">{{ team15.team_name }}</p><p id="l16">{{ team16.team_name }}</p>
      <p id="l17">{{ team17.team_name }}</p><p id="l18">{{ team18.team_name }}</p>
      <p id="l19">{{ team19.team_name }}</p><p id="l20">{{ team20.team_name }}</p>
      <p id="l21">{{ team21.team_name }}</p><p id="l22">{{ team22.team_name }}</p>
      <p id="l23">{{ team23.team_name }}</p><p id="l24">{{ team24.team_name }}</p>
      <p id="l25">{{ team25.team_name }}</p><p id="l26">{{ team26.team_name }}</p>
      <p id="l27">{{ team27.team_name }}</p><p id="l28">{{ team28.team_name }}</p>
      <p id="l29">{{ team29.team_name }}</p><p id="l30">{{ team30.team_name }}</p>
      </div>
      <div class="hidden">
      <p id="x1">{{ team1.score }}</p> <p id="x2">{{ team2.score }}</p>
      <p id="x3">{{ team3.score }}</p><p id="x4">{{ team4.score }}</p>
      <p id="x5">{{ team5.score }}</p><p id="x6">{{ team6.score }}</p>
      <p id="x7">{{ team7.score }}</p><p id="x8">{{ team8.score }}</p>
      <p id="x9">{{ team9.score }}</p><p id="x10">{{ team10.score }}</p>
      <p id="x11">{{ team11.score }}</p><p id="x12">{{ team12.score }}</p>
      <p id="x13">{{ team13.score }}</p><p id="x14">{{ team14.score }}</p>
      <p id="x15">{{ team15.score }}</p><p id="x16">{{ team16.score }}</p>
      <p id="x17">{{ team7.score }}</p><p id="x18">{{ team8.score }}</p>
      <p id="x19">{{ team9.score }}</p><p id="x20">{{ team10.score }}</p>
      <p id="x21">{{ team11.score }}</p><p id="x22">{{ team12.score }}</p>
      <p id="x23">{{ team13.score }}</p><p id="x24">{{ team14.score }}</p>
      <p id="x25">{{ team15.score }}</p><p id="x26">{{ team16.score }}</p>
      <p id="x27">{{ team7.score }}</p><p id="x28">{{ team8.score }}</p>
      <p id="x29">{{ team9.score }}</p><p id="x30">{{ team10.score }}</p>
      </div>
        </div>
      <div class="h-24"></div>
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
        teams: [], tournament: [],
        team1:{}, team2:{}, team3:{}, team4:{}, team5:{}, team6:{}, team7:{}, team8:{},
        team9:{}, team10:{}, team11:{}, team12:{}, team13:{}, team14:{}, team15:{}, team16:{},
        team17:{}, team18:{}, team19:{}, team20:{}, team21:{}, team22:{}, team23:{}, team24:{},
        team25:{}, team26:{}, team27:{}, team28:{}, team29:{}, team30:{},
        tournaments: [],
        sc1: -1, sc2: 0, nxtrd: 16, b1: 1, b2: 2, j:0, max:0, min:0, done:0,
        maxLength: 2,
        s1: 0, s2: 0, s3: 0, s4: 0, s5: 0, s6: 0, s7: 0, s8: 0,
        s9: 0, s10: 0, s11: 0, s12: 0, s13: 0, s14: 0, s15: 0, s16: 0,
        s17: 0, s18: 0, s19: 0, s20: 0, s21: 0, s22: 0, s23: 0, s24: 0,
        s25: 0, s26: 0, s27: 0, s28: 0, s29: 0, s30: 0,
        score1: "", score2: "",
        nam: null,
        q1: 0, q2: 0, q3: 0, q4: 0, q5: 0, q6: 0, q7: 0, q8: 0, q9: 0, q10: 0, 
        q11: 0, q12: 0, q13: 0, q14: 0, q15: 0, q16: 0, q17: 0, q18: 0, q19: 0, q20: 0,
        q21: 0, q22: 0, q23: 0, q24: 0, q25: 0, q26: 0, q27: 0, q28: 0, q29: 0, q30: 0,
        //x1: 0, x2: 0, x3: 0, x4: 0, x5: 0, x6: 0, x7: 0, x8: 0, x9: 0, x10: 0, 
        //x11: 0, x12: 0, x13: 0, x14: 0, x15: 0, x16: 0, x17: 0, x18: 0, x19: 0, x20: 0,
        //x21: 0, x22: 0, x23: 0, x24: 0, x25: 0, x26: 0, x27: 0, x28: 0, x29: 0, x30: 0,
        n1: "", n2: "", n3: "", n4: "", n5: "", n6: "", n7: "", n8: "",
        n9: "", n10: "", n11: "", n12: "", n13: "", n14: "", n15: "", n16: "",
        n17: "", n18: "", n19: "", n20: "", n21: "", n22: "", n23: "", n24: "",
        n25: "", n26: "", n27: "", n28: "", n29: "", n30: "",
        submitted: false,
        dd:1, output: 0,
      };
    },
    created(){
        tournaService.getOne(this.$route.params.id)
        .then((tournament) => {
            this.tournament = tournament;
            console.log(this.tournament)
        })
        .catch((error) => this.error = error);
        scoreService.getAll(this.$route.params.id)
        .then((teams) => {
            this.teams = teams
            this.teams.forEach(elements => {
                if(elements.score_id > this.max) {
                    this.max = elements.score_id
                }
            });
            //console.log(this.max)
            this.min = this.max - 29
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
            this.q17 = this.min + 16
            this.q18 = this.min + 17
            this.q19 = this.min + 18
            this.q20 = this.min + 19
            this.q21 = this.min + 20
            this.q22 = this.min + 21
            this.q23 = this.min + 22
            this.q24 = this.min + 23
            this.q25 = this.min + 24
            this.q26 = this.min + 25
            this.q27 = this.min + 26
            this.q28 = this.min + 27
            this.q29 = this.min + 28
            this.q30 = this.min + 29
            //console.log(this.min)
                //this.maxx = this.max + 2
                for(let i=0; i < 2 ; i++){
                    
                //console.log(i)
                scoreService.getOne(this.q1)
                .then((team1) => {
                    this.team1 = team1
                    console.log(this.team1)
                    this.n1 = document.getElementById("l1").innerHTML
                    this.s1 = document.getElementById("x1").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q2)
                .then((team2) => {
                    this.team2 = team2
                    this.n2 = document.getElementById("l2").innerHTML
                    this.s2 = document.getElementById("x2").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q3)
                .then((team3) => {
                    this.team3 = team3
                    this.n3 = document.getElementById("l3").innerHTML
                    this.s3 = document.getElementById("x3").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q4)
                .then((team4) => {
                    this.team4 = team4
                    this.n4 = document.getElementById("l4").innerHTML
                    this.s4 = document.getElementById("x4").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q5)
                .then((team5) => {
                    this.team5 = team5
                    this.n5 = document.getElementById("l5").innerHTML
                    this.s5 = document.getElementById("x5").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q6)
                .then((team6) => {
                    this.team6 = team6
                    this.n6 = document.getElementById("l6").innerHTML
                    this.s6 = document.getElementById("x6").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q7)
                .then((team7) => {
                    this.team7 = team7
                    this.n7 = document.getElementById("l7").innerHTML
                    this.s7 = document.getElementById("x7").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q8)
                .then((team8) => {
                    this.team8 = team8
                    this.n8 = document.getElementById("l8").innerHTML
                    this.s8 = document.getElementById("x8").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q9)
                .then((team9) => {
                    this.team9 = team9
                    this.n9 = document.getElementById("l9").innerHTML
                    this.s9 = document.getElementById("x9").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q10)
                .then((team10) => {
                    this.team10 = team10
                    this.n10 = document.getElementById("l10").innerHTML
                    this.s10 = document.getElementById("x10").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q11)
                .then((team11) => {
                    this.team11 = team11
                    this.n11 = document.getElementById("l11").innerHTML
                    this.s11 = document.getElementById("x11").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q12)
                .then((team12) => {
                    this.team12 = team12
                    this.n12 = document.getElementById("l12").innerHTML
                    this.s12 = document.getElementById("x12").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q13)
                .then((team13) => {
                    this.team13 = team13
                    this.n13 = document.getElementById("l13").innerHTML
                    this.s13 = document.getElementById("x13").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q14)
                .then((team14) => {
                    this.team14 = team14
                    this.n14 = document.getElementById("l14").innerHTML
                    this.s14 = document.getElementById("x14").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q15)
                .then((team15) => {
                    this.team15 = team15
                    this.n15 = document.getElementById("l15").innerHTML
                    this.s15 = document.getElementById("x15").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q16)
                .then((team16) => {
                    this.team16 = team16
                    this.n16 = document.getElementById("l16").innerHTML
                    this.s16 = document.getElementById("x16").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q17)
                .then((team17) => {
                    this.team17 = team17
                    this.n17 = document.getElementById("l17").innerHTML
                    this.s17 = document.getElementById("x17").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q18)
                .then((team18) => {
                    this.team18 = team18
                    this.n18 = document.getElementById("l18").innerHTML
                    this.s18 = document.getElementById("x18").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q19)
                .then((team19) => {
                    this.team19 = team19
                    this.n19 = document.getElementById("l19").innerHTML
                    this.s19 = document.getElementById("x19").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q20)
                .then((team20) => {
                    this.team20 = team20
                    this.n20 = document.getElementById("l20").innerHTML
                    this.s20 = document.getElementById("x20").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q21)
                .then((team21) => {
                    this.team21 = team21
                    this.n21 = document.getElementById("l21").innerHTML
                    this.s21 = document.getElementById("x21").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q22)
                .then((team22) => {
                    this.team22 = team22
                    this.n22 = document.getElementById("l22").innerHTML
                    this.s22 = document.getElementById("x22").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q23)
                .then((team23) => {
                    this.team23 = team23
                    this.n23 = document.getElementById("l23").innerHTML
                    this.s23 = document.getElementById("x23").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q24)
                .then((team24) => {
                    this.team24 = team24
                    this.n24 = document.getElementById("l24").innerHTML
                    this.s24 = document.getElementById("x24").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q25)
                .then((team25) => {
                    this.team25 = team25
                    this.n25 = document.getElementById("l25").innerHTML
                    this.s25 = document.getElementById("x25").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q26)
                .then((team26) => {
                    this.team26 = team26
                    this.n26 = document.getElementById("l26").innerHTML
                    this.s26 = document.getElementById("x26").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q27)
                .then((team27) => {
                    this.team27 = team27
                    this.n27 = document.getElementById("l27").innerHTML
                    this.s27 = document.getElementById("x27").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q28)
                .then((team28) => {
                    this.team28 = team28
                    this.n28 = document.getElementById("l28").innerHTML
                    this.s28 = document.getElementById("x28").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q29)
                .then((team29) => {
                    this.team29 = team29
                    this.n29 = document.getElementById("l29").innerHTML
                    this.s29 = document.getElementById("x29").innerHTML
                })
                .catch((error) => this.error = error)
                scoreService.getOne(this.q30)
                .then((team30) => {
                    this.team30 = team30
                    this.n30 = document.getElementById("l30").innerHTML
                    this.s30 = document.getElementById("x30").innerHTML
                })
                .catch((error) => this.error = error)
            }
            
        })
        .catch((error) => this.error = error)
        
    },
    mounted(){


    },
    methods: {
       
    },
  };
  </script>
  
  <style>
  </style>