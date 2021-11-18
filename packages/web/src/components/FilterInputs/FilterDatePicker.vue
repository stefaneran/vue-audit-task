<template>
  <v-dialog
    v-model="modal"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <div class="input-container">
        <label class="label">Date</label>
        <v-text-field
          :value="date"
          prepend-inner-icon="mdi-calendar"
          readonly
          outlined
          dense
          v-bind="attrs"
          v-on="on"
        />
      </div>
    </template>
    <v-date-picker
      :value="date"
      @input="changeDate"
      scrollable
    >
      <v-spacer></v-spacer>
      <v-btn
        text
        color="primary"
        @click="modal = false"
      >
        Cancel
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="saveDate"
      >
        OK
      </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  name: 'FilterDatePicker',
  props: {
    date: String
  },
  data() {
    return {
      tempDate: this.date,
      modal: false
    }
  },
  methods: {
    changeDate(e) {
      this.tempDate = e;
    },
    saveDate() {
      this.modal = false;
      const payload = {
        property: 'date',
        value: this.tempDate
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