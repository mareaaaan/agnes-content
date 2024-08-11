// ./schemas/serviceType.js

import {DocumentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import { getImageDimensions } from '@sanity/asset-utils'
 
export const serviceType = defineType({
  name: 'service',
  type: 'document',
  title: 'Service',
  liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
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
      title: 'Description', 
      name: 'description',
      type: 'array', 
      of: [{type: 'block'}]
    }), 
    defineField({
      title: 'Content', 
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
      validation: (rule) =>
        rule.custom((value) => {
          if (!value) {
              return true
          }
                  
          const {width, height} = getImageDimensions(value.asset._ref)
      
          if (height <= width ) {
              return 'Image must be in portrait mode'
          }
      
          return true
      }),
    }),
  ],
  icon: DocumentIcon,
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title,
        media: DocumentIcon,
      }
    },
  },
})
