<template>
    <div class="spotify">
        <div class="spotify-search">
            <input v-model="input" class="spotify-search-input" placeholder="Search songs...">
            <button class="spotify-search-btn" @click="searchTrack()">
                <i class="fas fa-search"></i>
            </button>
        </div>
        <div class="tracks">
            <div v-for="t in tracks" class="track" :key="t.id" @click="getTrack(t.id)">
                <img class="track-img" :src="t.album.images[2].url" alt="">
                <div class="track-data">
                    <p class="track-name">{{ t.name }}</p>
                    <p class="track-artist">{{ t.artists[0].name }} - {{ t.album.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'Spotify',
    props: {
        tracks: Array,
    },
    data() {
        return {
            expiryTime: null,
            input: "",
            track: [],
        };
    },
    mounted() {
        console.log(this.tracks)
    },
    methods: {
        ...mapActions(["getAccessToken"]),
        async searchTrack() {
            if(this.input.length > 0) {
                const accessToken = await this.getAccessToken();
                await fetch(`https://api.spotify.com/v1/search?q=${this.input}&type=track&limit=50`, {
                    headers: {
                        "Authorization": "Bearer " + accessToken,
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }})
                    .then(res => res.json())
                    .then(data => data.tracks.tracks.items);
                await axios.get(`/.netlify/functions/search-track?token=${this.accessToken.access_token}&input=${this.input.replaceAll(" ", "+")}`)
                    .then(res => {
                        this.tracks = res.data.tracks.tracks.items;
                    });
            }
        },
        /* async getTrack(id) {
            await this.getAccessToken();

            await axios.get(`/.netlify/functions/get-track?token=${this.accessToken.access_token}&id=${id}`)
                .then(res => {
                    this.track = res.data.track;
                    this.$store.commit('setTrack', res.data.track);
                });
        }, */
    }
}
</script>

<style>
.spotify {
    background-color: var(--grey-color);
    width: 18rem;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
}

@media only screen and (max-width:1150px) {
    .spotify {
        display: none;
    }
}

.spotify-search {
    padding: 1.5rem;
    display: flex;
    align-items: center;
    position: relative;
}

.spotify-search-input {
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    width: 100%;
    outline: none;
    font-family: Roboto;
    -webkit-box-shadow: 3px 3px 9px -3px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 3px 3px 9px -3px rgba(0, 0, 0, 0.2);
    box-shadow: 3px 3px 9px -3px rgba(0, 0, 0, 0.2);
}

.spotify-search-btn {
    position: absolute;
    right: 0;
    margin-right: 1.9rem;
    color: var(--grey-color);
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1rem;
    outline: none;
    margin-bottom: 1px;
}

.tracks {
    position: stricky;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-color: rgb(87, 87, 87) var(--grey-color);
    scrollbar-width: thin;
    max-height: calc(100vh - 5rem);
}

.track {
    height: 5rem;
    background-color: var(--grey-color);
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    color: #fff;
}

.track:hover {
    background-color: rgb(70, 68, 68);
}

.track-img {
    height: 100%;
    padding: 3px 6px;
}

.track-data {
    display: flex;
    flex-direction: column;
}

.track-name {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
}

.track-artist {
    font-size: 0.8rem;
    color: rgb(117, 117, 117);
}
</style>