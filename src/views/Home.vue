<template>
  <div class="caro">
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      <div class="caroMisc">
      <p class="caroText"> NARAP a unique approach to clinical research  </p>
      <v-btn class="ma-2" id="caroBtn" outlined color="green">Learn More</v-btn>
      </div>
      </v-carousel-item>
    </v-carousel>

  <div class="container" id="homeText">
<!-- eslint-disable max-len -->
<p>Centered in emergency deptartments across the US, NARAP is a non-profit clinical research organization facilitating large-scale, national, multi-center studies to increase the quality of healthcare delivery nationally, especially in the areas of screening and prevention.</p>
<p>Our work engages vast numbers of pre-health professional students as Data Collectors / Research Associates in the studies, providing enhanced clinical opportunities unique to the research setting while teaching the fundamentals of interacting with patients. </p>
  <h1> Consider These Numbers</h1>
  <p> More than half the U.S. population visits an Emergency Department as a patient or visitor each year. The average Emergency Department visit lasts four hours. </p>
    <p> By conservative estimates, there are over half a million "pre-med" college and post-baccalaureate  students any given year.</p>
  </div>

    <v-container fluid>
      <v-row>
        <v-col cols="6" sm="4">
          <v-img
            id="homeImg"
            src="https://static.wixstatic.com/media/4c8ad7_500e6464d174418191ffe84f3195903c~mv2.png/v1/fill/w_250,h_270,al_c,q_80,usm_4.00_1.00_0.00/4c8ad7_500e6464d174418191ffe84f3195903c~mv2.webp"
          ></v-img>
        </v-col>

        <v-col cols="6" sm="4">
          <v-img
            id="homeImg"
            src="https://static.wixstatic.com/media/4c8ad7_af4a2caa4e77432fb1a521d4ace0c112~mv2.png/v1/crop/x_0,y_0,w_299,h_308/fill/w_250,h_270,al_c,q_80,usm_4.00_1.00_0.00/4c8ad7_af4a2caa4e77432fb1a521d4ace0c112~mv2.webp"
          ></v-img>
        </v-col>

        <v-col cols="6" sm="4">
          <v-img
            id="homeImg"
            src="https://static.wixstatic.com/media/4c8ad7_bd714323d6a64a4e98bc2dc9be89d136~mv2.png/v1/fill/w_271,h_286,al_c,q_80,usm_4.00_1.00_0.00/4c8ad7_bd714323d6a64a4e98bc2dc9be89d136~mv2.webp"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            'https://static.wixstatic.com/media/4c8ad7_0b0072a429ba48e099f3f6279940bb9a~mv2.png/v1/fill/w_1407,h_550,al_c,q_85,usm_4.00_1.00_0.00/4c8ad7_0b0072a429ba48e099f3f6279940bb9a~mv2.webp',
        },
        {
          src:
            'https://static.wixstatic.com/media/4c8ad7_5209cf4bd74340f1861b554a16e162c3~mv2.png/v1/fill/w_1407,h_550,al_c,q_85,usm_4.00_1.00_0.00/4c8ad7_5209cf4bd74340f1861b554a16e162c3~mv2.webp',
        },
        {
          src:
            'https://static.wixstatic.com/media/4c8ad7_997d7f2a15dc4257932dcae46bdecea2~mv2.png/v1/fill/w_1407,h_550,al_c,q_85,usm_4.00_1.00_0.00/4c8ad7_997d7f2a15dc4257932dcae46bdecea2~mv2.webp',
        },
      ],
    };
  },
};
</script>

<style>
.caro {

}
.v-carousel {
  height: 550px !important;
}

#wtf {
  text-align: center;
  padding-left: 500px;
  padding-right: 500px;
  padding-top: 100px;
  padding-bottom: 100px;
}
#homeImg {
  padding-top: 100px;
  height: 90%;
}
.caroText{
  font-size: 25px;
  color: white;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
#caroBtn{
    height:50px;
    width:200px;
    position:relative;
    top:100%;
    color: aliceblue;
    background-color: white!important;
    opacity: 0.7;
  }
#caroBtn:hover {
  color: green;
}
.caroMisc{
  padding: 10%;
  margin-left: 8%;
  max-width: 45%;
}
#homeText{
  padding-left: 12%;
  padding-right: 12%;
  padding-top: 5%;
  padding-bottom: 5%;
  font-size: 20px;
  text-align: center;
}

</style>
