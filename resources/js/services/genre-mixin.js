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
        }
    }
}