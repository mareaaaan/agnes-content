// ./schemas/textBlock.js

import {TextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const textBlockType = defineType({
  name: 'textBlock',
  type: 'object',
  title: 'Text',
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
  ],
  icon: TextIcon,
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: 'Text'
      }
    },
  },
})
