// ./schemas/textWithIllustration.js

import {ImageIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import { getImageDimensions } from '@sanity/asset-utils'

export const textWithIllustrationType = defineType({
  name: 'textWithIllustration',
  type: 'object',
  title: 'Text with Image',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      title: 'Text', 
      name: 'text',
      type: 'array', 
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
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
          const ref = value.asset?._ref

          if (!ref) {
            return 'Image is missing'
          }

          const {width, height} = getImageDimensions(ref)
      
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
