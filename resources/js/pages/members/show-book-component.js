Vue.component('show-book-component', {
    template:
    `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-sm-10 col-12">
                    <div class="card shadow rounded">
                        <div class="card-body">
                            <h3 class="text-center pt-5 pb-2 font-weight-bold">
                            <i class="fa fa-file"></i> Title</h3>
                            <hr class="pb-4"/>
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
    },
    computed: {
      filterGenre() {
        return this.$store.getters.getGenres
      },
    }

})
