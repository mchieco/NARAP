<template>
  <v-row>
    <v-col cols="12" sm="6" md="4">
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Date"
            required
            :rules="[() => !!date || 'This field is required']"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
<v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
};
</script>
