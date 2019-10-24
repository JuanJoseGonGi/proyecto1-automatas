<template>
  <section class="section">
    <h1 class="title">
      Cross the river
    </h1>
    <h2 class="subtitle">
      Viajeros
    </h2>
    <b-button icon-left="plus" @click="$accessor.addTraveler">
      Añadir
    </b-button>
    <travelers-table></travelers-table>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import TravelersTable from '@/components/TravelersTable.vue'

@Component({
  components: {
    TravelersTable
  }
})
export default class HomePage extends Vue {}
</script>
