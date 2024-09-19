import styles from '../Footer/styles.module.css'
import perfil from '../../assets/Frame 1.png'
import facebook from '../../assets/Bt-Circle-Facebook.png'
import instagram from '../../assets/Bt-Circle-Instagram.png'
import linkedin from '../../assets/Bt-Circle-Linkedin.png'


export const Footer = () => {
    return (
        <footer class={styles.socialMidias}>
            <div class={styles.socialMidiasContent}>
            <div class={styles.socialMidiasLeft}>
                <div>
                    <img class={styles.socialMidiasPerfil} src={perfil} alt="Perfil" />
                </div>
                <div class={styles.socialMidiasDescript}>
                    <h3 class="title3">Thank you</h3>
                    <p class="body">Follow ne ib my social networks and let's talk</p>
                </div>
            </div>
            <div class={styles.socialMidiasRigth}>
                <img class={styles.socialMidiasImg} src={facebook} alt="Facebook" />
                <img class={styles.socialMidiasImg} src={instagram} alt="Instagram" />
                <img class={styles.socialMidiasImg} src={linkedin} alt="Linkedim" />
            </div>
            </div>
        </footer>
    )
}