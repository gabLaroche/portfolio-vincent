export default {
    title: 'Social Media Link',
    name: 'socialMediaLink',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Icon Name',
            name: 'iconName',
            type: 'string',
            description: 'Icons must be from https://remixicon.com/ ex. ri-twitter-line'
        },
        {
            title: 'Link',
            name: 'link',
            type: 'url'
        }
    ]
}
