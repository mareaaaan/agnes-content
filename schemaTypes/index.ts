// ./schemas/index.ts

import { contentType } from './contentType'
import { floatingTextType } from './floatingTextType'
import {pageType} from './pageType'
import { textWithIllustrationType } from './textWithIllustrationType'
import { videoListType } from './videoListType'
import { feedbackType } from './feedbackType'
import { workshopType } from './workshopType'
import { serviceType } from './serviceType'
import { feedbackListType } from './feedbackListType'
import { videoType } from './videoType'
import { textBlockType } from './textBlockType'
import { qAndAType } from './qAndAType'


export const schemaTypes = [
  pageType,
  contentType,
  textWithIllustrationType,
  videoListType,
  videoType,
  floatingTextType,
  feedbackListType,
  feedbackType,
  workshopType,
  serviceType,
  textBlockType,
  qAndAType
]
