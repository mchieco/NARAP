<!-- this file serves as the code for the Barriers to screening view of the live data page -->
<template>
  <div>
    <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
      <h1>
        Enrolled:
        <b>{{ numberWithCommas(enrolled) }}</b>
      </h1>
    </div>
    <div style="margin-bottom: 10px;" class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
      <h3>**For participants identified as needing a primary care practitioner visit, tobacco cessation or cancer screenings**</h3>
    </div>
    <div style="margin-bottom: 10px;" class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
      <h2>How likely are you to schedule a:</h2>
    </div>
    <div class="row listmargin">
      <p style="font-weight: bold;">Primary Care Practicioner visit?:</p>
      <div style="margin-left: 10px;" v-for="(value, name) in pcpvisitObject" :key="value.id">
        <p>
          {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /allpcpvisit * 100).toFixed(1) }}%)
        </p>
      </div>
      <v-btn
        class="button"
        @click="showModal(pcpvisitObject,'Primary Care Practicioner visit?')"
        small
        rounded
        color="success"
      >View Graph</v-btn>
    </div>
    <div class="row listmargin">
      <p style="font-weight: bold;">Call to their States Quitline?:</p>
      <div style="margin-left: 10px;" v-for="(value, name) in quitlineObject" :key="value.id">
        <p>
          {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /allquitline * 100).toFixed(1) }}%)
        </p>
      </div>
      <v-btn
        class="button"
        @click="showModal(quitlineObject,'Call to their States Quitline?')"
        small
        rounded
        color="success"
      >View Graph</v-btn>
    </div>
    <div class="row listmargin">
      <p style="font-weight: bold;">Low Dose Cat Screening for Lung Cancer?:</p>
      <div style="margin-left: 10px;" v-for="(value, name) in catObject" :key="value.id">
        <p>
          {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /allcat * 100).toFixed(1) }}%)
        </p>
      </div>
      <v-btn
        class="button"
        @click="showModal(catObject,'Low Dose Cat Screening for Lung Cancer?')"
        small
        rounded
        color="success"
      >View Graph</v-btn>
    </div>
    <div class="row listmargin">
      <p style="font-weight: bold;">Mammogram Screening for Breast Cancer?:</p>
      <div style="margin-left: 10px;" v-for="(value, name) in breastObject" :key="value.id">
        <p>
          {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /allbreast * 100).toFixed(1) }}%)
        </p>
      </div>
      <v-btn
        class="button"
        @click="showModal(breastObject,'Mammogram Screening for Breast Cancer?')"
        small
        rounded
        color="success"
      >View Graph</v-btn>
    </div>
    <div class="row listmargin">
      <p style="font-weight: bold;">Pap Test Screeing for Cervical Cancer?:</p>
      <div style="margin-left: 10px;" v-for="(value, name) in cervicalObject" :key="value.id">
        <p>
          {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /allpap * 100).toFixed(1) }}%)
        </p>
      </div>
      <v-btn
        class="button"
        @click="showModal(cervicalObject,'Pap Test Screeing for Cervical Cancer?')"
        small
        rounded
        color="success"
      >View Graph</v-btn>
    </div>
    <div class="row listmargin">
      <p style="font-weight: bold;">Colon-Rectal Cancer Screening?:</p>
      <div style="margin-left: 10px;" v-for="(value, name) in colonrectalObject" :key="value.id">
        <p>
          {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /allcrc * 100).toFixed(1) }}%)
        </p>
      </div>
      <v-btn
        class="button"
        @click="showModal(colonrectalObject,'Colon-Rectal Cancer Screening?')"
        small
        rounded
        color="success"
      >View Graph</v-btn>
    </div>
    <hr style="height:1px;border:none;color:#333;background-color:#333;" />
    <div style="margin-bottom: 10px; margin-top: 10px;" class="row justify-content-center">
      <h2>For all "very unlikely", "unlikely", and "not sure"</h2>
    </div>
    <div class="row justify-content-center">
      <h4 style="font-size: 18px; padding: 0; font-weight: bold;">There are many reasons why people do not want to schedule recommended visits and screenings. What are your reasons for not being likely to:</h4>
    </div>
    <div class="row">
      <div class="col-md-4 col-sm-12 col-lg-4">
        <div class="row justify-content-center">
          <h5>Schedule a Primary Care Practicioner visit</h5>
        </div>
        <div class="row justify-content-center">
          <v-btn
            style="margin: 5px;"
            class="button"
            @click="showModal(whynotpcpObject,'Why not schedule a Primary Care Practicioner visit?')"
            x-small
            rounded
            color="success"
          >View Graph</v-btn>
          </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
          <h4>Is it because you:</h4>
        </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center" v-for="(value, name) in whynotpcpObject" :key="value.id">
          <p style="font-size: 16px;">
            {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /bottom3pcpvisit * 100).toFixed(1) }}%)
          </p>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 col-lg-4">
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
          <h5>Follow through on help from the Quitline</h5>
        </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
          <v-btn
            style="margin: 5px;"
            class="button"
            @click="showModal(whynotquitlineObject,'Why not follow through on help from the Quitline?')"
            x-small
            rounded
            color="success"
          >View Graph</v-btn>
        </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
          <h4>Is it because you:</h4>
        </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center" v-for="(value, name) in whynotquitlineObject" :key="value.id">
          <p style="font-size: 16px;">
            {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /bottom3quitline * 100).toFixed(1) }}%)
          </p>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 col-lg-4">
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
          <h5>Schedule Lung Cancer Screening</h5>
        </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
          <v-btn
            style="margin: 5px;"
            class="button"
            @click="showModal(whynotcatObject,'Why not schedule Lung Cancer Screening?')"
            x-small
            rounded
            color="success"
          >View Graph</v-btn>
        </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
          <h4>Is it because you:</h4>
        </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center" v-for="(value, name) in whynotcatObject" :key="value.id">
          <p style="font-size: 16px;">
            {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /bottom3cat * 100).toFixed(1) }}%)
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-sm-12 col-lg-4">
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
          <h5>Schedule a Breast Cancer Screening</h5>
        </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
          <v-btn
            style="margin: 5px;"
            class="button"
            @click="showModal(whynotbreastObject,' Why not schedule a Breast Cancer Screening?')"
            x-small
            rounded
            color="success"
          >View Graph</v-btn>
        </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
          <h4>Is it because you:</h4>
        </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center" v-for="(value, name) in whynotbreastObject" :key="value.id">
          <p style="font-size: 16px;">
            {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /bottom3breast * 100).toFixed(1) }}%)
          </p>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 col-lg-4">
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
          <h5>Schedule a Cervical Cancer Screening</h5>
        </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
          <v-btn
            style="margin: 5px;"
            class="button"
            @click="showModal(whynotcervicalObject,'Why not schedule a Cervical Cancer Screening?')"
            x-small
            rounded
            color="success"
          >View Graph</v-btn>
        </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
          <h4>Is it because you:</h4>
        </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center" v-for="(value, name) in whynotcervicalObject" :key="value.id">
          <p style="font-size: 16px;">
            {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /bottom3pap * 100).toFixed(1) }}%)
          </p>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 col-lg-4">
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
          <h5>Schedule a Colon-Rectal Screening</h5>
        </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
          <v-btn
            style="margin: 5px;"
            class="button"
            @click="showModal(whynotcolonrectalObject,'Why not schedule a Colon Rectal Screening?')"
            x-small
            rounded
            color="success"
          >View Graph</v-btn>
        </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
          <h4>Is it because you:</h4>
        </div>
        <div class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center" v-for="(value, name) in whynotcolonrectalObject" :key="value.id">
          <p style="font-size: 16px;">
            {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /bottom3crc * 100).toFixed(1) }}%)
          </p>
        </div>
      </div>
    </div>
    <div style="margin-bottom: 10px;" class="row justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center">
      <h3 style="font-weight: bold;">If you could have help with this, how likely would you be to get this accomplished?</h3>
    </div>
    <div class="row listmargin">
      <p style="font-weight: bold;">Primary Care Practicioner visit:</p>
      <div style="margin-left: 10px;" v-for="(value, name) in pcphelpObject" :key="value.id">
        <p>
          {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /bottom3pcpvisit * 100).toFixed(1)}}%)
        </p>
      </div>
      <v-btn
        class="button"
        @click="showModal(pcphelpObject,'Primary Care Practicioner visit')"
        small
        rounded
        color="success"
      >View Graph</v-btn>
    </div>
    <div class="row listmargin">
      <p style="font-weight: bold;">Follow Through on help from Quitline:</p>
      <div style="margin-left: 10px;" v-for="(value, name) in quitlinehelpObject" :key="value.id">
        <p>
          {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /bottom3quitline * 100).toFixed(1) }}%)
        </p>
      </div>
      <v-btn
        class="button"
        @click="showModal(quitlinehelpObject,'Follow through on help from Quitline')"
        small
        rounded
        color="success"
      >View Graph</v-btn>
    </div>
    <div class="row listmargin">
      <p style="font-weight: bold;">Schedule a Lung Cancer Screening:</p>
      <div style="margin-left: 10px;" v-for="(value, name) in cathelpObject" :key="value.id">
        <p>
          {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /bottom3cat * 100).toFixed(1) }}%)
        </p>
      </div>
      <v-btn
        class="button"
        @click="showModal(cathelpObject,'Schedule a Lung Cancer Screening')"
        small
        rounded
        color="success"
      >View Graph</v-btn>
    </div>
    <div class="row listmargin">
      <p style="font-weight: bold;">Schedule a Breast Cancer Screening:</p>
      <div style="margin-left: 10px;" v-for="(value, name) in breasthelpObject" :key="value.id">
        <p>
          {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /bottom3breast * 100).toFixed(1) }}%)
        </p>
      </div>
      <v-btn
        class="button"
        @click="showModal(breasthelpObject,'Schedule a Breast Cancer Screening')"
        small
        rounded
        color="success"
      >View Graph</v-btn>
    </div>
    <div class="row listmargin">
      <p style="font-weight: bold;">Schedule a Cervical Cancer Screening:</p>
      <div style="margin-left: 10px;" v-for="(value, name) in cervicalhelpObject" :key="value.id">
        <p>
          {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /bottom3pap * 100).toFixed(1) }}%)
        </p>
      </div>
      <v-btn
        class="button"
        @click="showModal(cervicalhelpObject,'Schedule a Cervical Cancer Screening')"
        small
        rounded
        color="success"
      >View Graph</v-btn>
    </div>
    <div class="row listmargin">
      <p style="font-weight: bold;">Schedule Colon-Rectal Cancer Screening:</p>
      <div style="margin-left: 10px;" v-for="(value, name) in colonrectalhelpObject" :key="value.id">
        <p>
          {{ name }}:
          <b>{{ numberWithCommas(value)}}</b> ({{ (value /bottom3crc * 100).toFixed(1) }}%)
        </p>
      </div>
      <v-btn
        class="button"
        @click="showModal(colonrectalhelpObject,'Schedule Colon-Rectal Cancer Screening')"
        small
        rounded
        color="success"
      >View Graph</v-btn>
    </div>
    <div class="row">
      <p
        style="font-weight: bold; font-size: 17px;"
      >Disclaimer: Participants may not have answered all questions, so the percentages may not add up to 100%</p>
    </div>
    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <dataModal :dialog="isOpen" :series="modalseries" :title="title"></dataModal>
  </div>
</template>
<!-- the styling for the page -->
<style scoped>
.listmargin {
  margin-left: 6px;
}
h2 {
  font-weight: bold;
  padding-right: 10px;
  font-size: 24px;
}
h3 {
  font-size: 22px;
}
h4 {
  font-size: 20px;
}
h5 {
  font-size: 20px;
  font-weight: bold;
}
.leftpad {
  padding-left: 0px;
}
p {
  font-size: 16px;
}
.button {
  margin-top: 2px;
  margin-left: 10px;
}
</style>
<!-- the JavaScript code that grabs the data, puts them in the proper set, and stores them as graphs  -->
<script>
import liveDataService from '@/services/livedata';
import dataModal from '@/components/dataModal.vue';
import '@/mixins/helperMixins';

export default {
  data() {
    return {
      modalseries: null,
      isOpen: false,
      isLoading: false,
      title: null,
      enrolled: 0,
      liklihoodpcpvu: 0,
      liklihoodpcpu: 0,
      liklihoodpcpns: 0,
      liklihoodpcpl: 0,
      liklihoodpcpvl: 0,
      liklihoodquitlinevu: 0,
      liklihoodquitlineu: 0,
      liklihoodquitlinens: 0,
      liklihoodquitlinel: 0,
      liklihoodquitlinevl: 0,
      liklihoodcatvu: 0,
      liklihoodcatu: 0,
      liklihoodcatns: 0,
      liklihoodcatl: 0,
      liklihoodcatvl: 0,
      liklihoodbreastvu: 0,
      liklihoodbreastu: 0,
      liklihoodbreastns: 0,
      liklihoodbreastl: 0,
      liklihoodbreastvl: 0,
      liklihoodcervicalvu: 0,
      liklihoodcervicalu: 0,
      liklihoodcervicalns: 0,
      liklihoodcervicall: 0,
      liklihoodcervicalvl: 0,
      liklihoodcolonrectalvu: 0,
      liklihoodcolonrectalu: 0,
      liklihoodcolonrectalns: 0,
      liklihoodcolonrectall: 0,
      liklihoodcolonrectalvl: 0,
      liklihoodwhynotpcp1: 0,
      liklihoodwhynotpcp2: 0,
      liklihoodwhynotpcp3: 0,
      liklihoodwhynotpcp4: 0,
      liklihoodwhynotpcp5: 0,
      liklihoodwhynotpcp6: 0,
      liklihoodwhynotpcp7: 0,
      liklihoodwhynotpcp8: 0,
      liklihoodwhynotquitline1: 0,
      liklihoodwhynotquitline2: 0,
      liklihoodwhynotquitline3: 0,
      liklihoodwhynotquitline4: 0,
      liklihoodwhynotquitline5: 0,
      liklihoodwhynotquitline6: 0,
      liklihoodwhynotquitline7: 0,
      liklihoodwhynotquitline8: 0,
      liklihoodwhynotcat1: 0,
      liklihoodwhynotcat2: 0,
      liklihoodwhynotcat3: 0,
      liklihoodwhynotcat4: 0,
      liklihoodwhynotcat5: 0,
      liklihoodwhynotcat6: 0,
      liklihoodwhynotcat7: 0,
      liklihoodwhynotcat8: 0,
      liklihoodwhynotbreast1: 0,
      liklihoodwhynotbreast2: 0,
      liklihoodwhynotbreast3: 0,
      liklihoodwhynotbreast4: 0,
      liklihoodwhynotbreast5: 0,
      liklihoodwhynotbreast6: 0,
      liklihoodwhynotbreast7: 0,
      liklihoodwhynotbreast8: 0,
      liklihoodwhynotcervical1: 0,
      liklihoodwhynotcervical2: 0,
      liklihoodwhynotcervical3: 0,
      liklihoodwhynotcervical4: 0,
      liklihoodwhynotcervical5: 0,
      liklihoodwhynotcervical6: 0,
      liklihoodwhynotcervical7: 0,
      liklihoodwhynotcervical8: 0,
      liklihoodwhynotcolonrectal1: 0,
      liklihoodwhynotcolonrectal2: 0,
      liklihoodwhynotcolonrectal3: 0,
      liklihoodwhynotcolonrectal4: 0,
      liklihoodwhynotcolonrectal5: 0,
      liklihoodwhynotcolonrectal6: 0,
      liklihoodwhynotcolonrectal7: 0,
      liklihoodwhynotcolonrectal8: 0,
      liklihoodhelppcpvu: 0,
      liklihoodhelppcpu: 0,
      liklihoodhelppcpns: 0,
      liklihoodhelppcpl: 0,
      liklihoodhelppcpvl: 0,
      liklihoodhelpquitlinevu: 0,
      liklihoodhelpquitlineu: 0,
      liklihoodhelpquitlinens: 0,
      liklihoodhelpquitlinel: 0,
      liklihoodhelpquitlinevl: 0,
      liklihoodhelpcatvu: 0,
      liklihoodhelpcatu: 0,
      liklihoodhelpcatns: 0,
      liklihoodhelpcatl: 0,
      liklihoodhelpcatvl: 0,
      liklihoodhelpbreastvu: 0,
      liklihoodhelpbreastu: 0,
      liklihoodhelpbreastns: 0,
      liklihoodhelpbreastl: 0,
      liklihoodhelpbreastvl: 0,
      liklihoodhelpcervicalvu: 0,
      liklihoodhelpcervicalu: 0,
      liklihoodhelpcervicalns: 0,
      liklihoodhelpcervicall: 0,
      liklihoodhelpcervicalvl: 0,
      liklihoodhelpcolonrectalvu: 0,
      liklihoodhelpcolonrectalu: 0,
      liklihoodhelpcolonrectalns: 0,
      liklihoodhelpcolonrectall: 0,
      liklihoodhelpcolonrectalvl: 0,
      allpcpvisit: 0,
      allquitline: 0,
      allcat: 0,
      allbreast: 0,
      allpap: 0,
      allcrc: 0,
      bottom3pcpvisit: 0,
      bottom3quitline: 0,
      bottom3cat: 0,
      bottom3breast: 0,
      bottom3pap: 0,
      bottom3crc: 0,
      pcpvisitObject: {

      },
      quitlineObject: {

      },
      catObject: {

      },
      breastObject: {

      },
      cervicalObject: {

      },
      colonrectalObject: {

      },
      whynotpcpObject: {

      },
      whynotquitlineObject: {

      },
      whynotcatObject: {

      },
      whynotbreastObject: {

      },
      whynotcervicalObject: {

      },
      whynotcolonrectalObject: {

      },
      pcphelpObject: {

      },
      quitlinehelpObject: {

      },
      cathelpObject: {

      },
      breasthelpObject: {

      },
      cervicalhelpObject: {

      },
      colonrectalhelpObject: {

      },
    };
  },
  methods: {
    async load() {
      this.isLoading = true;
      const x = await liveDataService();
      this.enrolled = x.enrolled;
      this.allpcpvisit = x.liklihoodpcpvu + x.liklihoodpcpu + x.liklihoodpcpns + x.liklihoodpcpl + x.liklihoodpcpvl;
      this.bottom3pcpvisit = x.liklihoodpcpvu + x.liklihoodpcpu + x.liklihoodpcpns;
      this.liklihoodpcpvu = x.liklihoodpcpvu;
      this.liklihoodpcpu = x.liklihoodpcpu;
      this.liklihoodpcpns = x.liklihoodpcpns;
      this.liklihoodpcpl = x.liklihoodpcpl;
      this.liklihoodpcpvl = x.liklihoodpcpvl;
      this.pcpvisitObject = {
        'Very Unlikely': this.liklihoodpcpvu,
        Unlikely: this.liklihoodpcpu,
        'Not Sure': this.liklihoodpcpns,
        Likely: this.liklihoodpcpl,
        'Very Likely': this.liklihoodpcpvl,
      };
      this.allquitline = x.liklihoodquitlinevu + x.liklihoodquitlineu + x.liklihoodquitlinens + x.liklihoodquitlinel + x.liklihoodquitlinevl;
      this.bottom3quitline = x.liklihoodquitlinevu + x.liklihoodquitlineu + x.liklihoodquitlinens;
      this.liklihoodquitlinevu = x.liklihoodquitlinevu;
      this.liklihoodquitlineu = x.liklihoodquitlineu;
      this.liklihoodquitlinens = x.liklihoodquitlinens;
      this.liklihoodquitlinel = x.liklihoodquitlinel;
      this.liklihoodquitlinevl = x.liklihoodquitlinevl;
      this.quitlineObject = {
        'Very Unlikely': this.liklihoodquitlinevu,
        Unlikely: this.liklihoodquitlineu,
        'Not Sure': this.liklihoodquitlinens,
        Likely: this.liklihoodquitlinel,
        'Very Likely': this.liklihoodquitlinevl,
      };
      this.allcat = x.liklihoodcatvu + x.liklihoodcatu + x.liklihoodcatns + x.liklihoodcatl + x.liklihoodcatvl;
      this.bottom3cat = x.liklihoodcatvu + x.liklihoodcatu + x.liklihoodcatns;
      this.liklihoodcatvu = x.liklihoodcatvu;
      this.liklihoodcatu = x.liklihoodcatu;
      this.liklihoodcatns = x.liklihoodcatns;
      this.liklihoodcatl = x.liklihoodcatl;
      this.liklihoodcatvl = x.liklihoodcatvl;
      this.catObject = {
        'Very Unlikely': this.liklihoodcatvu,
        Unlikely: this.liklihoodcatu,
        'Not Sure': this.liklihoodcatns,
        Likely: this.liklihoodcatl,
        'Very Likely': this.liklihoodcatvl,
      };
      this.allbreast = x.liklihoodbreastvu + x.liklihoodbreastu + x.liklihoodbreastns + x.liklihoodbreastl + x.liklihoodbreastvl;
      this.bottom3breast = x.liklihoodbreastvu + x.liklihoodbreastu + x.liklihoodbreastns;
      this.liklihoodbreastvu = x.liklihoodbreastvu;
      this.liklihoodbreastu = x.liklihoodbreastu;
      this.liklihoodbreastns = x.liklihoodbreastns;
      this.liklihoodbreastl = x.liklihoodbreastl;
      this.liklihoodbreastvl = x.liklihoodbreastvl;
      this.breastObject = {
        'Very Unlikely': this.liklihoodbreastvu,
        Unlikely: this.liklihoodbreastu,
        'Not Sure': this.liklihoodbreastns,
        Likely: this.liklihoodbreastl,
        'Very Likely': this.liklihoodbreastvl,
      };
      this.allpap = x.liklihoodcervicalvu + x.liklihoodcervicalu + x.liklihoodcervicalns + x.liklihoodcervicall + x.liklihoodcervicalvl;
      this.bottom3pap = x.liklihoodcervicalvu + x.liklihoodcervicalu + x.liklihoodcervicalns;
      this.liklihoodcervicalvu = x.liklihoodcervicalvu;
      this.liklihoodcervicalu = x.liklihoodcervicalu;
      this.liklihoodcervicalns = x.liklihoodcervicalns;
      this.liklihoodcervicall = x.liklihoodcervicall;
      this.liklihoodcervicalvl = x.liklihoodcervicalvl;
      this.cervicalObject = {
        'Very Unlikely': this.liklihoodcervicalvu,
        Unlikely: this.liklihoodcervicalu,
        'Not Sure': this.liklihoodcervicalns,
        Likely: this.liklihoodcervicall,
        'Very Likely': this.liklihoodcervicalvl,
      };
      this.allcrc = x.liklihoodcolonrectalvu + x.liklihoodcolonrectalu + x.liklihoodcolonrectalns + x.liklihoodcolonrectall + x.liklihoodcolonrectalvl;
      this.bottom3crc = x.liklihoodcolonrectalvu + x.liklihoodcolonrectalu + x.liklihoodcolonrectalns;
      this.liklihoodcolonrectalvu = x.liklihoodcolonrectalvu;
      this.liklihoodcolonrectalu = x.liklihoodcolonrectalu;
      this.liklihoodcolonrectalns = x.liklihoodcolonrectalns;
      this.liklihoodcolonrectall = x.liklihoodcolonrectall;
      this.liklihoodcolonrectalvl = x.liklihoodcolonrectalvl;
      this.colonrectalObject = {
        'Very Unlikely': this.liklihoodcolonrectalvu,
        Unlikely: this.liklihoodcolonrectalu,
        'Not Sure': this.liklihoodcolonrectalns,
        Likely: this.liklihoodcolonrectall,
        'Very Likely': this.liklihoodcolonrectalvl,
      };
      this.liklihoodwhynotpcp1 = x.liklihoodwhynotpcp1;
      this.liklihoodwhynotpcp2 = x.liklihoodwhynotpcp2;
      this.liklihoodwhynotpcp3 = x.liklihoodwhynotpcp3;
      this.liklihoodwhynotpcp4 = x.liklihoodwhynotpcp4;
      this.liklihoodwhynotpcp5 = x.liklihoodwhynotpcp5;
      this.liklihoodwhynotpcp6 = x.liklihoodwhynotpcp6;
      this.liklihoodwhynotpcp7 = x.liklihoodwhynotpcp7;
      this.liklihoodwhynotpcp8 = x.liklihoodwhynotpcp8;
      this.whynotpcpObject = {
        'Already have an appointment scheduled': this.liklihoodwhynotpcp1,
        "Don't have time": this.liklihoodwhynotpcp2,
        "Can't get off work": this.liklihoodwhynotpcp3,
        'Afraid of the results': this.liklihoodwhynotpcp4,
        'Not ready to do this yet': this.liklihoodwhynotpcp5,
        "Don't have transportation": this.liklihoodwhynotpcp6,
        'Need childcare': this.liklihoodwhynotpcp7,
        Other: this.liklihoodwhynotpcp8,
      };
      this.liklihoodwhynotquitline1 = x.liklihoodwhynotquitline1;
      this.liklihoodwhynotquitline2 = x.liklihoodwhynotquitline2;
      this.liklihoodwhynotquitline3 = x.liklihoodwhynotquitline3;
      this.liklihoodwhynotquitline4 = x.liklihoodwhynotquitline4;
      this.liklihoodwhynotquitline5 = x.liklihoodwhynotquitline5;
      this.liklihoodwhynotquitline6 = x.liklihoodwhynotquitline6;
      this.liklihoodwhynotquitline7 = x.liklihoodwhynotquitline7;
      this.liklihoodwhynotquitline8 = x.liklihoodwhynotquitline8;
      this.whynotquitlineObject = {
        'Already have an appointment scheduled': this.liklihoodwhynotquitline1,
        "Don't have time": this.liklihoodwhynotquitline2,
        "Can't get off work": this.liklihoodwhynotquitline3,
        'Afraid of the results': this.liklihoodwhynotquitline4,
        'Not ready to do this yet': this.liklihoodwhynotquitline5,
        "Don't have transportation": this.liklihoodwhynotquitline6,
        'Need childcare': this.liklihoodwhynotquitline7,
        Other: this.liklihoodwhynotquitline8,
      };
      this.liklihoodwhynotcat1 = x.liklihoodwhynotcat1;
      this.liklihoodwhynotcat2 = x.liklihoodwhynotcat2;
      this.liklihoodwhynotcat3 = x.liklihoodwhynotcat3;
      this.liklihoodwhynotcat4 = x.liklihoodwhynotcat4;
      this.liklihoodwhynotcat5 = x.liklihoodwhynotcat5;
      this.liklihoodwhynotcat6 = x.liklihoodwhynotcat6;
      this.liklihoodwhynotcat7 = x.liklihoodwhynotcat7;
      this.liklihoodwhynotcat8 = x.liklihoodwhynotcat8;
      this.whynotcatObject = {
        'Already have an appointment scheduled': this.liklihoodwhynotcat1,
        "Don't have time": this.liklihoodwhynotcat2,
        "Can't get off work": this.liklihoodwhynotcat3,
        'Afraid of the results': this.liklihoodwhynotcat4,
        'Not ready to do this yet': this.liklihoodwhynotcat5,
        "Don't have transportation": this.liklihoodwhynotcat6,
        'Need childcare': this.liklihoodwhynotcat7,
        Other: this.liklihoodwhynotcat8,
      };
      this.liklihoodwhynotbreast1 = x.liklihoodwhynotbreast1;
      this.liklihoodwhynotbreast2 = x.liklihoodwhynotbreast2;
      this.liklihoodwhynotbreast3 = x.liklihoodwhynotbreast3;
      this.liklihoodwhynotbreast4 = x.liklihoodwhynotbreast4;
      this.liklihoodwhynotbreast5 = x.liklihoodwhynotbreast5;
      this.liklihoodwhynotbreast6 = x.liklihoodwhynotbreast6;
      this.liklihoodwhynotbreast7 = x.liklihoodwhynotbreast7;
      this.liklihoodwhynotbreast8 = x.liklihoodwhynotbreast8;
      this.whynotbreastObject = {
        'Already have an appointment scheduled': this.liklihoodwhynotbreast1,
        "Don't have time": this.liklihoodwhynotbreast2,
        "Can't get off work": this.liklihoodwhynotbreast3,
        'Afraid of the results': this.liklihoodwhynotbreast4,
        'Not ready to do this yet': this.liklihoodwhynotbreast5,
        "Don't have transportation": this.liklihoodwhynotbreast6,
        'Need childcare': this.liklihoodwhynotbreast7,
        Other: this.liklihoodwhynotbreast8,
      };
      this.liklihoodwhynotcervical1 = x.liklihoodwhynotcervical1;
      this.liklihoodwhynotcervical2 = x.liklihoodwhynotcervical2;
      this.liklihoodwhynotcervical3 = x.liklihoodwhynotcervical3;
      this.liklihoodwhynotcervical4 = x.liklihoodwhynotcervical4;
      this.liklihoodwhynotcervical5 = x.liklihoodwhynotcervical5;
      this.liklihoodwhynotcervical6 = x.liklihoodwhynotcervical6;
      this.liklihoodwhynotcervical7 = x.liklihoodwhynotcervical7;
      this.liklihoodwhynotcervical8 = x.liklihoodwhynotcervical8;
      this.whynotcervicalObject = {
        'Already have an appointment scheduled': this.liklihoodwhynotcervical1,
        "Don't have time": this.liklihoodwhynotcervical2,
        "Can't get off work": this.liklihoodwhynotcervical3,
        'Afraid of the results': this.liklihoodwhynotcervical4,
        'Not ready to do this yet': this.liklihoodwhynotcervical5,
        "Don't have transportation": this.liklihoodwhynotcervical6,
        'Need childcare': this.liklihoodwhynotcervical7,
        Other: this.liklihoodwhynotcervical8,
      };
      this.liklihoodwhynotcolonrectal1 = x.liklihoodwhynotcolonrectal1;
      this.liklihoodwhynotcolonrectal2 = x.liklihoodwhynotcolonrectal2;
      this.liklihoodwhynotcolonrectal3 = x.liklihoodwhynotcolonrectal3;
      this.liklihoodwhynotcolonrectal4 = x.liklihoodwhynotcolonrectal4;
      this.liklihoodwhynotcolonrectal5 = x.liklihoodwhynotcolonrectal5;
      this.liklihoodwhynotcolonrectal6 = x.liklihoodwhynotcolonrectal6;
      this.liklihoodwhynotcolonrectal7 = x.liklihoodwhynotcolonrectal7;
      this.liklihoodwhynotcolonrectal8 = x.liklihoodwhynotcolonrectal8;
      this.whynotcolonrectalObject = {
        'Already have an appointment scheduled': this.liklihoodwhynotcolonrectal1,
        "Don't have time": this.liklihoodwhynotcolonrectal2,
        "Can't get off work": this.liklihoodwhynotcolonrectal3,
        'Afraid of the results': this.liklihoodwhynotcolonrectal4,
        'Not ready to do this yet': this.liklihoodwhynotcolonrectal5,
        "Don't have transportation": this.liklihoodwhynotcolonrectal6,
        'Need childcare': this.liklihoodwhynotcolonrectal7,
        Other: this.liklihoodwhynotcolonrectal8,
      };
      this.liklihoodhelppcpvu = x.liklihoodhelppcpvu;
      this.liklihoodhelppcpu = x.liklihoodhelppcpu;
      this.liklihoodhelppcpns = x.liklihoodhelppcpns;
      this.liklihoodhelppcpl = x.liklihoodhelppcpl;
      this.liklihoodhelppcpvl = x.liklihoodhelppcpvl;
      this.pcphelpObject = {
        'Very Unlikely': this.liklihoodhelppcpvu,
        Unlikely: this.liklihoodhelppcpu,
        'Not Sure': this.liklihoodhelppcpns,
        Likely: this.liklihoodhelppcpl,
        'Very Likely': this.liklihoodhelppcpvl,
      };
      this.liklihoodhelpquitlinevu = x.liklihoodhelpquitlinevu;
      this.liklihoodhelpquitlineu = x.liklihoodhelpquitlineu;
      this.liklihoodhelpquitlinens = x.liklihoodhelpquitlinens;
      this.liklihoodhelpquitlinel = x.liklihoodhelpquitlinel;
      this.liklihoodhelpquitlinevl = x.liklihoodhelpquitlinevl;
      this.quitlinehelpObject = {
        'Very Unlikely': this.liklihoodhelpquitlinevu,
        Unlikely: this.liklihoodhelpquitlineu,
        'Not Sure': this.liklihoodhelpquitlinens,
        Likely: this.liklihoodhelpquitlinel,
        'Very Likely': this.liklihoodhelpquitlinevl,
      };
      this.liklihoodhelpcatvu = x.liklihoodhelpcatvu;
      this.liklihoodhelpcatu = x.liklihoodhelpcatu;
      this.liklihoodhelpcatns = x.liklihoodhelpcatns;
      this.liklihoodhelpcatl = x.liklihoodhelpcatl;
      this.liklihoodhelpcatvl = x.liklihoodhelpcatvl;
      this.cathelpObject = {
        'Very Unlikely': this.liklihoodhelpcatvu,
        Unlikely: this.liklihoodhelpcatu,
        'Not Sure': this.liklihoodhelpcatns,
        Likely: this.liklihoodhelpcatl,
        'Very Likely': this.liklihoodhelpcatvl,
      };
      this.liklihoodhelpbreastvu = x.liklihoodhelpbreastvu;
      this.liklihoodhelpbreastu = x.liklihoodhelpbreastu;
      this.liklihoodhelpbreastns = x.liklihoodhelpbreastns;
      this.liklihoodhelpbreastl = x.liklihoodhelpbreastl;
      this.liklihoodhelpbreastvl = x.liklihoodhelpbreastvl;
      this.breasthelpObject = {
        'Very Unlikely': this.liklihoodhelpbreastvu,
        Unlikely: this.liklihoodhelpbreastu,
        'Not Sure': this.liklihoodhelpbreastns,
        Likely: this.liklihoodhelpbreastl,
        'Very Likely': this.liklihoodhelpbreastvl,
      };
      this.liklihoodhelpcervicalvu = x.liklihoodhelpcervicalvu;
      this.liklihoodhelpcervicalu = x.liklihoodhelpcervicalu;
      this.liklihoodhelpcervicalns = x.liklihoodhelpcervicalns;
      this.liklihoodhelpcervicall = x.liklihoodhelpcervicall;
      this.liklihoodhelpcervicalvl = x.liklihoodhelpcervicalvl;
      this.cervicalhelpObject = {
        'Very Unlikely': this.liklihoodhelpcervicalvu,
        Unlikely: this.liklihoodhelpcervicalu,
        'Not Sure': this.liklihoodhelpcervicalns,
        Likely: this.liklihoodhelpcervicall,
        'Very Likely': this.liklihoodhelpcervicalvl,
      };
      this.liklihoodhelpcolonrectalvu = x.liklihoodhelpcolonrectalvu;
      this.liklihoodhelpcolonrectalu = x.liklihoodhelpcolonrectalu;
      this.liklihoodhelpcolonrectalns = x.liklihoodhelpcolonrectalns;
      this.liklihoodhelpcolonrectall = x.liklihoodhelpcolonrectall;
      this.liklihoodhelpcolonrectalvl = x.liklihoodhelpcolonrectalvl;
      this.colonrectalhelpObject = {
        'Very Unlikely': this.liklihoodhelpcolonrectalvu,
        Unlikely: this.liklihoodhelpcolonrectalu,
        'Not Sure': this.liklihoodhelpcolonrectalns,
        Likely: this.liklihoodhelpcolonrectall,
        'Very Likely': this.liklihoodhelpcolonrectalvl,
      };

      this.isLoading = false;
    },
    showModal(data, title) {
      this.modalseries = data;
      this.title = title;
      this.isOpen = true;
    },
    hideModal() {
      this.modalseries = null;
      this.isOpen = false;
    },
  },
  components: {
    dataModal,
  },
  mounted() {
    this.load();
  },
};
</script>
