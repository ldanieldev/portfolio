import type { IconType } from 'react-icons/lib'
import { HexColor } from '../types/HexColor'

type skill = {
  name: string
  icon: IconType
  color: HexColor
}

export default interface Project {
  slug: string
  title: string
  categories: string[]
  summary: string
  description: string
  projectDetails: string[]
  featureImg: string
  imageList: string[]
  demoUrl?: string
  liveUrl?: string
  codeUrl?: string
  frameworks?: skill[]
  languages?: skill[]
  tools?: skill[]
}
