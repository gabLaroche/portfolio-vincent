export default {
    title: 'Project',
    name: 'project',
    type: 'document',
    fields: [
        {
            title: 'Images',
            name: 'images',
            type: 'array',
            of: [{
                type: 'image'
            }],
            validation: Rule => [
                Rule.required().error('You must add at least one project image')
            ]
        },
        {
            title: 'Categories',
            name: 'categories',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{type: 'category'}]
            }],
            validation: Rule => [
                Rule.required().error('You must add at least one category')
            ]
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Link',
            name: 'link',
            type: 'url'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        }
    ]
}
