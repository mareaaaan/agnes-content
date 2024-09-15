// ./schemas/pageType.ts

import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  liveEdit: true,
  title: 'Page',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    }),    
    defineField({
      name: 'content',
      type: 'content',
      title: 'Content',
    }),
    defineField({
      name: 'hierarchy',
      type: 'array',
      title: 'Product Hierarchy',
      of: [
        defineArrayMember({
          name: 'Product',
          type: 'reference',
          weak: true,
          to: [
            {type: 'workshop'},
            {type: 'service'}
          ],
        })
      ]
    })
  ],
  icon: DocumentIcon,
})
