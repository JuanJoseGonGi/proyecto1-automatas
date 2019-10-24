<template>
  <td>
    <b-numberinput
      v-model="state"
      :min="traveler.min"
      :max="traveler.max"
      controls-position="compact"
    ></b-numberinput>
  </td>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class AcceptanceTableItemState extends Vue {
  @Prop({ required: true, type: Number }) acceptanceIndex!: number
  @Prop({ required: true, type: Number }) stateIndex!: number

  get state() {
    const acceptance = this.$accessor.acceptances[this.acceptanceIndex]
    return acceptance.states[this.stateIndex]
  }

  set state(newState) {
    if (newState < this.traveler.min) {
      newState = this.traveler.min
    }

    if (newState > this.traveler.max) {
      newState = this.traveler.max
    }

    this.$accessor.updateAcceptanceState({
      acceptanceIndex: this.acceptanceIndex,
      stateIndex: this.stateIndex,
      newState
    })
  }

  get traveler() {
    return this.$accessor.travelers[this.stateIndex]
  }
}
</script>
