<template>
    <div class="metronome">
        <h1>METRONOME</h1>
        <div class="metronome-bpm-controlls">
            <a class="metronome-minus" v-on:click="this.$store.state.tempo--">
                <i class="fas fa-minus-circle"></i>
            </a>
            <input class="metronome-range" type="range" v-model="this.$store.state.tempo" min="20" max="300">
            <a class="metronome-plus" v-on:click="this.$store.state.tempo++">
                <i class="fas fa-plus-circle"></i>
            </a>
            <input class="metronome-bpm" v-model="this.$store.state.tempo" type="number">
        </div>
        <a class="metronome-play" @click="toggle()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="play">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>
            <i v-if="playing" class="far fa-pause-circle"></i>
            <i v-else class="far fa-play-circle"></i>
        </a>
    </div>
</template>

<script>
export default {
    name: "Metronome",
    data() {
        return {
            playing: false,
            audioContext: null,
            audioBuffer: null,
            currentTime: null
        }
    },
    computed: {
        getTempo() {
            return this.$store.state.tempo;
        }
    },
    mounted() {
        this.initContext();
    },
    methods: {
        toggle() {
            if (!this.playing) {
                this.currentTime = this.audioContext.currentTime;
                this.playing = true;
                this.play();
            } else {
                this.playing = false;
            }
        },

        play() {
            this.currentTime += 60 / this.$store.state.tempo;

            const source = this.audioContext.createBufferSource();
            source.buffer = this.audioBuffer;
            source.connect(this.audioContext.destination);
            source.onended = this.playing ? this.play : "";
            source.start(this.currentTime);
        },

        async initContext() {
            this.audioContext = new AudioContext();

            this.audioBuffer = await fetch("click.wav")
                .then(res => res.arrayBuffer())
                .then(arrayBuffer =>
                    this.audioContext.decodeAudioData(arrayBuffer)
                )
        }
    }
}
</script>

<style>
.metronome {
    display: flex;
    flex-direction: row;
    background-color: var(--grey-color);
    color: var(--light-color);
    max-width: 800px;
    margin: auto;
    margin-top: 6.5rem;
    padding: 1.3rem 2rem;
    -webkit-box-shadow: 3px 3px 9px -3px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 3px 3px 9px -3px rgba(0, 0, 0, 0.2);
    box-shadow: 3px 3px 9px -3px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    align-items: center;
    justify-content: center;
}

@media only screen and (max-width:800px) {
    .metronome {
        width: 100%;
        max-width: none;
    }
}

.metronome h1 {
    font-weight: 500;
    font-size: 1.8rem;
}

.metronome-bpm-controlls {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto;
}

.metronome-range {
    width: 13rem;
}

.metronome-minus,
.metronome-plus {
    margin-inline: 0.5rem;
    cursor: pointer;
}

.metronome-bpm {
    width: 3rem;
    text-align: center;
    padding: 0.4rem 0;
    border: none;
    border-radius: 3px;
    margin-left: 1.5rem;
    color: var(--grey-color);
    font-size: 1.2rem;
    outline: none;
}

.metronome-bpm::-webkit-outer-spin-button,
.metronome-bpm::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.metronome-bpm[type=number] {
    -moz-appearance: textfield;
}

.metronome-play {
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>