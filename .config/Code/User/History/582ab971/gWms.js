import { createStore } from "vuex";

export default createStore({
    state: {
        tempo: 80,
        key: 0,
        mode: 0,
        loading: false,
    },
    mutations: {
        setTrack(state, track) {
            state.tempo = Math.round(track.tempo);
            state.key = track.key;
            state.mode = track.mode == 1 ? 5 : 0;
        },
        loading(state) {
            state.loading = false;
        },
    },
    actions: {},
    modules: {},
    getters: {},
});
