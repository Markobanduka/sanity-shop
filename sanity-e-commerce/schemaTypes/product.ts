export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product images',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of Product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product slug',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
  ],
}