import styles from '../Contacts/styles.module.css'
import {MyContacts} from '../MyContacts'

export const Contacts = () => {
  return (
    <section class={styles.contact}>
      <div class={styles.contactsContent}>
        <div class={styles.contactDescript}>
          <h2 class="title2" >
            Let's set up a conversation and{" "}
            <span class="spanAzul">develop our criativity</span> together?
          </h2>
          <p>
            Advertise your brand organically within Dribbble's design
            inspiration feed.
          </p>
        </div>
        <MyContacts />
      </div>
    </section>
  );
};
