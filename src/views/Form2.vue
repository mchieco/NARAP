<template>
  <div class="myForm">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row class="columnText">
        <v-col cols="5">
          <p>NARAP Site</p>
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
        <v-col cols="6">
          <v-overflow-btn
            class="my-2"
            :items="dropdown_font"
            label="Choose Site"
            target="#dropdown-example"
          ></v-overflow-btn>
          <v-text-field v-model="name" :counter="3" :rules="nameRules" label="RA Initials" required></v-text-field>
          <v-text-field
            v-model="name2"
            :counter="10"
            :rules="nameRules"
            label="RA ID Number"
            required
          ></v-text-field>
          <div id="pickDate">
            <date-modal />
          </div>
          <!--
          <v-dialog
            ref="dialog"
            v-model="modal2"
            :return-value.sync="time"
            persistent
            width="290px"
          >
          <time-modal/>
            <template v-slot:activator="{ on }">
              <v-text-field v-model="time" label="Click to select time" readonly v-on="on"></v-text-field>
            </template>
            <v-time-picker v-if="modal2" v-model="time" full-width>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
            </v-time-picker>
          </v-dialog>
          !-->
          <div id="picktime">
            <time-modal />
          </div>

          <v-radio-group v-model="ex8" column>
            <v-radio label="Yes" color="success" value="success"></v-radio>
            <v-radio label="Excluded after apporaching" color="warning" value="warning"></v-radio>
            <v-radio label="No" color="error" value="error"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

      <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
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
  },
};
</script>
 
 <style>
.myForm {
  max-width: 90%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;
  margin-top: 3%;
}
#google {
  width: 100%;
  height: 1500px;
}
.googleForm {
  max-width: 100%;
}
.columnText{
  text-align: center;
}
</style>
