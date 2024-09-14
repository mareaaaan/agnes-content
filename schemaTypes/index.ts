// ./schemas/index.ts

import {heroType} from './heroType'
import {pageType} from './pageType'
import {textWithIllustrationType} from './textWithIllustrationType'
import {videosType} from './videosType'
import {floatingTextType} from './floatingTextType'
import {feedbackType} from './feedbackType'
import {serviceType} from './serviceType'
import { workshopType } from './workshopType'
import { workshopHierarchyType } from './workshopHierarchy'
import { serviceHierarchyType } from './serviceHierarchy'


export const schemaTypes = [
  pageType,
  heroType,
  textWithIllustrationType,
  videosType,
  floatingTextType,
  feedbackType,
  serviceType,
  workshopType,
  workshopHierarchyType,
  serviceHierarchyType
]
