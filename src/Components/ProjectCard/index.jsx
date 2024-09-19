import styles from '../ProjectCard/styles.module.css'
import githubIcon from '../../assets/github.png'
import share from '../../assets/share.png'

export const ProjectCard = ({project}) => {
    return (
      <li class={styles.card}>
        <h3 class="title2">{project.name}</h3>
        <div class={styles.Lenguage}>
          <p>Linguagens:</p>
          <p>JavaScript</p>
        </div>
        <p>
          {project.description}
        </p>
        <div class={styles.iconsContainer}>
          <div class={styles.icons}>
            <img src={githubIcon} alt="github icon" />
            <p>Github Code</p>
          </div>
          <div class={styles.icons}>
            <img src={share} alt="share" />
            <p>Aplicação</p>
          </div>
        </div>
      </li>
    );
  };