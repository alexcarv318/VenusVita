import styles from './OurTeam.module.scss';
import MemberSection from "src/components/MemberSection/MemberSection.tsx";;

const OurTeam = () => {
    return (
        <div className={styles.our_team}>
            <MemberSection
                profession={"Косметолог"}
                description={"Дипломований косметолог із багаторічним досвідом. Постійно підвищує свою кваліфікацію, щоб запропонувати найсучасніші методи та процедури."}
                image_url={"/assets/images/team/nataliya.png"}
                name={"Вергун Наталія Михайлівна"}
            />

            <MemberSection
                profession={"Естетист-косметолог, візажист"}
                description={"Професійний естетист-косметолог з досвідом роботи в індустрії краси."}
                image_url={"/assets/images/team/nastya.png"}
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