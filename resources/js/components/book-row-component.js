Vue.component('book-row-component', {
    template:
    `
	    <div class="card mb-2 border-secondary" @click="openBook(book.id)">
	        <div class="row p-2">
	            <div class="col-md-8 col-sm-7 col-12 font-weight-bold">{{ book.title }}</div>
	            <div class="col-md-4 col-sm-5 col-12"><i class="fa fa-clock-o"></i> {{ book.date_created }}</div>
	            <div class="col-md-12">
	                <p class="m-0 p-0"><i class="fa fa-users"></i> Authors:</p>
	                <div v-for="author in book.authors">
	                    <p class="m-0 p-0">{{ author.name }}</p>
	                </div>
	            </div>
	        </div>
	    </div>
    `,
    props: ['book'],
    mixins: [GenreMixin, BookMixin],
    methods: {
    	openBook(id){
    		app.$store.dispatch("setActiveId", { activeId: id })
    		window.location.href ="/books/" + id
    	}
    }
})
