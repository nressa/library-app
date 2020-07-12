Vue.component('list-book-component', {
    template:
    `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-sm-10 col-12">
                    <div class="card shadow rounded">
                        <div class="card-body">
                            <h3 class="text-center pt-5 pb-2 font-weight-bold"><i class="fas fa-book"></i> List</h3>
                            <div class="table-responsive">
                                <table class="table border">
                                    <thead class="bg-light">
                                        <tr>
                                            <th width="75%">Title</th>
                                            <th>Date Posted</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(book, i) in books" :index="i">
                                            <td>{{ book.title }}</td>
                                            <td>{{ book.created_at }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: ['userId', 'userEmail'],
    mixins: [GenreMixin, BookMixin],
    mounted() {
        this.showBooks()
    },
    methods: {
    },
    computed: {
      filterGenre() {
        return this.$store.getters.getGenres
      },
      books() {
        return this.$store.getters.getBooks
      },
    }

})
