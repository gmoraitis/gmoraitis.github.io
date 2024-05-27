function ProjectsTab({projectsData}) {
  return (
    <div>

        <div>
            {projectsData.map((project, index) => (
            <div className='mb-2' key={index}>
                <h5>
                <a className="link" href={project.href} target="_blank" rel="noopener noreferrer">
                    {project.title}
                </a>
                </h5>
                <p>{project.description}</p>
            </div>
            ))}
    </div>

    </div>
    );
}


export default ProjectsTab;