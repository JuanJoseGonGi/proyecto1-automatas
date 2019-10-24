<template>
  <tr class="is-vcentered">
    <acceptance-table-item-state
      v-for="(state, stateIndex) in acceptance.states"
      :key="'acceptanceState' + index + stateIndex"
      :acceptance-index="index"
      :state-index="stateIndex"
    ></acceptance-table-item-state>
    <td><b-button>Borrar</b-button></td>
  </tr>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

import AcceptanceTableItemState from '@/components/AcceptanceTableItemState.vue'

@Component({
  components: { AcceptanceTableItemState }
})
export default class AcceptanceTableItem extends Vue {
  @Prop({ required: true }) acceptance!: Acceptance
  @Prop({ required: true, type: Number }) index!: number
}
</script>
