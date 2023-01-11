import { createApp } from "vue";
import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            tempo: 80,
            key: 0,
            mode: 0,
            loading: true,
        };
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

const app = createApp({ App });

// Install the store instance as a plugin
app.use(store);
