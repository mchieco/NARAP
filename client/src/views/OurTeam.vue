<template>
  <div class="container" id="aboutContainer">
    <div class="">
      <v-row>
        <h1 class="headerTop">
          Our Team
        </h1>
      </v-row>
      <v-row>
        <p class="pText"><!-- eslint-disable max-len -->
        The National Alliance of Research Associates Programs achieves its mission of improving the quality of national healthcare through
        a joint effort from our team. This allows NARAP to change how we facilitate primary health for large segments of the U.S. population,
        how we conduct clinical research efficiently, rapidly and at low cost, and how we develop and select future doctors and health
        professionals.</p>
      </v-row>

      <v-row class="row">
        <v-img class="keithIMG" src="../assets/keith.png"></v-img>
      </v-row>
      <v-row>
        <p class="cap">Chief Executive Officer | Dr. Keith Bradley | Chief Medical Officer &amp; Founder</p>
      </v-row>

      <v-row>
        <p class="pText"><!-- eslint-disable max-len -->
        As Founder, CEO &amp; CMO, Dr. Bradley's focus is on organizational, program and research growth and development and oversight.
        Dr. Keith Bradley, MD has had a long career as an academic emergency physician. After graduating from Notre Dame, he worked as an EMT in
        the Hell’s Kitchen section of New York before medical school at Tulane. He completed his residency in emergency medicine at Medical College
        of Pennsylvania. He has been a physician in the emergency departments in the Tidewater area of Virginia and at Norwalk Hospital (CT),
        Lincoln Medical and Mental Health Center in the South Bronx and Bridgeport Hospital (CT). He has served as faculty at Eastern Virginia
        Medical School, New York Medical College, and the Yale University School of Medicine. </p>
        <p class="pText">
        While at Norwalk Hospital, Dr. Bradley began his clinical research as a site investigator for the Brain Resuscitation Clinical
        Trials with the University of Pittsburgh and also developed the first Level 2 Trauma Center in Connecticut.  He developed one of the
        nation’s first Research Associates Program at Lincoln, following with RA Programs at Bridgeport Hospital and now at St. Vincent’s Medical
        Center (CT), NARAP’s clinical home.  He has published numerous articles in the medical literature and is recognized nationally as an expert
        in this model for clinical research.
        </p>
      </v-row>

      <v-row>
        <h1 class="headerTwo">
          Board of Directors
        </h1>
      </v-row>
      <v-row class="pText">
        <ul>
            <li>Keith Bradley, MD, Board Chair </li>
            <li>Hamilton Jones, Deputy Chair </li>
            <li>Miguel Porto, Treasurer</li>
            <li>Gina Romanos, Secretary </li>
            <li>Alexandra Kropotova, MD</li>
            <li>Steve Valassis, MD </li>
        </ul>
      </v-row>
      <v-row>
        <h1 class="headerTwo">
          Executive Team
        </h1>
      </v-row>
      <v-row class="execRow">
        <v-row>
          <v-col class="col-1" cols="2" lg="6" md="6" sm="12">
            <figure>
              <v-img class="exec" src="../assets/keith2.png"></v-img>
            </figure>
            <figcaption>
              <p class="boldText"> Keith Bradley </p> <p class="desc">Founder, CEO, Chief Medical Officer </p>
            </figcaption>
          </v-col>
          <v-col class="col-1" cols="2" lg="6" md="6" sm="12">
            <figure>
              <v-img class="exec" src="../assets/gina.png"></v-img>
            </figure>
            <figcaption>
              <p class="boldText"> Gina Romanos </p> <p class="desc">Chief Operating Officer</p>
            </figcaption>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-1" cols="2" lg="6" md="6" sm="12">
            <figure>
              <v-img class="exec" src="../assets/robert.png"></v-img>
            </figure>
            <figcaption>
              <p class="boldText"> Robert Wickey </p> <p class="desc">Chief Financial Officer </p>
            </figcaption>
          </v-col>
          <v-col class="col-1" cols="2" lg="6" md="6" sm="12">
            <figure>
              <v-img class="exec" src="../assets/beau.png"></v-img>
            </figure>
            <figcaption>
              <p class="boldText"> Beau Abar </p> <p class="desc">Chief Research Officer </p>
            </figcaption>
          </v-col>
        </v-row>
      </v-row>
      <v-row class="rowBottom2">
        <h1 class="headerBottom">To schedule a meeting with a member of the NARAP Executive Team, click on the following link:
          <a href="mailto:ask@theNARAP.org" style="text-decoration: underline;">administrativeassistant@theNARAP.org</a></h1>
      </v-row>
    
    </div>
  </div>
</template>

<style scoped>
.headerBottom{
    font-size: 22px;
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    font-family: 'Trebuchet MS', sans-serif;
    color: rgb(6, 57, 84);
}
.boldText{
  font-size: 17px;
  font-weight: bold;
  display: inline;
}

.desc{
  font-size:15px;
}
.exec{
  max-width: 250px;
}
.name{
  font-size: 25px;
  color: darkgoldenrod;
}
.execRow{
  margin-left: 15%;
}

.rowBottom2{
    text-align: center;
    font-size: 20px;
}

figure{
    margin: auto;
}

.col-1{
  padding: 20px;
}

.fig1 {
    display: inline-block;
    text-align: center;
    font-variant: small-caps;
    font-family: Arial;
    font-weight: bold;
    color: #bb3333;
}

.fig2 {
    display: inline-block;
    font-variant: small-caps;
    font-family: Arial;
    font-weight: bold;
    color: #bb3333;
}
.keithIMG{
    max-width: 25%;
    border-radius: 50%;
    border-style: outset;
    margin: auto;
}
.cap{
  font-size: 13px;
  margin: 0 auto;
  max-width: 85%;
  padding-top: 1%;
  padding-bottom: 1%;
  font-family: 'Trebuchet MS', sans-serif;
}
.headerTop{
  font-size: 30px;
  margin-left: 10%;
  margin-top: 2%;
  font-family: 'Trebuchet MS', sans-serif;
  color: rgb(0, 48, 0);
}

.headerTwo{
  font-size: 30px;
  margin-left: 15%;
  margin-top: 2%;
  font-family: 'Trebuchet MS', sans-serif;
  color: rgb(241, 200, 37);
}

.pText{
  font-size: 15px;
  margin-left: 10%;
  width: 75%;
  font-family: 'Trebuchet MS', sans-serif;
  color:rgba(9, 8, 7, 0.924);
}
</style>
