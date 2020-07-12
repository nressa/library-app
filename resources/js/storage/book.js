const book = {
    state: {
        activeId: [],
        books: []
    },
    mutations: {
        SET_ACTIVE_ID(state, activeId) {
            state.activeId = activeId
        },
        SET_BOOKS(state, books) {
            state.books = books
        }
    },
    actions: {
        setActiveId({ commit }, { activeId }) {
            commit('SET_ACTIVE_ID', activeId)
        },
        setBooks({ commit }, { books }) {
            commit('SET_BOOKS', books)
        }
    },
    getters: {
        getActiveId: state => {
          return state.activeId
        },
        getBooks: state => {
          return state.books
        }
    }
}
