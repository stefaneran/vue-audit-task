<template>
  <fragment>
    <td>
      {{ note.title }}
    </td>
    <td>
      <v-chip label class="label">{{ note.type }}</v-chip>
    </td>
    <td>
      <v-chip 
        label 
        v-bind:class="getStatusClasses(note.status)"
      >
        {{ note.status }}
      </v-chip>
    </td>
    <td>
      <v-chip 
        label 
        v-bind:class="getPriorityClasses(note.priority)"
      >
        {{ note.priority }}
      </v-chip>
    </td>
    <td>
      <v-avatar 
        v-for="(user, index) in assignees"
        :key="user.id" 
        class="avatar assignee"
        v-bind:style="{ left: `${index * 20}px` }"
      >
        <img
          v-bind:src="user.photo"
          v-bind:alt="user.name"
        >
      </v-avatar>
    </td>
    <td>
      <v-avatar class="avatar reporter">
        <img
          v-bind:src="reporter.photo"
          v-bind:alt="reporter.name"
        >
      </v-avatar>
    </td>
    <td>
      <v-chip 
        label 
        class="label"
        v-if="sectionRef.length"
      >
        {{ sectionRef }}
      </v-chip>
    </td>
    <td>
      <span>{{ note.createdAt }}</span>
    </td>
  </fragment>
</template>

<script>
import parseSectionRef from '../utils/parseSectionRef';
export default {
  name: 'Note',
  props: {
    note: Object
  },
  computed: {
    assignees() { 
      return this.note.assignees.map(userId => this.$store.state.users[userId])
    },
    reporter() {
      return this.$store.state.users[this.note.reporterId]
    },
    sectionRef() {
      return parseSectionRef(this.note.sectionRef)
    }
  },
  methods: {
    getStatusClasses(status) {
      return { 
        label: true,
        blue: status === 'In Progress', 
        orange: status === 'Pending documentation' ,
        green: status === 'Addressed',
        red: status === 'Not started'
      }
    },
    getPriorityClasses(priority) {
      return { 
        label: true,
        red: priority === 'high', 
        orange: priority === 'medium' ,
        green: priority === 'low'
      }
    }
  }
}
</script>

<style scoped>
  span.label {
    color: #fff;
    background: #5a7088;
    text-transform: capitalize;
  }
  td {
    position: relative;
  }
  .avatar {
    border: 3px solid #0086ff;
  }
  .assignee {
    position: absolute;
    top: 0;
  }
  .reporter {
    margin-left: 2rem;
  }
  /* Disclaimer: I would add these colors to a theme object provided across the whole app to prevent repeating hardcoding hexvalues */
  .orange {
    background: #fe902f;
  }
  .red {
    background: #ff3461;
  }
  .green {
    background: #16a763;
  }
</style>