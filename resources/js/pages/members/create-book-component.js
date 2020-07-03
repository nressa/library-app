Vue.component('create-book-component', {
    template:
    `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <h3 class="text-center pt-5 pb-2 font-weight-bold">Add To List</h3>
                    <hr class="pb-4"/>
                    <form method="post">
                        <div class="form-group">
                            <label for="title" class="font-weight-bold">Title</label>
                            <input name="title" id="title" class="form-control" type="text" />
                        </div>
                        <div class="form-group  form-row">
                            <label class="font-weight-bold col-md-12">Author</label>
                            <input name="author[]" class="form-control col-md-10" type="text" />
                            <div class="col-md-2">
                                <button class="btn btn-primary btn-md rounded-circle font-weight-bold" v-on:click="addAuthor">+</button>
                            </div>
                        </div>
                        <div id="groupAuthor" class="form-group form-group-author">
                        </div>
                        <div class="form-group">
                            <label for="date_published" class="font-weight-bold">Date Published</label>
                            <input name="date_published" id="date_published" class="form-control" type="date" />
                        </div>
                        <div class="form-group">
                            <label for="genres" class="font-weight-bold">Genre</label>
                            
                            <select name="genres" id="genres" class="form-control" multiple>
                                <option disabled selected>--Select Options--</option>
                                <option v-for="(option, i) in filterGenre" :index="i" :value="option.id">{{ option.name }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="description" class="font-weight-bold">Description</label>
                            <textarea name="description" id="description" class="form-control" rows="5"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary btn-md btn-block">Save</button>
                    </form>
                </div>
            </div>
        </div>
    `,
    mixins: [GenreMixin],
    mounted() {
        this.fetchGenres()
    },
    methods: {
        addAuthor(e) 
        {
            e.preventDefault()
            
            var new_row = document.createElement("input");
            new_row.setAttribute("class", "form-control mt-2");
            new_row.setAttribute("name", "author[]");

            var element = document.getElementById("groupAuthor");
            element.appendChild(new_row)
        }
    },
    computed: {
      filterGenre() {
        return this.$store.getters.getGenres
      },
    }

})
