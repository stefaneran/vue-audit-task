<template>
  <div class="input-container">
    <label class="label">{{ label }}</label>
    <div class="tab-container"> 
      <button 
        v-bind:class="{ 'tab-item': true, active: optionValue === value }"
        v-for="[optionLabel, optionValue] in options"
        :key="optionLabel"
        @click="updateFilter($event, optionValue)"
      >
        {{ optionLabel }}
      </button> 
    </div>
    <!--
    <v-tabs class="tab-container" :value="getTabIndex(this)">
      <v-tab
        v-bind:class="{ 'tab-item': true, active: optionValue === value }"
        v-for="[optionLabel, optionValue] in options"
        :key="optionLabel"
        @click="updateFilter($event, optionValue)"
      >
        {{ optionLabel }}
      </v-tab>
    </v-tabs>
    -->
  </div>
</template>

<script>
// Disclaimer: I originally used v-tabs but had issues overriding the CSS styles, 
// particularly height since it didn't take the "dense" prop like the other inputs, 
// so I opted for a custom implementation
export default {
  name: "FilterTabs",
  props: {
    label: String,
    inputName: String,
    value: String,
    options: Array,
  },
  methods: {
    getTabIndex(context) {
      const { options, value } = context;
      return options.indexOf(value);
    },
    updateFilter(e, value) {
      const payload = {
        property: this.inputName,
        value,
      };
      this.$store.commit("updateFilter", payload);
    },
  },
};
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
  .tab-container {
    border: 2px solid #9caab7;
    border-radius: 3px;
    height: 40px;
    display: flex;
  }
  .tab-item {
    background: #9caab7;
    color: #fff;
    border-bottom: none;
    text-transform: capitalize;
    font-size: 0.8rem;
    min-width: 60px;
    letter-spacing: initial;
    font-weight: normal;
  }
  .tab-item.active {
    background: #fff;
    color: #0086ff;
    font-weight: bold;
  }
</style>
