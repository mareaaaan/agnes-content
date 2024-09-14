// ./schemas/serviceHierarchyType.js

import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const serviceHierarchyType = defineType({
  name: 'serviceHierarchy',
  type: 'document',
  title: 'Service Hierarchy',
  liveEdit: true,
  fields: [
    defineField({
      name: 'hierarchy',
      type: 'array',
      title: 'Hierarchy',
      of: [
        defineArrayMember({
          name: 'service',
          type: 'reference',
          weak: true,
          to: [
            {type: 'service'}
          ],
        })
      ]
    })
    ],
  icon: DocumentIcon,
  preview: {
    prepare() {
      return {
        title: 'Service Hierarchy',
        media: DocumentIcon,
      }
    },
  },
})
