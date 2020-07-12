Vue.component('list-book-component', {
    template:
    `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-sm-10 col-12">
                    <div class="card shadow rounded">
                        <div class="card-body">
                            <h3 class="text-center pt-5 pb-2 font-weight-bold"><i class="fa fa-files"></i> List <span class="badge badge-success">{{ books.total }}</span> </h3>
                            <hr class="pb-3"/>
                            <div class="table-responsive">
                                <div class="container-fluid">
                                    <div class="bg-light">
                                        <div class="card border-0 mb-2">
                                            <div class="row p-2">
                                                <div class="col-md-8 col-sm-8 col-9 h5">Title</div>
                                                <div class="col-md-4 col-sm-4 col-3 h5">Date Posted</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-for="(book, i) in books.data" :index="i">
                                        <div class="card mb-2 border-secondary">
                                            <div class="row p-2">
                                                <div class="col-md-8 col-sm-8 col-9">{{ book.title }}</div>
                                                <div class="col-md-4 col-sm-4 col-3">{{ book.created_at }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <button type="btn" @click="paginatePrev()" class="btn btn-dark"><<</button>
                                            <button type="btn" @click="paginateNext" class="float-right btn btn-dark">>></button>
                                        </div>
                                    </div>
                                </div>
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
        this.showBooks('/api/books')
    },
    methods: {
        paginatePrev(){
            if(this.books.prev_page_url){
                this.showBooks(this.books.prev_page_url)
            }
        },
        paginateNext(){
            if(this.books.next_page_url){
                this.showBooks(this.books.next_page_url)
            }
        }
    },
    computed: {
      filterGenre() {
        return this.$store.getters.getGenres
      },
      books() {
        return this.$store.getters.getBooks
      },
      currPage() {
        return this.$store.getters.getCurrentPage
      },
    }

})
