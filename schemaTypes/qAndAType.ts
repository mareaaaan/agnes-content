// ./schemas/qAndAType.js

import {DocumentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
 
export const qAndAType = defineType({
  name: 'qAndA',
  type: 'object',
  title: 'Questions and Answers',
  fields: [
    defineField({
      title: 'Heading',
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              type: 'string',
              title: 'Question'
            }),
            defineField({
              title: 'Answer', 
              name: 'answer',
              type: 'array', 
              of: [{type: 'block'}]
            }),
          ],
        }
      ] 
    }),
  ],
  icon: DocumentIcon,
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title
      }
    },
  },
})
