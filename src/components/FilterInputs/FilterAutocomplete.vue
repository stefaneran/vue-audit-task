<template>
<div class="input-container">
  <label class="label">{{ label }}</label>
  <v-autocomplete 
    :items="options"
    :value="value"
    :multiple="multiple"
    @input="updateFilter"
    outlined
    dense
  />
</div>
</template>

<script>
export default {
  name: 'FilterAutocomplete',
  props: {
    label: String,
    inputName: String,
    value: [Array, String],
    options: Array,
    multiple: Boolean
  },
  methods: {
    updateFilter(value) {
      const payload = {
        property: this.inputName,
        value,
      };
      this.$store.commit("updateFilter", payload);
    }
  }
}
</script>

<style scoped>
  .input-container {
    position: relative;
  }
  .label {
    position: absolute;
    top: -1.2rem;
    font-size: 0.8rem;
    font-weight: 500;
  }
</style>