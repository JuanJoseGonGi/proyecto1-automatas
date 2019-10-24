<template>
  <table class="table is-striped is-fullwidth">
    <thead>
      <tr>
        <th
          v-for="(traveler, index) in travelers"
          :key="'acceptanceColumn' + index"
        >
          {{ traveler.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <acceptance-table-item
        v-for="(acceptance, index) in acceptances"
        :key="'acceptance' + index"
        :acceptance="acceptance"
        :index="index"
      ></acceptance-table-item>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import AcceptanceTableItem from '@/components/AcceptanceTableItem.vue'

@Component({
  components: {
    AcceptanceTableItem
  }
})
export default class AcceptanceTable extends Vue {
  get travelers() {
    return this.$accessor.travelers
  }

  get acceptances() {
    return this.$accessor.acceptances
  }
}
</script>
