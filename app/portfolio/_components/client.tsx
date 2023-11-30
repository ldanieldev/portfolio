'use client'

import { projectCategories, Projects } from '@/app/data'
import CategorySelector from '@/components/CategorySelector'
import ProjectGrid from '@/components/projectGrid'
import { ProjectCategory } from '@/types'
import { useState } from 'react'

export default function PortfolioClient() {
  const [projectList, setProjectList] = useState(Projects)
  const [activeCategory, setActiveCategory] = useState('all')

  const onCategoryClick = ({ key }: ProjectCategory) => {
    setActiveCategory(key)

    if (key === 'all') {
      setProjectList(Projects)
      return
    }

    setProjectList(
      Projects.filter((project) => project.categories.includes(key))
    )
  }

  return (
    <>
      <CategorySelector
        activeKey={activeCategory}
        categories={projectCategories}
        onClickHandler={onCategoryClick}
      />

      <ProjectGrid projects={projectList} />
    </>
  )
}
