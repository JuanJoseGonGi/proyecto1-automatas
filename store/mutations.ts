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
  },
  deleteTraveler(state, index) {
    state.travelers.splice(index, 1)
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
  }
})
