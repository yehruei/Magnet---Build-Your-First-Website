import { Module } from "vuex"
import { RootState } from "../../store"

export interface displayState {
    isMobile: boolean,
    isLoading: boolean,
    showAuth: boolean,
}

export const store: Module<displayState, RootState> = {
    state: (): displayState => ({
        isMobile: false,
        isLoading: false,
        showAuth: false,
    }),
}