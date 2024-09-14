// ./schemas/textWithIllustration.js

import {ImageIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import { getImageDimensions } from '@sanity/asset-utils'

export const textWithIllustrationType = defineType({
  name: 'textWithIllustration',
  type: 'object',
  title: 'Text with Illustration',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }), 
    defineField({
      title: 'BlockContent', 
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
  icon: ImageIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: 'Text with Illustration',
        media: image || ImageIcon,
      }
    },
  },
})
