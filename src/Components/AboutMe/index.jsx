import styles from './styles.module.css'
import { TechList } from '../TechList'
import perfil from '../../assets/Frame 1.png'

export const AboutMe = () => {
    return (
        <section class={styles.aboutMe}>
            <div className={styles.aboutMeContainer}>
            <div class={styles.perfilContent}>
                <div class={styles.perfil}>
                    <img class={styles.perfilImg} src={perfil} alt="Perfil" />
                    <p>Hello, my name is Pablo</p>
                </div>
                <div class={styles.perfilDescript}>
                    <h2 class="title1">I <span class="spanAzul">love</span> creating and <span class="spanAzul">developing</span> projects</h2>
                    <p class="headline">Discover here in this enviroment, created especially for you, all my projects and thecnollogies</p>
                </div>
                <div class={styles.seeProjects}>
                    <button class={styles.perfilButton}>See projects</button>
                    <img class={styles.gitIcon} src="../src/assets/Bt-Circle.png" alt="github icon" />
                </div>
                <div class={styles.technologies}>
                    <h1>ola</h1>
                </div>
            </div>
            </div>
            <div>
                <img class={styles.aboutMeImg} src="../src/assets/header-bg.png" alt="Header album" />
            </div>
        </section>
    )
}