import styles from '../MyContacts/styles.module.css'
import wpp from '../../assets/ (1).png'
import email from '../../assets/.png'
import linkedin from '../../assets/ (2).png'


export const MyContacts = () => {
    return (
        <div class={styles.contactsContainer}>
          <div class={styles.contacts}>
            <div>
              <button class={styles.contactsButtonWpp}><img src={wpp} alt="Wpp" /></button>
            </div>
            <div class={styles.contactsDescription}>
              <h3 class="title4">My phone</h3>
              <p class="body">
                i'm avaliable for a voice chat, let's about creativity togheter?
              </p>
              <h4>Call now</h4>
            </div>
          </div>
          <div class={styles.contacts}>
            <div>
            <button class={styles.contactsButtonEmail}><img src={email} alt="Email" /></button>
            </div>
            <div class={styles.contactsDescription}>
            <h3 class="title4">My email</h3>
            <p class="body">
              Send me an email reporting feedbacks, suggestions and ideas
            </p>
            <h4>Send email now</h4>
            </div>
          </div>
          <div class={styles.contacts}>
            <div>
            <button class={styles.contactsButtonLinkedin}><img src={linkedin} alt="Linkedin" /></button>
            </div>
            <div class={styles.contactsDescription}>
            <h3 class="title4">My Linkedin</h3>
            <p class="body">
              We can create more constant interactions as well as a sharing
              network
            </p>
            <h4>Go to Telegram now</h4>
            </div>
          </div>
        </div>
    )
}