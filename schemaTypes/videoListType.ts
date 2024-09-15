// ./schemas/videoListType.js

import {DocumentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
 
export const videoListType = defineType({
  name: 'videoList',
  type: 'object',
  title: 'Video List',
  fields: [
    defineField({
      name: 'Video',
      type: 'array',
      of: [
        {
          type: 'reference',
          weak: true,
          to: [
            {type: 'video'}
          ],
          description: 'Selected video'
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
