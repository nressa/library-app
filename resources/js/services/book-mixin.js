const BookMixin = {
    data() {
        return {
            url: '/api/books'
        }
    },
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
                app.$store.dispatch("setActiveId", { activeId: response.data })
                window.location.href ="/books/" + title + "/" + response.data
            })
            .catch(err => {
                console.log(err)
            });
        },
        showBook() {
            var url = window.location.pathname
            var bookId = url.substring(url.lastIndexOf('/') + 1)

            axios({
                method: 'get',
                url: this.url + '/show/' + bookId,
                })
            .then(response => {
                    app.$store.dispatch("setBook", { book: response.data.book })
                    app.$store.dispatch("setActiveGenre", { activeGenre: response.data.genres })
               
            })
            .catch(err => {
                
                if(err.response.status == 404){
                    location.href = "/books"
                }
            });

        },
        removeBook() {
            var url = window.location.pathname
            var bookId = url.substring(url.lastIndexOf('/') + 1)

            axios({
                method: 'post',
                url: this.url + '/remove/' + bookId,
                })
            .then(response => {
                this.showBook()
            })
            .catch(err => {
                console.log(err)
            });

        },
        showBooks() {
            axios({
                method: 'get',
                url: this.url,
                })
            .then(response => {
                app.$store.dispatch("setBooks", { books: response.data.books })
                app.$store.dispatch("setCurrentPage", { books: response.data.books.current_page })

            })
            .catch(err => {
                console.log(err)
            });
        },
        addBookGenre(data) {
            var app = this
            axios.post( this.url + '/add/genre', data)
            .then(response => {
                console.log('added')
                this.showBook()
            })
            .catch(err => {
                console.log(err)
            });
        },
        removeBookGenre(data) {
            var app = this
            axios.post( this.url + '/remove/genre', data)
            .then(response => {
                this.showBook()
            })
            .catch(err => {
                console.log(err)
            });
        }
    }
}