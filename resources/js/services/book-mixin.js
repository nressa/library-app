const BookMixin = {
    methods:{
        store(userId, email, title, authors, date_published, selected_genres, description){
            var app = this
            var bodyFormData = new FormData();
            bodyFormData.set('userId', userId);
            bodyFormData.set('email', email);
            bodyFormData.set('title', title);
            bodyFormData.set('authors', authors);
            bodyFormData.set('date_published', date_published);
            bodyFormData.set('selected_genres', selected_genres);
            bodyFormData.set('description', description);

            axios({
                method: 'post',
                url: '/api/books/store',
                data: bodyFormData,
                })
            .then(response => {
                app.$store.dispatch("setBookId", { bookId: response.data })
                window.href="/books/" + response.data
            })
            .catch(err => {
                console.log(err)
            });
        },
        show(){

            axios({
                method: 'get',
                url: '/api/books/store',
                data: bodyFormData,
                })
            .then(response => {
                app.$store.dispatch("setBookId", { bookId: response.data })
                window.href="/books/" + response.data
            })
            .catch(err => {
                console.log(err)
            });
        }
    }
}