<template>
  <tr class="is-vcentered">
    <td
      v-for="(state, stateIndex) in acceptance.states"
      :key="'acceptanceState' + index + stateIndex"
    >
      {{ state }}
    </td>
  </tr>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class AcceptanceTableItem extends Vue {
  @Prop({ required: true }) acceptance!: Acceptance
  @Prop({ required: true, type: Number }) index!: number
}
</script>
