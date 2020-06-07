export default {
    widgets: [
        {
            name: 'project-info',
            options: {
                data: [
                    {
                        title: 'GitHub repo',
                        value: 'https://github.com/gabLaroche/portfolio-vincent',
                        category: 'Code'
                    },
                    {title: 'Website', value: 'https://vincegraph.com', category: 'apps'}
                ]
            }
        },
        {
            name: 'project-users'
        },
        {
            name: 'document-list',
            options: {
                title: 'Last edited documents',
                order: '_updatedAt desc',
            },
            layout: {
                width: 'medium'
            }
        },
        {
            name: 'structure-menu'
        },
    ]
}