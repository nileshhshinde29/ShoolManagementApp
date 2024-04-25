<template lang="">
    <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent="submit" >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
      ></v-text-field>
       <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
      ></v-text-field>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
<script>
export default {
  name: "LoginComponent",
  data: () => ({
    email: "",
    password: "",
    emailRules: [
      (value) => {
        console.log(value);
        if (value) return true;

        return "You must enter a first name.";
      },
    ],
    passwordRules: [
      (value) => {
        if (value) return true;
        return "You must enter a first name.";
      },
    ],
  }),
  methods: {
    submit() {
      console.log(this.emailRules);
    },
  },
};
</script>
<style lang="">
</style>