// ./schemas/serviceType.js

import {DocumentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
 
export const serviceType = defineType({
  name: 'service',
  type: 'document',
  title: 'Service',
  liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    }),
    defineField({
      title: 'Date',
      name: 'date',
      type: 'string'
    }),
    defineField({
      title: 'Duration',
      name: 'duration',
      type: 'string'
    }),
    defineField({
      title: 'Location',
      name: 'location',
      type: 'object',
      fields: [
        {
          title: 'Location Address',
          name: 'locationAddress',
          type: 'string',
        },
        {
          title: 'Location URL', 
          name: 'locationUrl',
          type: 'url'
        }
      ]
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'content'
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
