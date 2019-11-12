<template>
  <v-row>
    <v-col cols="11" sm="5">
      <v-dialog
        ref="dialog"
        v-model="modal2"
        :return-value.sync="time"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="time"
            label="Select Time"
            readonly
            required
            :rules="[() => !!time || 'This field is required']"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="modal2"
          v-model="time"
          full-width
        >
          <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
        </v-time-picker>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  el: 'picktime',
  data() {
    return {
      time: null,
      menu2: false,
      modal2: false,
    };
  },
};
</script>
