// ./schemas/videoType.js

import {DocumentVideoIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const videoType = defineType({
  name: 'video',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
  ],
  icon: DocumentVideoIcon,
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title,
        media: DocumentVideoIcon,
      }
    },
  },
})
