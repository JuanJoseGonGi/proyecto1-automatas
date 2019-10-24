<template>
  <section class="section">
    <h1 class="title">
      Cross the river
    </h1>
    <section class="section">
      <h2 class="subtitle">
        Viajeros
      </h2>
      <b-button icon-left="plus" @click="$accessor.addTraveler">
        Añadir viajero
      </b-button>
      <travelers-table></travelers-table>
    </section>
    <section class="section">
      <h2 class="subtitle">
        Estados de aceptación
      </h2>
      <b-button icon-left="plus" @click="$accessor.addAcceptance">
        Añadir estado
      </b-button>
      <acceptance-table></acceptance-table>
    </section>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import TravelersTable from '@/components/TravelersTable.vue'
import AcceptanceTable from '@/components/AcceptanceTable.vue'

@Component({
  components: {
    TravelersTable,
    AcceptanceTable
  }
})
export default class HomePage extends Vue {}
</script>
