<template>
  <tr class="is-vcentered">
    <td
      ref="name"
      class="traveler-name"
      contenteditable
      @blur="updateItem"
      @focus="selectText"
      v-text="traveler.name"
    ></td>
    <td>
      <b-numberinput
        v-model="min"
        min="0"
        :max="max"
        controls-position="compact"
      ></b-numberinput>
    </td>
    <td>
      <b-numberinput
        v-model="initialState"
        :min="min"
        :max="max"
        controls-position="compact"
      ></b-numberinput>
    </td>
    <td>
      <b-numberinput
        v-model="max"
        :min="min"
        controls-position="compact"
      ></b-numberinput>
    </td>
  </tr>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class TravelersTableItem extends Vue {
  @Prop({ required: true }) traveler!: Traveler
  @Prop({ required: true, type: Number }) index!: number

  get min() {
    return this.traveler.min
  }

  set min(newMin) {
    const index = this.index

    if (this.initialState < newMin) {
      this.initialState = newMin
    }

    this.$accessor.updateTravelerMin({ index, min: newMin })
  }

  get max() {
    return this.traveler.max
  }

  set max(newMax) {
    const index = this.index

    if (this.initialState > newMax) {
      this.initialState = newMax
    }

    this.$accessor.updateTravelerMax({ index, max: newMax })
  }

  get initialState() {
    return this.traveler.initialState
  }

  set initialState(newInitialState) {
    const index = this.index
    this.$accessor.updateTravelerInitialState({
      index,
      initialState: newInitialState
    })
  }

  mounted() {
    this.focusName()
  }

  focusName() {
    ;(<HTMLDivElement>this.$refs.name).focus()
  }

  updateItem({ target }: { target: HTMLDivElement }) {
    if (target === null || target.textContent === null) {
      return
    }

    const newValue = target.textContent.trim()

    if (!newValue) {
      this.$accessor.deleteTraveler(this.index)
      return
    }

    const index = this.index

    this.$accessor.updateTravelerName({
      index,
      newValue
    })
  }

  selectText({ target }: { target: HTMLDivElement }) {
    const selection = document.getSelection()
    const range = document.createRange()
    range.selectNodeContents(target)

    if (selection === null) {
      return
    }

    selection.removeAllRanges()
    selection.addRange(range)
  }
}
</script>
