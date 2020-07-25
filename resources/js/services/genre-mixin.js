const GenreMixin = {
    methods:{
        fetchGenres(){
            var app = this
            axios.get('/api/genres')
            .then(response => {
                app.$store.dispatch("setGenres", { genres: response.data })
            })
            .catch(err => {
                console.log(err)
            });
        },
        addBookGenre(data) {
            var app = this
            axios.post('/api/books/add/genre', data)
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            });
        }
    }
}