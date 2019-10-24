<template>
  <section class="section">
    <h2 class="subtitle">
      Viajeros
    </h2>
    <b-button icon-left="plus" @click="$accessor.addTraveler">
      Añadir viajero
    </b-button>
    <travelers-table></travelers-table>
    <br />

    <h2 class="subtitle">
      Cuántos debe haber al otro lado del río
    </h2>
    <b-button icon-left="plus" @click="$accessor.addAcceptance">
      Añadir estado
    </b-button>
    <acceptance-table></acceptance-table>
    <br />

    <h2 class="subtitle">Condiciones para viajar</h2>
    <b-button icon-left="plus" @click="$accessor.addAcceptance">
      Añadir condición
    </b-button>
    <conditions-table></conditions-table>
    <br />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import TravelersTable from '@/components/TravelersTable.vue'
import AcceptanceTable from '@/components/AcceptanceTable.vue'
import ConditionsTable from '@/components/ConditionsTable.vue'

@Component({
  components: {
    TravelersTable,
    AcceptanceTable,
    ConditionsTable
  }
})
export default class HomePage extends Vue {}
</script>
