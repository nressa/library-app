Vue.component('create-book-component', {
    template:
    `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6 col-sm-8 col-12">
                    <div class="card shadow rounded">
                        <div class="card-body">
                            <h3 class="text-center pt-5 pb-2 font-weight-bold">Add To List</h3>
                            <hr class="pb-4"/>
                            <form method="post" @submit="submitForm">
                                <div class="form-group">
                                    <label for="title" class="font-weight-bold">Title</label>
                                    <input name="title" id="title" class="form-control" type="text" v-model="title" />
                                </div>
                                <div class="form-group  form-row">
                                    <label class="font-weight-bold col-md-12">Author</label>
                                    <input name="author" class="form-control col-md-10" type="text" />
                                    <div class="col-md-2">
                                        <button class="btn btn-primary btn-md rounded-circle font-weight-bold" v-on:click="addAuthor">+</button>
                                    </div>
                                </div>
                                <div id="groupAuthor" class="form-group form-group-author">
                                </div>
                                <div class="form-group">
                                    <label for="date_published" class="font-weight-bold">Date Published</label>
                                    <input v-model="date_published" id="date_published" class="form-control" type="date" />
                                </div>
                                <div class="form-group">
                                    <label for="genres" class="font-weight-bold">Genre</label>
                                    
                                    <select v-model="selected_genres" id="genres" class="form-control" multiple>
                                        <option disabled selected>--Select Options--</option>
                                        <option v-for="(option, i) in filterGenre" :index="i" :value="option.id">{{ option.name }}</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="description" class="font-weight-bold">Description</label>
                                    <textarea v-model="description" id="description" class="form-control" rows="5"></textarea>
                                </div>

                                <button type="submit" class="btn btn-primary btn-md btn-block">Save</button>
                            </form>
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
    },
    methods: {
        addAuthor(e) 
        {
            e.preventDefault()
            
            var new_row = document.createElement("input");
            new_row.setAttribute("class", "form-control mt-2");
            new_row.setAttribute("name", "author");

            var element = document.getElementById("groupAuthor");
            element.appendChild(new_row)
        },
        submitForm(e)
        {

            e.preventDefault()
            var inputfields = document.getElementsByName("author");
            var ar_inputflds = inputfields.length;
            for (var i = 0; i < ar_inputflds; i++) {
                this.authors.push(inputfields[i].value);
            }

            this.store(this.userId, 
                        this.userEmail, 
                        this.title,
                        this.authors,
                        this.date_published,
                        this.selected_genres,
                        this.description
                    )
        }
    },
    computed: {
      filterGenre() {
        return this.$store.getters.getGenres
      },
    }

})
