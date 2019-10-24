import { getAccessorType } from 'nuxt-typed-vuex'

import mutations from './mutations'
import state from './state'

export const accessorType = getAccessorType({
  state,
  mutations
})
