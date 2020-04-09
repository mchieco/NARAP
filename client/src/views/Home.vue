<template>
  <div class="caro">
    <v-carousel class="caros" height="auto">
      <v-carousel-item height="auto"
        v-for="(item,i) in items"
        :key="i"
        :src="item.src" aspect-ratio="3.27"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <div class="caroMisc">
          <p class="caroText">NARAP a unique approach to clinical research</p>

          <router-link to="/theProgram">
          <v-btn class="ma-2" id="caroBtn" outlined color="green">Learn More</v-btn>
          </router-link>

        </div>
      </v-carousel-item>
    </v-carousel>

    <div class="container" id="homeText">
      <!-- eslint-disable max-len -->
      <p>Centered in emergency deptartments across the US, NARAP is a non-profit clinical research organization facilitating large-scale, national, multi-center studies to increase the quality of healthcare delivery nationally, especially in the areas of screening and prevention.</p>
      <p>Our work engages vast numbers of pre-health professional students as Data Collectors / Research Associates in the studies, providing enhanced clinical opportunities unique to the research setting while teaching the fundamentals of interacting with patients.</p>
      <h1 class="headerTop"> Consider These Numbers </h1>
      <p>More than half the U.S. population visits an Emergency Department as a patient or visitor each year. The average Emergency Department visit lasts four hours.</p>
      <p>By conservative estimates, there are over half a million "pre-med" college and post-baccalaureate students any given year.</p>
    </div>

    <v-container fluid>
      <v-row id="homePics">
        <v-col cols="12" sm="4">
          <v-img
            id="homeImg"
            src="../assets/home3.png"
          ></v-img>
        </v-col>

        <v-col cols="12" sm="4">
          <v-img
            id="homeImg"
            src="../assets/home2.png"
          ></v-img>
        </v-col>

        <v-col cols="12" sm="4">
          <v-img
            id="homeImg"
            src="../assets/home1.png"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

    <div class="container" id="homeText">
      <!-- eslint-disable max-len -->
      <p>If there were similar clinical research requirements for medical school applicants as there are for  most other health professional students (on average 500 volunteer hours) this would result in an  additional 60,000,000 volunteer hours per year devoted to activities like RA programs.</p>
      <p>Even at minimum wage, this translates to a potential $435 million value in work by motivated,  college-educated students.</p>
      <p class="header3">NARAP brings these numbers together to produce a fundamental change in how clinical research is conducted, how screening and prevention is facilitated and how future health professionals discern, qualify and are developed.</p>
      <p>NARAP is producing millions of work hours for the public good compensated in a commodity other than money, with dividends for the nation’s health now and for generations to come. </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require('../assets/c1.png'),
        },
        {
          src: require('../assets/c2.png'),
        },
        {
          src: require('../assets/c3.png'),
        },
      ],
    };
  },
};
</script>

<style scoped>

p{
  font-size: 18px;
  font-family: 'Trebuchet MS', sans-serif;
  color:rgba(9, 8, 7, 0.924);
}

.headerTop{
  font-size: 30px;
  margin-top: 2%;
  font-family: 'Trebuchet MS', sans-serif;
  color: rgb(0, 48, 0);
}
.v-carousel {
  height: 550px !important;
}

.header3{
  font-size: 18px;
  font-weight: bold;
  color: rgb(84, 82, 82);
}

#wtf {
  text-align: center;
  padding-left: 500px;
  padding-right: 500px;
  padding-top: 100px;
  padding-bottom: 100px;
}
#homeImg {
  margin: 0 auto;
  max-width: 80%;
}
.caroText {
  font-size: 30px;
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
#caroBtn {
  height: 50px;
  width: 150px;
  position: relative;
  top: 100%;
  color: aliceblue;
  background-color: white !important;
  opacity: 0.7;
}
#caroBtn:hover {
  color: green;
}
.caroMisc {
  padding: 10%;
  margin-left: 28%;
  max-width: 35%;
}
#homeText {
  padding-left: 12%;
  padding-right: 12%;
  font-size: 20px;
  text-align: center;
}
#homePics{
  margin: 0 auto;
  max-width: 50%;
}
</style>
