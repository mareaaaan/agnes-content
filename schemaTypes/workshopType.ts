// ./schemas/workshopType.js

import {DocumentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const workshopType = defineType({
  name: 'workshop',
  type: 'document',
  title: 'Workshop',
  liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
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
        name: 'image',
        type: 'image',
        options: {hotspot: true},
        fields: [
          defineField({
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
          }),
        ],
    }),
    defineField({
      title: 'Date',
      name: 'date',
      type: 'datetime'
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
      title: 'Description', 
      name: 'description',
      type: 'array', 
      of: [{type: 'block'}]
    }),
    defineField({
      title: 'Content', 
      name: 'content',
      type: 'array', 
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        }
      ]
    })
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
