import styles from './ContactsPage.module.scss';
import PageLayout from "src/components/layout/PageLayout/PageLayout.tsx";
import AddressAndContactsScreen from "src/components/AddressAndContactsScreen/AddressAndContactsScreen.tsx";

const ContactsPage = () => {
    return (
        <PageLayout>
            <section className={styles.address_and_contacts_section}>
                <AddressAndContactsScreen />
            </section>
        </PageLayout>
    )
}

export default ContactsPage;