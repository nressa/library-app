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
                        <div class="form-group">
                            <label for="title" class="font-weight-bold">Author</label>
                            <input name="title" id="title" class="form-control" type="text" />
                        </div>
                        <div class="form-group">
                            <label for="date_published" class="font-weight-bold">Date Published</label>
                            <input name="date_published" id="date_published" class="form-control" type="date" />
                        </div>
                        <div class="form-group">
                            <label for="genres" class="font-weight-bold">Genre</label>
                            <select name="genres" id="genres" class="form-control" multiple>
                                <option disabled selected>--Select Options--</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="description" class="font-weight-bold">Description</label>
                            <textarea name="description" id="description" class="form-control" rows="5"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary btn-md">Save</button>
                    </form>
                </div>
            </div>
        </div>
    `
})
