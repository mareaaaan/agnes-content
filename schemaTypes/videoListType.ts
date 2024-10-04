// ./schemas/videoListType.js

import {DocumentVideoIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
 
export const videoListType = defineType({
  name: 'videoList',
  type: 'object',
  title: 'Video List',
  fields: [
    defineField({
      title: 'Heading',
      name: 'heading',
      type: 'string',
    }),
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
  icon: DocumentVideoIcon,
  preview: {
    prepare() {
      return {
        title: 'Video List'
      }
    },
  },
})
