import styles from "./MemberSection.module.scss";

type MemberSectionProps = {
    profession: string;
    description: string;
    image_url: string;
    name: string;
}

const MemberSection = (member: MemberSectionProps) => {
    return (
        <div className={styles.member}>
            <div className={styles.member__info}>
                <h2 className={styles.member__title}>{member.profession}</h2>
                <p className={styles.member__description}>{member.description}</p>
            </div>
            <figure className={styles.member__figure}>
                <img className={styles.member__image} src={member.image_url}
                     alt={member.name}/>
                <figcaption className={styles.member__caption}>{member.name}</figcaption>
            </figure>
        </div>
    );
}

export default MemberSection;