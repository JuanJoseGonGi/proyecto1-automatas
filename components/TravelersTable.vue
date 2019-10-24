<template>
  <table class="table is-striped is-fullwidth">
    <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="'column' + index">
          {{ column }}
        </th>
      </tr>
    </thead>
    <tbody>
      <travelers-table-item
        v-for="(traveler, index) in travelers"
        :key="'traveler' + index"
        :traveler="traveler"
        :index="index"
      ></travelers-table-item>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import TravelersTableItem from '@/components/TravelersTableItem.vue'

@Component({
  components: { TravelersTableItem }
})
export default class TravelersTable extends Vue {
  get columns() {
    return ['Nombre', 'Cantidad mínima', 'Estado inicial', 'Cantidad máxima']
  }

  get travelers() {
    return this.$accessor.travelers
  }
}
</script>
