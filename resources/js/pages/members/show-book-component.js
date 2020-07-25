Vue.component('show-book-component', {
    template:
    `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-sm-10 col-12">
                    <div class="card shadow rounded mt-5 mb-5">
                        <div class="card-header bg-dark text-white">
                            <h3 class="d-inline"><i class="fa fa-thumb-tack"></i>  Title:</h3>
                            <h1 class="d-inline font-weight-bold">{{ book.title }}</h1>
                            <div v-if="userId == book.fk_user" class="float-right">
                                <button type="button" class="btn btn-danger rounded-0" title="Remove from collection" @click="remove">
                                <i class="fa fa-trash fa-lg"></i>
                                </button> 
                                <button type="button" class="btn btn-primary rounded-0" title="Update book"  data-toggle="modal" data-target="#exampleModal">
                                <i class="fa fa-edit fa-lg"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <p>Date Created: <span class="font-weight-bold">{{  book.date_created }}</span></p>
                            <p>Date Updated: <span class="font-weight-bold">{{  book.date_updated }}</span></p>
                
                            <h3 class="mt-4"><i class="fa fa-calendar"></i> Date Published:</h3>
                            <p>{{ book.date_published }}</p>

                            <h3 class="mt-4"><i class="fa fa-users"></i> Authors:</h3>
                            <div v-for="author in book.authors">
                                <p class="mt-2">
                                    <button id="" class="btn btn-danger btn-sm">
                                    <i class="fa fa-times"></i></button>
                                    {{ author.name }}
                                </p>
                            </div>
                            <div class="row m-4">
                                <input type="text" class="form-control col-sm-8 col-10 rounded-0" />
                                <button type="button" class="btn btn-primary rounded-0"><i class="fa fa-plus-circle"></i> <span class="d-md-inline d-sm-none d-none">ADD NEW</span></button>
                            </div>

                            <h3 class="mt-4"><i class="fa fa-tags"></i> Genres:</h3>
                            <div v-for="genre in activeGenres">
                                <p v-for="gen in genre" class="mt-2">
                                    <button id="" class="btn btn-danger btn-sm">
                                        <i class="fa fa-times"></i>
                                    </button>
                                    {{ gen.name }}
                                </p>
                            </div>
                            <div class="row m-4">
                                <input type="text" class="form-control col-sm-8 col-10 rounded-0" />
                                <button type="button" class="btn btn-primary rounded-0"><i class="fa fa-plus-circle"></i> <span class="d-md-inline d-sm-none d-none">ADD NEW</span></button>
                            </div>

                            <h3 class="mt-4"><i class="fa fa-info-circle"></i> Description:</h3>
                            <p class="text-justified">{{ book.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{{ book.title }}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="title" class="ml-1 font-weight-bold">Title</label>
                                <input type="text" class="form-control" id="title" :value="book.title">
                            </div>
                            <div class="form-group">
                                <label for="title" class="ml-1 font-weight-bold">Date Published</label>
                                <input type="date" class="form-control" id="title" :value="book.date_published">
                            </div>
                            <div class="form-group">
                                <label for="title" class="ml-1 font-weight-bold">Description</label>
                                <textarea class="form-control" id="title" :value="book.description" rows="5"></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
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
        activeGenres() {
            return this.$store.getters.getActiveGenre
        }
    }

})
