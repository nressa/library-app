const GenreMixin = {
    methods:{
        fetchGenres(){
            axios.get('/api/genres')
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)});
            }
    }
}