// ./schemas/floatingTextType.js

import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const floatingTextType = defineType({
  name: 'floatingText',
  type: 'object',
  title: 'Floating Text',
  fields: [
    defineField({
      title: 'Text', 
      name: 'text',
      type: 'array', 
      of: [{type: 'block'}]
    })
  ],
  icon: DocumentTextIcon,  
  preview: {
    prepare() {
      return {
        title: 'Floating Text'
      }
    },
  },
})
