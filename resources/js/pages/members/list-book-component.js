Vue.component('list-book-component', {
    template:
    `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-sm-10 col-12">
                    <div class="card shadow rounded">
                        <div class="card-body">
                            <h3 class="text-center pt-5 pb-2 font-weight-bold"></i> List <small class="badge badge-success">{{ books.total }}</small> </h3>
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
                                        <book-row-component :book="book"></book-row-component>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2 col-sm-2 col-12">
                                            <button type="button" @click="paginatePrev()" class="btn btn-dark btn-block"><i class="fa fa-chevron-left"></i></button>
                                        </div>
                                        <div class="col-md-8 col-sm-8 col-12">
                                            <div v-for="pageNumber in books.last_page" class="d-inline">
                                                <button type="button" class="btn btn-md btn-dark d-inline rounded-0" @click="redirectByPage(pageNumber)">{{pageNumber}}</button>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-sm-2 col-12">
                                            <button type="button" @click="paginateNext" class="btn btn-dark btn-block"><i class="fa fa-chevron-right"></i></button>
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
        this.showBooks(this.url)
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
        },
        redirectByPage(pageNumber){
            this.showBooks(this.url+"?page="+pageNumber)
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
