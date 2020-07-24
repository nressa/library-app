const book = {
    state: {
        bookId: null,
        activeId: [],
        books: [],
        currPage: null
    },
    mutations: {
        SET_ACTIVE_ID(state, activeId) {
            state.activeId = activeId
        },
        SET_BOOKS(state, books) {
            state.books = books
        },
        SET_CURRENT_PAGE(state, currPage) {
            state.currPage = currPage
        }
    },
    actions: {
        setActiveId({ commit }, { activeId }) {
            commit('SET_ACTIVE_ID', activeId)
        },
        setBooks({ commit }, { books }) {
            commit('SET_BOOKS', books)
        },
        setCurrentPage({ commit }, { currPage }) {
            commit('SET_CURRENT_PAGE', currPage)
        }
    },
    getters: {
        getActiveId: state => {
          return state.activeId
        },
        getBooks: state => {
          return state.books
        },
        getCurrentPage: state => {
          return state.currPage
        }
    }
}
