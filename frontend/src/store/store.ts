// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { store as display, displayState } from './modules/display/display'

// define your typings for the store state
export interface RootState {
    display: displayState,
}

// define injection key
export const key: InjectionKey<Store<RootState>> = Symbol()

const store: Store<RootState> = createStore({
    modules: {
        display
    }
})

export default store;