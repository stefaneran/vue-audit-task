<template>
  <v-breadcrumbs :items="items">
    <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
// Making this component static as per instructions, normally I'd pass the router history as prop to dynamically build the breadcrumbs
export default {
  data() {
    return {
      items: [
        {
          disabled: false,
          exact: false,
          href: '/engagements',
          link: false,
          text: 'Engagements',
          to: '/engagements'
        },
        {
          disabled: false,
          exact: false,
          href: '/microsoft-2021',
          link: false,
          text: 'Microsoft 2021',
          to: '/microsoft-2021'
        },
        {
          disabled: false,
          exact: false,
          href: '/review-notes',
          link: true,
          text: 'Review notes',
          to: '/review-notes'
        }
      ]
    }
  }
}
</script>