import { IconType } from 'react-icons/lib'
import { HexColor } from '../types/HexColor'

export default interface SkillList {
  [key: string]: {
    title: string
    skills: {
      [skill: string]: {
        name: string
        icon: IconType
        color: HexColor
      }
    }
  }
}
