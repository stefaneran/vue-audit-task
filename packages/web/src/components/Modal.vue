<template>
  <v-dialog
    v-model="show"
    width="500"
  >
    <v-card>
      <v-card-title class="text-h5">
        {{ title }}
      </v-card-title>
      <v-card-text>{{ text }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          text
          @click="show = false"
        >
          Cancel
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="show = false"
        >
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
/** 
 * Most of the code used in the modal logic is from this thread: 
 * https://stackoverflow.com/questions/48035310/open-a-vuetify-dialog-from-a-component-template-in-vuejs
 * Vue handles this kind of logic much more differently than React so it was difficult for me to figure out the right way 
 * without looking it up on stack overflow.
 * */
export default {
  name: 'Modal',
  props: {
    value: Boolean,
    title: String,
    text: String
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
         this.$emit('input', value)
      }
    }
  }
}
</script>