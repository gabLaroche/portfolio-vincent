export default {
    title: 'About',
    name: 'about',
    type: 'document',
    fields: [
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        }
    ]
}
