// ./schemas/feedbackType.js

import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const feedbackType = defineType({
  name: 'feedback',
  type: 'document',
  title: 'Feedback',
  liveEdit: true,
  fields: [
    defineField(
      {
        title: 'Product',
        name: 'Product',
        type: 'array',
        of: [
          {
            type: 'reference',
            weak: true,
            to: [
              {type: 'service'},
              {type: 'workshop'}
            ],
            description: 'Which product is the feedback for'
          }
        ]
      }
    ),
    defineField({
      title: 'Text', 
      name: 'text',
      type: 'string',
    })
    ],
  icon: DocumentTextIcon,  
  preview: {
    select: {
      text: 'text',
    },
    prepare({text}) {
      return {
        title: text.split(' ').slice(0, 8).join(' '),
        media: DocumentTextIcon,
      }
    },
  },
})
