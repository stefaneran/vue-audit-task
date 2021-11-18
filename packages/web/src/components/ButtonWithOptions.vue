<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        class="button"
        dark
        dense
        v-bind="attrs"
        v-on="on"
      >
        {{ title }}
        <v-icon
          right
          dark
        >
          mdi-chevron-down
        </v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="option in options"
        :key="option"
        class="option"
        @click="clickedOption($event, option)"
      >
        <v-list-item-title>{{ option }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'ButtonWithOptions',
  props: {
    title: String,
    options: Array
  },
  methods: {
    clickedOption(e, option) {
      this.$emit('click', option);
    }
  }
}
</script>

<style scoped>
  .button {
    /* Disclaimer: These styles are very specific for the "New" button to save on time, normally they'd be more generic to fit more cases */
    height: 30px !important;
    width: 75px;
    position: relative;
    top: 0.7rem;
    left: 1rem;
  }
  .option {
    cursor: pointer;
  }
</style>