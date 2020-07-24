const genre = {
    state: {
        genres: [],
        activeGenre: []
    },
    mutations: {
        SET_GENRES(state, genres) {
            state.genres = genres
        },
        SET_ACTIVE_GENRE(state, activeGenre) {
            state.activeGenre = activeGenre
        }
    },
    actions: {
        setGenres({ commit }, { genres }) {
            commit('SET_GENRES', genres)
        },
        setActiveGenre({ commit }, { activeGenre }) {
            commit('SET_ACTIVE_GENRE', activeGenre)
        }
    },
    getters: {
        getGenres: state => {
          return state.genres
        },
        getActiveGenre: state => {
          return state.activeGenre
        }
    }
}
