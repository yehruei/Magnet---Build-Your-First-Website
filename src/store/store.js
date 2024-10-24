// store.ts
import { createStore } from 'vuex'
import { store as display } from './modules/display/display'

// define injection key
export const key = Symbol()

const store = createStore({
    modules: {
        display
    }
})

export default store;