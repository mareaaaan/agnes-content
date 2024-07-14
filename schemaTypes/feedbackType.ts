// ./schemas/feedbackType.js

import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType, defineArrayMember} from 'sanity'

export const feedbackType = defineType({
  name: 'feedback',
  type: 'object',
  title: 'Feedback',
  fields: [
    defineField({
      name: 'feedbackItems',
      type: 'array',
      title: 'Feedback Items',
      of: [
        defineArrayMember({
          title: 'Feedback Item',
          name: 'feedbackItem',
          type: 'object',
          fields: [
            {
              title: 'Service',
              name: 'service',
              type: 'string',
            },
            {
              title: 'Content', 
              name: 'content',
              type: 'array', 
              of: [{type: 'block'}]
            }
          ]
        })
      ]
    }),
  ],
  icon: DocumentTextIcon,  
  preview: {
    prepare() {
      return {
        title: 'Feedback'
      }
    },
  },
})
