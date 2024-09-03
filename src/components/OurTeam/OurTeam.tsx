import styles from './OurTeam.module.scss';
import MemberSection from "src/components/MemberSection/MemberSection.tsx";

const OurTeam = () => {
    return (
        <div className={styles.our_team}>
            <MemberSection
                profession={"Косметолог"}
                description={"Понад 15 років працює в сфері косметології, краси та молодості."}
                image_url={"src/assets/images/team/nataliya.png"}
                name={"Вергун Наталія Михайлівна"}
            />

            <MemberSection
                profession={"Естетист-косметолог, візажист"}
                description={""}
                image_url={"src/assets/images/team/nastya.png"}
                name={"Красноярова Анастасія Олександрівна"}
            />

            {/*<MemberSection*/}
            {/*    profession={"Косметолог"}*/}
            {/*    description={}*/}
            {/*    image_url={}*/}
            {/*    name={}*/}
            {/*/>*/}
        </div>
    )
}

export default OurTeam;