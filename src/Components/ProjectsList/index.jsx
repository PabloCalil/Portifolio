import { ProjectCard } from "../ProjectCard"
import { projects } from "../../data/projects"
import styles from './styles.module.css'

export const ProjectList = () => {
    return (
        <ul className={styles.projects}>
            {projects.map(project => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </ul>
    )
}