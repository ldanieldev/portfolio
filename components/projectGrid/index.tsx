import ProjectListItem from './ProjectListItem'

type props = { projects: { slug: string; title: string; summary: string }[] }

export default function ProjectGrid({ projects }: props) {
  return (
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, idx) => (
        <ProjectListItem
          key={idx}
          slug={project.slug}
          title={project.title}
          summary={project.summary}
        />
      ))}
    </div>
  )
}
