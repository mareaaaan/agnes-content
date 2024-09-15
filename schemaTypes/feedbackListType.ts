// ./schemas/feedbackListType.js

import {DocumentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
 
export const feedbackListType = defineType({
  name: 'feedbackList',
  type: 'object',
  title: 'Feedback List',
  fields: [
    defineField({
      name: 'Feedback',
      type: 'array',
      of: [
        {
          type: 'reference',
          weak: true,
          to: [
            {type: 'feedback'}
          ],
          description: 'Selected feedback'
        }
      ] 
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
