export default {
    title: 'Affiliate Product',
    name: 'affiliateProduct',
    type: 'document',
    isLiveEdit: true,
    fields: [
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            title: 'Product Name',
            name: 'productName',
            type: 'string'
        },
        {
            title: 'Category',
            name: 'category',
            type: 'reference',
            to: [{type: 'affiliateProductCategory'}],
            validation: Rule => [
                Rule.required().error('You must add a category')
            ]
        },
        {
            title: 'Link',
            name: 'link',
            type: 'url',
            validation: Rule => [
                Rule.required().error('You must enter a url for the product')
            ]
        }
    ]
}
