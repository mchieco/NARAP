<template>
  <div class="container">
    <div class="holder">
        <v-row class="headerTop">
            <h1>Our Research Associates</h1>
        </v-row>
        <v-carousel>
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
        >
        </v-carousel-item>
        </v-carousel>
        <v-row class="columns">
            <v-col cols="2" lg="6" md="6" sm="6">
                <h5 class="headerTwo">Research Mode</h5>
                    <p class="pText"><!-- eslint-disable max-len -->
                        RAs help conduct clinical research in the emergency department allows for pre-health
                        professional students to see elements of a career in medicine first-hand, and gives them hands-on clinical research experience.
                        Based on your experience you could be a:
                    </p>
                    <ul>
                        <li>Chief RA</li>
                        <li>Line RA</li>
                    </ul>
            </v-col>
            <v-col cols="2" lg="6" md="6" sm="6">
                <h5 class="headerTwo">How are RAs Chosen?</h5>
                    <p class="pText"><!-- eslint-disable max-len -->
                        Recruiting RAs is done through:
                    </p>
                    <ul>
                        <li>Presentations at schools in the region where the program is located</li>
                        <li>Through Health Professions Advisers at colleges and universities around the country.</li>
                        <li>Online through this website with its links to the individual <a class="links" href="../affiliates">NARAP Affiliate Programs</a>.</li>
                    </ul>
            </v-col>
        </v-row>
        <v-row class="columns">
            <v-col cols="2" lg="6" md="6" sm="6">
                <h5 class="headerTwo">Chief Research Associate:</h5>
                    <ul>
                        <li>They are college graduates taking a year or more between college and medical</li>
                        <li>School who serve as middle managers for their home program</li>
                        <li>There are five Chief RAs per Affiliate</li>
                        <li>They supervise the Line RAs and participate in all aspects of research conducted in their institution's Emergency Department
                            (ED)</li>
                    </ul>
                    <p class="pText"><!-- eslint-disable max-len -->
                        NARAP Chief RAs are appointed internally and at the recommendation of their Program Directors.
                    </p>
                    <button type="button" class="btn blue-gradient" onclick="window.location.href = '../affiliates'">Learn More</button>
                    <p class="pText"><!-- eslint-disable max-len -->
                        If you cannot reach the Affiliate Institution of your choice, please email <a href="mailto:ask@theNARAP.org"
                        style="text-decoration: underline;">ask@theNARAP.org</a>.
                    </p>
            </v-col>
            <v-col cols="2" lg="6" md="6" sm="6">
                <h5 class="headerTwo">Line Research Associate:</h5>
                    <ul>
                        <li>Pre-health professional students</li>
                        <li>Who volunteer one 4 hour shift per week</li>
                        <li>In the emergency department (ED)</li>
                        <li>As data collectors for clinical research</li>
                    </ul>
            </v-col>
        </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require('@/assets/researchA1.png'),
        },
        {
          src: require('@/assets/researchA2.png'),
        },
        {
          src: require('@/assets/researchA3.png'),
        },
        {
          src: require('@/assets/researchA4.png'),
        },
        {
          src: require('@/assets/researchA5.png'),
        },
        {
          src: require('@/assets/researchA6.png'),
        },
        {
          src: require('@/assets/researchA7.png'),
        },
      ],
    };
  },
};
</script>

<style scoped>
.holder{
    width: 90%;
    margin: auto;
}
.columns{
  font-size: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  font-family: 'Trebuchet MS', sans-serif;
}

.links{
  font-size: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  font-family: 'Trebuchet MS', sans-serif;
  color: rgb(62, 61, 60);
  text-decoration: underline;
}

.headerTop{
  font-size: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  font-family: 'Trebuchet MS', sans-serif;
  color: rgb(0, 48, 0);
}

.headerTwo{
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  font-family: 'Trebuchet MS', sans-serif;
  color: rgb(0, 48, 0);
}
.pText{
  font-size: 15px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Trebuchet MS', sans-serif;
  color:rgba(9, 8, 7, 0.924);
}

.list{
  font-size: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  font-family: 'Trebuchet MS', sans-serif;
  color:rgba(9, 8, 7, 0.924);
}
.btn{
    margin: auto;
    margin-bottom: 3%;
}

</style>
