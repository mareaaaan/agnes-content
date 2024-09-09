// ./schemas/pageType.ts

import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  type: 'document',
  liveEdit: true,
  title: 'Page',
  fields: [
    defineField({name: 'title', type: 'string'}),
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
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
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
          name: 'videos',
          type: 'videos',
        }),
        defineArrayMember({
          name: 'feedback',
          type: 'object',
          fields: [
            {
              name: 'Title',
              type: 'string',
              title: 'Title',
            }
          ] 
        }),
        defineArrayMember({
          name: 'floatingText',
          type: 'floatingText'
        }),
      ],
    }),
  ],
  icon: DocumentIcon,
})
