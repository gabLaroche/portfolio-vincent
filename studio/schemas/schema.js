import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import project from "./project";
import category from "./category";
import about from "./about";
import affiliateProduct from "./affiliateProduct";

export default createSchema({
  name: 'mySchema',
  types: schemaTypes.concat([
      about,
      affiliateProduct,
      category,
      project
  ])
})
