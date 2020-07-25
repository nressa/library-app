Vue.component('show-book-component', {
    template:
    `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-sm-10 col-12">
                    <div class="card shadow rounded">
                        <div class="card-header bg-dark text-white">
                            <h3 class="d-inline"><i class="fa fa-thumb-tack"></i>  Title:</h3>
                            <h1 class="d-inline font-weight-bold">{{ book.title }}</h1>

                            <button type="button" class="btn btn-danger float-right rounded-circle" title="Remove from collection" @click="remove">
                            <i class="fa fa-trash fa-lg"></i>
                            </button>
                        </div>
                        <div class="card-body">
                            <p>Date Created: <span class="font-weight-bold">{{  book.date_created }}</span></p>
                            <p>Date Updated: <span class="font-weight-bold">{{  book.date_updated }}</span></p>
                
                            <h3 class="mt-4"><i class="fa fa-calendar"></i> Date Published:</h3>
                            <p>{{ book.date_published }}</p>

                            <h3 class="mt-4"><i class="fa fa-users"></i> Authors:</h3>
                            <p v-for="author in book.authors">{{ author.name }}</p>

                            <h3 class="mt-4"><i class="fa fa-tags"></i> Genres:</h3>
                            <div v-for="genre in genres">
                                <p v-for="gen in genre" class="pt-0 pb-0 mt-0 mb-0">{{ gen.name }}</p>
                            </div>

                            <h3 class="mt-4"><i class="fa fa-info-circle"></i> Description:</h3>
                            <p class="text-justified">{{ book.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: ['userId', 'userEmail'],
    data() {
        return {
            title: null,
            authors: [],
            date_published: null,
            selected_genres: [],
            description: null,
            data: []
        }
    },
    mixins: [GenreMixin, BookMixin],
    mounted() {
        this.fetchGenres()
        this.showBook()
    },
    methods: {
        remove(){

            if(confirm("Do you want to remove " + this.book.title + "from your collection?")) {
                this.removeBook()
            }
        }
    },
    computed: {
        book() {
            return this.$store.getters.getBook
        },
        genres() {
            return this.$store.getters.getActiveGenre
        },
    }

})
