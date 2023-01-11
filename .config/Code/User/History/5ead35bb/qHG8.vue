<script>
import Fretboard from './components/Fretboard.vue';
import Metronome from './components/Metronome.vue';
import Spotify from './components/Spotify.vue'
import { mapActions } from "vuex";

export default {
  components: {
    Fretboard, Metronome, Spotify
  },
  data() {
    return {
      showSpotify: false,
      loading: true,
      tracks: []
    }
  },
  created() {
    this.defaultPlaylist();
  },
  methods: {
    ...mapActions(["getAccessToken"]),
    toggleSpotify() {
      this.showSpotify = !this.showSpotify;
    },
    async defaultPlaylist() {
      const accessToken = this.getAccessToken();
      var playlist = "37i9dQZF1DWXRqgorJj26U"; // Rock classics
      
      /* if (accessToken) {
        fetch(`https://api.spotify.com/v1/playlists/${playlist}`, {
            method: 'GET',
            headers: {
              "Authorization": "Bearer " + this.accessToken,
              "Accept": "application/json",
              "Content-Type": "application/json"
            }
          })
          .then(res => res.json())
          .then(data => console.log(data));
        this.loading = false;
      } */
    },
  }
}
</script>

<template>
  <div class="main-wrapper" v-show="!this.$store.state.loading">
    <div class="main">
      <header class="nav">
        <h1 class="logo">Visual Fretboard</h1>
        <button @click="toggleSpotify()" class="spotify-button">
          <span class="spotify-span">Buscador de tempo y escalas</span>
          <svg class="spotify-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
            <path
              d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
          </svg>
        </button>
      </header>
      <Fretboard />
      <Metronome />
    </div>
    <Spotify v-if="this.showSpotify" :tracks=tracks />
  </div>
  <div class="loading" v-show="this.$store.state.loading">
    <svg aria-hidden="true" width="90" height="90" focusable="false" data-prefix="fas" data-icon="guitar"
      class="svg-inline--fa fa-guitar fa-w-16 guitar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="currentColor"
        d="M502.63 39L473 9.37a32 32 0 0 0-45.26 0L381.46 55.7a35.14 35.14 0 0 0-8.53 13.79L360.77 106l-76.26 76.26c-12.16-8.76-25.5-15.74-40.1-19.14-33.45-7.78-67-.88-89.88 22a82.45 82.45 0 0 0-20.24 33.47c-6 18.56-23.21 32.69-42.15 34.46-23.7 2.27-45.73 11.45-62.61 28.44C-16.11 327-7.9 409 47.58 464.45S185 528 230.56 482.52c17-16.88 26.16-38.9 28.45-62.71 1.76-18.85 15.89-36.13 34.43-42.14a82.6 82.6 0 0 0 33.48-20.25c22.87-22.88 29.74-56.36 22-89.75-3.39-14.64-10.37-28-19.16-40.2L406 151.23l36.48-12.16a35.14 35.14 0 0 0 13.79-8.53l46.33-46.32a32 32 0 0 0 .03-45.22zM208 352a48 48 0 1 1 48-48 48 48 0 0 1-48 48z">
      </path>
    </svg>
  </div>
</template>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

.main {
  height: 100%;
  width: 100%;
}

.loading {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.guitar {
  widows: 40px;
  color: var(--light-color);
  margin: auto;
  align-self: center;
  justify-self: center;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
}

.spotify-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: var(--grey-color);
  color: var(--light-color);
  font-size: 0;
  border: none;
  cursor: pointer;
}

.spotify-button .spotify-span {
  max-width: 9rem;
  font-size: 0.75rem;
  text-align: center;
  font-weight: 900;
}

.spotify-icon {
  height: 1.75rem;
  width: 1.75rem;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
