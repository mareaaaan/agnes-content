// ./schemas/contentType.js

import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const contentType = defineType({
  name: 'content',
  type: 'object',
  title: 'Content',
  fields: [
    defineField({
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          defineArrayMember({
            name: 'textWithIllustration',
            type: 'textWithIllustration',
            title: 'Text with Illustration'
          }),
          defineArrayMember({
            name: 'textBlock',
            type: 'textBlock',
            title: 'Text'
          }),
          defineArrayMember({
            name: 'videoList',
            type: 'videoList',
            title: 'Video List'
          }),
          defineArrayMember({
            name: 'floatingText',
            type: 'floatingText',
            title: 'Floating Text'
          }),
          defineArrayMember({
            name: 'feedbackList',
            type: 'feedbackList',
            title: 'Feedback List'
          }),
          defineArrayMember({
            name: 'qAndA',
            type: 'qAndA',
            title: 'Questions and Answers'
          }),
        ],
        validation: rule => rule.custom(content => {
          if (!content) {
            return 'Content is missing'
          }
  
          if (content.length < 1) {
            return 'Content must have at least one item'
          }
  
          if (content[0]._type != 'textWithIllustration') {
            return 'First item must Text with Illustration'
          }
  
          return true
        })
      }),
],
  icon: DocumentTextIcon,  
  preview: {
    select: {
      text: 'text',
    },
    prepare({text}) {
      return {
        title: text.split(' ').slice(0, 8).join(' '),
        media: DocumentTextIcon,
      }
    },
  },
})
