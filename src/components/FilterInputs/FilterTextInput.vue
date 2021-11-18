<template>
  <v-text-field
    class="input"
    :label="label"
    :value="value"
    @input="updateFilter"
    outlined
    dense
  />
</template>

<script>
export default {
  name: 'FilterTextInput',
  props: {
    label: String,
    inputName: String,
    value: String
  },
  methods: {
    updateFilter(value) {
      const payload = {
        property: this.inputName,
        value,
      };
      this.$store.commit("updateFilter", payload);
    },
  }
}
</script>

<style scoped>
  .input {
    width: 220px;
  }
</style>