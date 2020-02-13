<template>
  <div class="container">
    <div>
      <v-row>
        <h1 class="headerTop">The Research Associate Program Model</h1>
      </v-row>
      <v-row>
        <v-img class="proImg" src="../assets/program.png"></v-img>
      </v-row>
      <v-row class="headerThree">
          <h5>Our Program</h5>
      </v-row>
      <v-row class="headerThree">
        <h6 class="headerFour">At NARAP there are three ways you can work with us:</h6>
      </v-row>
      <v-row class="headerThree">
        <h5 class="headerSmaller">Research Associates</h5>
      </v-row>
      <v-row class="listRow1">
        <ul class="list">
          <li>pre-health professional students</li>
          <li>volunteering one, 4 -hour shift per week</li>
          <li>in the emergency departments (EDs) at Affiliate hospitals</li>
          <li>as data collectors in clinical research</li>
        </ul>
      </v-row>
      <v-row class="button">
        <button type="button" class="btn blue-gradient" target="_blank" onclick="window.location.href = '../research-associates'">Learn More</button>
      </v-row>
      <v-row class="headerThree">
        <h5 class="headerSmaller">Affiliates</h5>
      </v-row>
      <v-row class="listRow2">
        <ul class="list">
          <li>NARAP helps departments of emergency medicine initiate, develop and maintain Research Associates Programs</li>
          <li>currently, 17 Affiliate hospitals nationwide.</li>
          <li>each Affiliate's Research Associates Program functions autonomously, focusing mainly on their research and then on NARAP's multi-center study on the ED as a site to facilitate primary health care.</li>
          <li>minimizing cost and impact on clinical personnel</li>
        </ul>
      </v-row>
      <v-row class="button">
        <button type="button" class="btn blue-gradient" onclick="window.location.href = '../affiliates'">Learn More</button>
      </v-row>
      <v-row class="headerThree">
        <h5 class="headerSmaller">Clinical Researchers</h5>
      </v-row>
      <v-row class="">
        <ul class="list">
          <li>research accomplished</li>
            <ul>
                <li>enrolling unprecedented numbers of participants over short time frames </li>
                <li>from the broad range of diverse demographics found in NARAP Affiliates in urban, suburban and rural settings across the U.S.</li>
                <li>while minimizing cost</li>
            </ul>
        </ul>
      </v-row>
      <v-row class="button">
        <button type="button" class="btn blue-gradient" onclick="window.location.href = '../our-research'">Learn More</button>
      </v-row>
    </div>
  </div>
</template>


<style scoped>

.proImg{
    max-width: 70%;
    margin: 0% auto;
}

.headerTop{
  font-size: 40px;
  margin-top: 2%;
  width: 75%;
  font-family: 'Trebuchet MS', sans-serif;
  color: rgb(0, 48, 0);
}

.headerThree{
  font-size: 20px;
  width: 75%;
  font-family: 'Trebuchet MS', sans-serif;
  color: rgb(0, 48, 0);
}

.headerSmaller{
  font-size: 17px;
  font-weight: bold;
  color:rgb(31, 31, 31);
  font-size: px;
}

.headerFour{
  color: rgb(62, 61, 60)
}

.list{
  font-size: 15px;
  font-family: 'Trebuchet MS', sans-serif;
  color:rgba(9, 8, 7, 0.924);
  margin-bottom: -10%;
}

</style>
