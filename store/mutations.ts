import { mutationTree } from 'nuxt-typed-vuex'
import state from './state'

const defaultTravelerName = 'Nombre del viajero'

const defaultTraveler: Traveler = {
  min: 0,
  max: 0,
  name: defaultTravelerName,
  initialState: 0
}

export default mutationTree(state, {
  addTraveler(state) {
    if (
      state.travelers.find((traveler) => traveler.name === defaultTravelerName)
    ) {
      return
    }

    state.travelers.push({ ...defaultTraveler })

    state.acceptances = [
      ...state.acceptances.map((acceptance) => {
        return {
          ...acceptance,
          states: [...acceptance.states, 0]
        } as Acceptance
      })
    ]
  },

  deleteTraveler(state, index) {
    state.travelers.splice(index, 1)

    state.acceptances = [
      ...state.acceptances.map((acceptance) => {
        acceptance.states.splice(index, 1)

        return acceptance
      })
    ]
  },

  updateTravelerName(
    state,
    { index, newValue }: { index: number; newValue: string }
  ) {
    state.travelers = [
      ...state.travelers.map((traveler, travelerIndex) => {
        if (travelerIndex === index) {
          return { ...traveler, name: newValue }
        }

        return traveler
      })
    ]
  },

  updateTravelerMin(state, { index, min }: { index: number; min: number }) {
    state.travelers = [
      ...state.travelers.map((traveler, travelerIndex) => {
        if (travelerIndex === index) {
          return { ...traveler, min }
        }

        return traveler
      })
    ]
  },

  updateTravelerMax(state, { index, max }: { index: number; max: number }) {
    state.travelers = [
      ...state.travelers.map((traveler, travelerIndex) => {
        if (travelerIndex === index) {
          return { ...traveler, max }
        }

        return traveler
      })
    ]
  },

  updateTravelerInitialState(
    state,
    { index, initialState }: { index: number; initialState: number }
  ) {
    state.travelers = [
      ...state.travelers.map((traveler, travelerIndex) => {
        if (travelerIndex === index) {
          return { ...traveler, initialState }
        }

        return traveler
      })
    ]
  },

  addAcceptance(state) {
    for (let index = 0; index < state.acceptances.length; index++) {
      const acceptance = state.acceptances[index]

      if (acceptance.states.every((state) => state == 0)) {
        return
      }
    }

    const acceptance = { states: state.travelers.map(() => 0) }
    state.acceptances.push(acceptance)
  }
})
