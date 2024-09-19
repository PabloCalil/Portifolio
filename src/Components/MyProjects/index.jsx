import styles from './styles.module.css'
import { ProjectList } from "../ProjectsList"


export const MyProjects = () => {
    return (
        <section class={styles.myProjects}>
            <div class={styles.myProjectsContent}>
                <div class={styles.projectsDescript}>
                    <h3 class="title3">My projects</h3>
                    <p class="body">Projects created at <span class="spanRed">Kenzie Academy</span></p>
                </div>
            <ProjectList />
            </div>
        </section>
    )
}