<template>
  <div>
    <div class="tabs">
      <v-tab>
        <v-btn rounded color="primary" dark @click="form2">Introductory Info</v-btn>
      </v-tab>
      <v-tab>
        <v-btn rounded color="primary" dark @click="form3">Primary Care & Tabacco</v-btn>
      </v-tab>
      <v-tab>
        <v-btn rounded color="primary" dark @click="form4">Breast Screening</v-btn>
      </v-tab>
      <v-tab>
        <v-btn rounded color="primary" dark @click="form4">Cervical Screening</v-btn>
      </v-tab>
    </div>
    <div class="myForm">
      <h1>Introductory Information</h1>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row class="columnText">
          <v-col cols="6">
            <p id="title">NARAP Site</p>
            <v-overflow-btn
              class="my-2"
              :items="dropdown_font"
              label="Choose Site"
              target="#dropdown-example"
            ></v-overflow-btn>
            <p id="title">RA Initials</p>
            <v-text-field
              v-model="name"
              :counter="3"
              :rules="nameRules"
              label="RA Initials"
              required
            ></v-text-field>
            <p id="title">RA ID</p>
            <v-text-field
              v-model="name2"
              :counter="10"
              :rules="nameRules"
              label="RA ID Number"
              required
            ></v-text-field>
            <p id="title">Date</p>
            <div id="pickDate">
              <date-modal />
            </div>
            <p id="title">Time</p>
            <div id="picktime">
              <time-modal />
            </div>
            <p id="title">May I ask how old you are?</p>
            <v-radio-group v-model="ex8" column>
              <v-radio label="Yes" color="success" value="success"></v-radio>
              <v-radio label="Excluded after apporaching" color="warning" value="warning"></v-radio>
              <v-radio label="No" color="error" value="error"></v-radio>
            </v-radio-group>
            <p id="title">Age of participant</p>
            <v-text-field ref="zip" v-model="zip" :counter="3" label="Age" placeholder="35"></v-text-field>
            <p id="title">Gender</p>
            <v-radio-group v-model="ex8" column>
              <v-radio label="Male" color="primary" value="success"></v-radio>
              <v-radio label="Female" color="error" value="warning"></v-radio>
            </v-radio-group>
            <p id="title">Patient or Visitor</p>
            <v-radio-group v-model="ex8" column>
              <v-radio label="Patient" color="primary" value="success"></v-radio>
              <v-radio label="Visitor " color="error" value="warning"></v-radio>
            </v-radio-group>
            <p id="title">May I ask how many healthcare screenings you may have had?</p>
            <v-radio-group v-model="ex8" column>
              <v-radio label="Yes" color="sucess" value="success"></v-radio>
              <v-radio label="No " color="error" value="warning"></v-radio>
            </v-radio-group>
            <p id="title">If others are present ask the visitor:</p>
            <v-radio-group v-model="ex8" column>
              <v-radio label="Wants privacy" color="primary" value="success"></v-radio>
              <v-radio label="Does not need privacy" color="error" value="warning"></v-radio>
            </v-radio-group>
            <p
              id="title"
            >The particpant gave verbal consent to be in the initial portion of ther study</p>
            <v-radio-group v-model="ex8" column>
              <v-radio label="Yes" color="success" value="success"></v-radio>
              <v-radio label="No" color="error" value="warning"></v-radio>
              <v-radio label="Not capable of providing consent" color="error" value="warning"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <div class="btns">
          <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
          <v-btn :disabled="!valid" color="primary" class="mr-4" @click="exit">Save and Exit</v-btn>
          <v-btn :disabled="!valid" color="primary" class="mr-4" @click="submit">Save and Continue</v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import Time from '@/components/timeModal.vue';
import DatePick from '@/components/dateModal.vue';

export default {
  components: { 'time-modal': Time, 'date-modal': DatePick },
  data: () => ({
    dropdown_font: [
      'Hartford Hospital',
      'Hackensack UMC',
      'Kennedu University Hospital',
      'St. Vincents Meidical Center',
      'St.Louis University Hospital',
      'SUNY Upstate',
      'Pullman Regional',
      'University of Vermont',
      'St. Cloud',
      'UMC of Southern Nevada',
      'Henry Ford hospital',
    ],
    dropdown_icon: [
      { text: 'list', callback: () => console.log('list') },
      { text: 'favorite', callback: () => console.log('favorite') },
      { text: 'delete', callback: () => console.log('delete') },
    ],
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false,
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    verify() {
      this.$validator.validateAll();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    form2() {
      this.$router.push('/Form2');
    },
    form3() {
      this.$router.push('/Form3');
    },
    form4() {
      this.$router.push('/Form4');
    },
    exit() {
      this.$router.push('/');
      this.formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;
        this.$refs[f].validate(true);
      });
    },
    showModal() {
      this.$refs['my-modal'].show();
    },
    hideModal() {
      this.$refs['my-modal'].hide();
    },
    mounted() {
      this.showModal();
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.$router.push('/Form3');
      }
      this.formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;
        this.$refs[f].validate(true);
      });
    },
  },
};
</script>
 
 <style>
.myForm {
  max-width: 70%;
  margin-left: 15%;
  margin-right: 10%;
  margin-bottom: 10%;
  margin-top: 3%;
  border-width: 2px;
  border-style: solid;
  border-color: darkgrey;
  background-color: rgb(228, 228, 228);
}
#google {
  width: 100%;
  height: 1500px;
}
.googleForm {
  max-width: 100%;
}
.columnText {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
}
.btns,
h1 {
  align-content: center;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
#title {
  display: flex;
  justify-content: left;
  text-align: left;
}
.tabs {
  display: flex;
  justify-content: left;
  text-align: left;
  margin-top: 0.5%;
}
</style>
