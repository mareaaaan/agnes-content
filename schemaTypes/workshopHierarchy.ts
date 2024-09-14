// ./schemas/workshopHierarchyType.js

import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const workshopHierarchyType = defineType({
  name: 'workshopHierarchy',
  type: 'document',
  title: 'Workshop Hierarchy',
  liveEdit: true,
  fields: [
    defineField({
      name: 'hierarchy',
      type: 'array',
      title: 'Hierarchy',
      of: [
        defineArrayMember({
          name: 'workshop',
          type: 'reference',
          weak: true,
          to: [
            {type: 'workshop'}
          ],
        })
      ]
    })
    ],
  icon: DocumentIcon,
  preview: {
    prepare() {
      return {
        title: 'Workshop Hierarchy',
        media: DocumentIcon,
      }
    },
  },
})
