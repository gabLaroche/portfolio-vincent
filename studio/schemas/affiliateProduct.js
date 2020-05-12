export default {
    title: 'Affiliate Product',
    name: 'affiliateProduct',
    type: 'document',
    fields: [
        {
            title: 'Product Name',
            name: 'productName',
            type: 'string'
        },
        {
            title: 'Product HTML',
            name: 'productHtml',
            type: 'code',
            options: {
                language: 'html'
            }
        }
    ]
}
