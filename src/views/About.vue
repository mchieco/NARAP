<template>
  <div class="container" id="aboutContainer">
    <v-img class="aboutImg" src="../assets/about.png">
    
    <p class="aboutText">
      <!-- eslint-disable max-len -->
      Through continued efforts of expansion and sustainable design, we hope to significantly impact the
      majority of people in the U.S. by helping address their primary health care needs, adding value to their emergency department visit
      and conducting much needed research. At the same time we provide health care professional students with significant and meaningful
      patient interactions.
    </p>
    </v-img>
    <div class="">
      <v-row>
        <h1 class="header">
          About NARAP
        </h1>
      </v-row>
      <v-row class="columnText">
        <v-col cols="6">
          <h1 class="header2">Vision</h1>
          <p class="pText"><!-- eslint-disable max-len -->
            Centered in emergency depts across the US, NARAP is a non-profit clinical research org. facilitating large scale,
            national, multi-center studies to increase the quality of healthcare delivery nationally, especially in the areas of
            screening and prevention. Our work engages vast numbers of pre-health professional students as data collectors in the studies,
            providing enhanced clinical opportunities unique to the research setting while teaching the fundamentals of interacting
            with patients.</p>

          <h1 class="header2">Mission</h1>
          <p class="pText"><!-- eslint-disable max-len -->
            NARAP has primarily focused on Primary and Preventative Care and is now open to any
            study that can utilize our unique research model. </p>
              
          <h1 class="header2">Research</h1>
          <p class="pText"><!-- eslint-disable max-len -->
            All emergency departments near colleges will serve as a link in a national network for clinical research,
            a vehicle for primary health care screening and prevention, and a locus to foster the development of future health
             professionals. NARAP looks to change how we facilitate primary health for large segments of the U.S. population,
              how we conduct clinical research efficiently, rapidly and at low cost, and how we develop and select future doctors
               and health professionals.</p>

          <h1 class="header3">REQUEST FOR PROPOSAL:</h1>
          <p class="pText"><!-- eslint-disable max-len -->
            We invite the medical community to submit proposals asking us to facilitate nationwide clinical research on their behalf.</p>
          
          <h1 class="header2">Sponsored Research</h1>
          <p class="pText"><!-- eslint-disable max-len -->
            Our sponsored services are specialized research projects similar to our current healthcare research. Our services are
            emergency department based, and designed to help you with marketing, strategic planning, proof of concept reports and more.</p>

          <h1 class="header2">Values</h1>
          <p class="pText"><!-- eslint-disable max-len -->
            The values of NARAP are those of emergency medicine: Providing service to all who seek care, evidence-based practice,
            seeking to improve upon what we know and how we implement that knowledge and bringing all this to the future members of the
            health profession at the earliest stages of their careers.</p>

        </v-col>
        <v-col cols="6">
          <h1 class="header2">Affliliates</h1>
          <p class="pText"><!-- eslint-disable max-len -->
            Emergency Departments across the country are joining our program.</p>

          <h1 class="header2">Programs</h1>
          <p class="pText"><!-- eslint-disable max-len -->
            Our standardized programs run out of our research sites, which are centered in emergency departments across the country.
            Through our many sites, we engage large numbers of volunteer pre-health professional students, providing enhanced clinical
            opportunities unique to the clinical research setting. </p>
            
            <p class="pText"><!-- eslint-disable max-len -->
            We offer opportunities never before available to colleges and pre-health professionals. Through our program, college
            students gain experience with hands-on patient interaction and clinical research.</p>
              
          <h1 class="header2">History</h1>
          <p class="pText"><!-- eslint-disable max-len -->
            Since 1994, nearly a thousand Research Associates (RAs) from 76 colleges and universities around the country have served
            at least one 4-hour shift per week over an academic semester, enrolling tens of thousands of participants in clinical
            studies without a single patient complaint.</p>

          <p class="pText"><!-- eslint-disable max-len -->
            Starting with the initial program at Lincoln Medical and Mental Health Center in the South Bronx,
            followed by enhanced programs at Bridgeport Hospital and now at St. Vincent’s Medical Center in Bridgeport,
            CT, RAs have been essential to studies on diverse issues in emergency medicine. They've enrolled more than 23,700
            participants in primary healthcare screening studies.</p>

          <p class="pText"><!-- eslint-disable max-len -->
            In 2010, this led to the development of the National Alliance of Research Associates Programs (NARAP),
            a growing consortium of 12 hospitals linked together to develop RA Programs using this model and to study the
            emergency department as a site to facilitate primary healthcare screening.</p>

          <p class="pText"><!-- eslint-disable max-len -->
            In 2012, NARAP's  first multi-center, national study was completed on tobacco cessation.
            RAs at 10 institutions enrolled over 19,000 participants, making it the fourth largest prospective, interventional
            clinical trial ever done in the U.S.</p>

        </v-col>
      </v-row>
    
    </div>
  </div>
</template>

<style>
.aboutImg{
  max-width: 80%;
  margin: auto;
  margin-top: 2%;
  align-self: auto;
}
.aboutText{
  padding: 5%;
  max-width: 50%;
  font-size: 20px;
  font-size: 1.2vw;
  color: white;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.header{
  margin-left: 10%;
  margin-top: 2%;
  font-family: 'Trebuchet MS', sans-serif;
  color: rgb(0, 48, 0);
}

.header2{
  font-size: 18px;
  color: rgb(0, 48, 0);

}

.header3{
  font-size: 18px;
  font-weight: bold;
  color: rgb(84, 82, 82);
}

.pText{
  font-size: 15px;
}

.columnText{
  margin-left: 8%;
  margin-right: 8%;
  margin-top: 2%;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
