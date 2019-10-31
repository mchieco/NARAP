<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card style="background: #f1f1f1" :elevation="24">
    <v-card-title>Login</v-card-title>
    <v-form>
    <v-container style="padding: 0 30px 20px 30px;">
    <v-text-field
      v-model="username"
      :error-messages="usernameErrors"
      :counter="10"
      label="Username"
      prepend-icon="mdi-lock"
      required
      @input="$v.username.$touch()"
      @blur="$v.username.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      :counter="15"
      label="Password"
      prepend-icon="mdi-lock"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>
          </v-container>
            <v-card-actions style="margin-top: 0px;">
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="$emit('close')">Close</v-btn>
            <v-btn color="blue darken-1" text @click="login">Login</v-btn>
          </v-card-actions>
    </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength } from 'vuelidate/lib/validators';

export default {
  props: ['dialog'],
  mixins: [validationMixin],

  validations: {
    username: { required, maxLength: maxLength(10) },
    password: { required, maxLength: maxLength(15) },
  },

  data: () => ({
    username: '',
    password: '',
  }),

  computed: {
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      if (!this.$v.username.maxLength) errors.push('Username must be at most 10 characters long');
      if (!this.$v.username.required) errors.push('Username is required.');
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      if (!this.$v.password.maxLength) errors.push('Password must be at most 15 characters long');
      if (!this.$v.password.required) errors.push('Password is required');
      return errors;
    },
  },
  methods: {
    login() {
      this.$v.$touch();
    },
  },
};
</script>
