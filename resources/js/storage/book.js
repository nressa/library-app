const book = {
    state: {
        bookId: null
    },
    mutations: {
        SET_BOOK_ID(state, bookId) {
            state.bookId = bookId
        }
    },
    actions: {
        setBookId({ commit }, { bookId }) {
            commit('SET_BOOK_ID', bookId)
        }
    },
    getters: {
        getbookId: state => {
          return state.bookId
        }
    }
}
