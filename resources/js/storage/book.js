const book = {
    state: {
        bookId: null,
        activeId: [],
        books: [],
        currPage: null,
        book: []
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
        },
        SET_BOOK(state, book) {
            state.book = book
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
        },
        setBook({ commit }, { book }) {
            commit('SET_BOOK', book)
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
        },
        getBook: state => {
          return state.book
        }
    }
}
