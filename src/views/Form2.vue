<template>
  <div class="myForm">
    <h1>Introductory Information</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row class="columnText">
        <!--
        <v-col cols="5">
          <p id="title">NARAP Site</p>
          <br />
          <br />
          <p>RA Initials</p>
          <br />
          <br />
          <p>RA ID</p>
          <br />
          <br />
          <p>Date</p>
          <br />
          <p>Time</p>
          <br />
          <p>May I ask how old you</p>
        </v-col>
        !-->
        <v-col cols="6">
          <p id="title">NARAP Site</p>
          <v-overflow-btn
            class="my-2"
            :items="dropdown_font"
            label="Choose Site"
            target="#dropdown-example"
          ></v-overflow-btn>
          <p id="title">RA Initials</p>
          <v-text-field v-model="name" :counter="3" :rules="nameRules" label="RA Initials" required></v-text-field>
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
          <v-text-field
            ref="zip"
            v-model="zip"
            :rules="[() => !!zip || 'This field is required']"
            :counter="3"
            label="Age"
            required
            placeholder="35"
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="btns">
        <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
        <v-btn :disabled="!valid" color="primary" class="mr-4" @click="exit">Save and Exit</v-btn>
        <v-btn :disabled="!valid" color="primary" class="mr-4" @click="submit">Save and Continue</v-btn>
      </div>
    </v-form>
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
    resetValidation() {
      this.$refs.form.resetValidation();
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
      this.$router.push('/Form3');
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
}
</style>
