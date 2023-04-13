'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Projects } from '../data'
import CategorySelector from './CategorySelector'
import ProjectListItem from './ProjectListItem'

export default function ProjectList() {
  const [projectList, setProjectList] = useState(Projects)
  const [activeCategory, setActiveCategory] = useState('all')

  const onCategoryClick = (category: string) => {
    setActiveCategory(category)

    if (category === 'all') {
      setProjectList(Projects)
      return
    }

    setProjectList(
      Projects.filter((project) => project.categories.includes(category))
    )
  }

  return (
    <>
      <CategorySelector
        activeCategory={activeCategory}
        onClickHandler={onCategoryClick}
      />

      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence initial={false}>
          {projectList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{
                duration: 0.75,
              }}
            >
              <ProjectListItem
                key={idx}
                slug={project.slug}
                title={project.title}
                summary={project.summary}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}
