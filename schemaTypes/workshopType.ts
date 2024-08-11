// ./schemas/workshopType.js

import {DocumentIcon} from '@sanity/icons'
import { getImageDimensions } from '@sanity/asset-utils'
import {defineArrayMember, defineField, defineType} from 'sanity'

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
        validation: (rule) =>
          rule.custom((value) => {
            if (!value) {
                return true
            }
                    
            const {width, height} = getImageDimensions(value.asset._ref)
        
            if (height <= width ) {
                return 'Image must be in portrait mode'
            }
        
            return true
        }),
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
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Text',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'textWithIllustration',
          type: 'textWithIllustration',
        }),
        defineArrayMember({
          name: 'floatingText',
          type: 'floatingText'
        }),
      ],
    }),  ],
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
