// ./schemas/videosType.js

import {DocumentVideoIcon} from '@sanity/icons'
import {defineField, defineType, defineArrayMember} from 'sanity'

export const videosType = defineType({
  name: 'videos',
  type: 'object',
  fields: [
    defineField({
      name: 'videoLinks',
      type: 'array',
      title: 'Videos',
      of: [
        defineArrayMember({
          title: 'Video',
          name: 'video',
          type: 'object',
          fields: [
            {
              name: 'videoLabel',
              type: 'string',
              title: 'Label',
            },
            {
              name: 'videourl',
              type: 'string',
              title: 'URL',
            },
          ]
        })
      ]
    })
  ],
  icon: DocumentVideoIcon,
  preview: {
    select: {
      title: 'videoLabel',
    },
    prepare() {
      return {
        title: 'Videos',
        media: DocumentVideoIcon,
      }
    },
  },
})
