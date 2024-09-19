import styles from './styles.module.css'
import {technologies} from '../../data/technologies'

export const TechList = () => {
    return (
        <div className={styles.technologies}>
            {technologies.map(technologies => (
                <div key={technologies.name}>
                    <img className={styles.technologiesIcon} src={technologies.img} alt={technologies.name} />
                </div>
            ))}
        </div>
    )
}