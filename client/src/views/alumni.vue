<template>
  <div class="container" id="aboutContainer">
    <div class>
      <v-row class="columnText">
        <h1 class="header1">NARAP Mentoring Program</h1>
        <v-col lg="8" md="12" sm="12">
          <p class="pText">
            <!-- eslint-disable max-len -->
            The NARAP Mentoring Program is a duo-driven, year-long program fostering impactful and productive one-on-one relationships between Research Associates and Mentors. As part of the NARAP Mentoring Program, Research Associates and Alumni are encouraged to engage in a minimum of 25 hours (less than a half hour per week) of one-on-one mentorship over the course of the calendar year.
          </p>
          <p class="pText">
            <!-- eslint-disable max-len -->
            We owe our program to a loyal network of alumni professionals volunteering their time on behalf of NARAP, and motivated health professions students eager to prepare themselves for success with the help of their peers.
          </p>
          <p class="pText">
            <!-- eslint-disable max-len -->
            Upon request, health professions students are carefully matched with alumni mentors based on similarities in their personal and professional profiles. Once a match is made, an email is sent to the pair introducing mentor and mentee, and providing some other basic information on the program. The student is asked to make first contact with his or her mentor.
          </p>
          <p class="pText">
            <!-- eslint-disable max-len -->
            Mentor-mentee pairs are asked to plan 25 hours of interaction over the course of the year. The mentoring commitment is flexible; pairs agree upon the manner (i.e., in-person meetings, phone calls, video chat) and frequency of communication (i.e., weekly, monthly) that suits them best.
          </p>
          <p class="pText">
            <!-- eslint-disable max-len -->
            *****Mentor-mentee pairs are asked to refrain from providing and seeking advice for applications to health professions school. We prefer and encourage mentees to work closely with the Health Professions Advisers at their undergraduate institutions. Those who do not have a Health Professions Adviser should contact us at alumni@thenarap.org, and we will work to help find one.*****
          </p>
          <p class="pText">
            <!-- eslint-disable max-len -->
            Quarterly, mentees and mentors will complete a brief web-based survey to assess the progress of the relationship. The NARAP Mentoring Program team is always available for further support.
          </p>
        </v-col>
        <v-col lg="4" md="12" sm="12">
          <v-img class="alumImg" id="pic" src="../assets/alumn.png"></v-img>
          <h1 class="header2">Mentorship Program Application</h1>
          <div class="apply">
            <v-btn large color="success" dark>Click Here to Apply</v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
#pic {
  max-width: 500px;
}
.aboutText {
  padding: 5%;
  max-width: 50%;
  font-size: 20px;
  font-size: 1.2vw;
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.header1 {
  color: rgb(0, 48, 0);
  font-family: "Trebuchet MS", sans-serif;
  color: rgb(0, 48, 0);
}

.header2 {
  font-size: 18px;
  color: rgb(0, 48, 0);
  text-align: center;
  margin-top: 3%;
}

.header3 {
  font-size: 18px;
  font-weight: bold;
  color: rgb(84, 82, 82);
}

.pText {
  font-size: 15px;
}

.columnText {
  margin-left: 8%;
  margin-right: 8%;
  margin-top: 2%;
  font-family: Arial, Helvetica, sans-serif;
}
.apply {
  display: flex;
  justify-content: center;
}
</style>
