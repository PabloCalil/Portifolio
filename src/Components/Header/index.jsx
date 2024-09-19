import styles from '../Header/styles.module.css'

export const Header = () => {
    return(
        <header class={styles.mainHeader}>
            <div class={styles.HeaderContent}>
            <h3 class={styles.headerName}>Pablo</h3>
            <div>
                <nav class={styles.headerNav}>
                    <a href="#">Home</a>
                    <a href="#">Projects</a>
                    <a href="#">Contatos</a>
                    <a href="#">Midias digitais</a>
                </nav>
            </div>
            </div>
        </header>
    )
}