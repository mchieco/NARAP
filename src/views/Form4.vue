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
      <h1>Breast Screening</h1>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row class="columnText">
          <v-col cols="6">
            <p
              id="title"
            >Have you ever been told by a heath care professional that you no longer need to have mammograms for breast cancer?</p>
            <v-radio-group v-model="ex8" column>
              <v-radio label="Yes" color="success" value="success"></v-radio>
              <v-radio label="No" color="error" value="error"></v-radio>
              <v-radio label="Does not know" color="warning" value="warning"></v-radio>
              <v-radio label="Refused to respond" color="warning" value="refuse"></v-radio>
            </v-radio-group>
            <p
              id="title"
            >You have been told by a physician that you no longer need to have mammograms correct?</p>
            <v-radio-group v-model="ex8" column>
              <v-radio label="Yes (No Mammograms)" color="success" value="success"></v-radio>
              <v-radio label="No (Needs Mammograms)" color="error" value="error"></v-radio>
            </v-radio-group>
            <p
              id="title"
            >Have you been told by a heath care professional that you need a mammogram more often than evey 2 years?</p>
            <v-radio-group v-model="ex8" column>
              <v-radio label="Yes" color="success" value="success"></v-radio>
              <v-radio label="No" color="error" value="error"></v-radio>
              <v-radio label="Does not know" color="warning" value="warning"></v-radio>
              <v-radio label="Refused to respond" color="warning" value="refuse"></v-radio>
            </v-radio-group>
            <p id="title">Have you had a mammogram within the last 2 years?</p>
            <v-radio-group v-model="ex8" column>
              <v-radio label="Yes" color="success" value="success"></v-radio>
              <v-radio label="No" color="error" value="error"></v-radio>
              <v-radio label="Does not know" color="warning" value="warning"></v-radio>
              <v-radio label="Refused to respond" color="warning" value="refuse"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <div class="btns">
          <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

          <v-btn :disabled="!valid" color="primary" class="mr-4" @click="submit">Save and Continue</v-btn>

          <v-btn :disabled="!valid" color="primary" class="mr-4" @click="exit">Save and Exit</v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    dropdown_font: [
      'Alabama',
      'Alaska',
      'American Samoa',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'District of Columbia',
      'Florida',
      'Georgia',
      'Guam',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Minor Outlying Islands',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Northern Mariana Islands',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Puerto Rico',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'U.S. Virgin Islands',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming',
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
    submit() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.$router.push('/Form4');
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
  font-size: 20px;
  font-weight: bold;
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
