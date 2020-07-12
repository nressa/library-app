Vue.component('book-row-component', {
    template:
    `
        <div class="row">
        </div>
    `,
    props: ['book'],
    mixins: [GenreMixin, BookMixin],
    methods: {
    },
})
