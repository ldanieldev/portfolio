import { Projects } from '@/app/data'
import ProjectGrid from '@/components/projectGrid'
import { FaSearch } from 'react-icons/fa'

export default function NotFound() {
  const projectList = [Projects[0], Projects[1], Projects[2]]

  return (
    <div className="container px-6 py-10 mx-auto">
      <FaSearch className="text-primary mx-auto mb-6" size={75} />
      <div>
        <h1 className="text-4xl font-bold text-center">
          Oops, Unable to Locate That Project
        </h1>

        <h3 className="text-2xl font-bold text-center py-6">
          Check out one of these awesome projects instead
        </h3>
      </div>

      <ProjectGrid projects={projectList} />
    </div>
  )
}
