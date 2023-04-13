import { Projects } from '@/app/data'
import Project from '@/app/interfaces/Project'
import { FaSearch } from 'react-icons/fa'
import ProjectListItem from '../ProjectListItem'

export default function NotFound() {
  const projectList: Project[] = [Projects[0], Projects[1], Projects[2]]

  return (
    <div className="p-12 h-full w-full">
      <FaSearch className="text-primary mx-auto mb-6" size={75} />
      <div>
        <h1 className="text-4xl font-bold text-center">
          Oops, Unable to Locate That Project
        </h1>

        <h3 className="text-2xl font-bold text-center py-6">
          View more projects below
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        {projectList.map((project, idx) => (
          <ProjectListItem
            key={idx}
            slug={project.slug}
            title={project.title}
            summary={project.summary}
          />
        ))}
      </div>
    </div>
  )
}
