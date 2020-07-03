const genre = {
    state: {
        genres: []
    },
    mutations: {
        SET_GENRES(state, genres) {
            state.genres = genres
        }
    },
    actions: {
        setGenres({ commit }, { genres }) {
            commit('SET_GENRES', genres)
        }
    },
    getters: {
        getGenres: state => {
          return state.genres
        }
    }
}
