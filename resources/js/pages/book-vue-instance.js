Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    genre,
    book
  },
})

const app = new Vue({
	el: '#app',
    store: store,
	data() {
		return {}
	}
})

Vue.config.devtools = true
