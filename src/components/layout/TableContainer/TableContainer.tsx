import {PropsWithChildren} from "react";
import styles from "./TableContainer.module.scss"

type TableContainerProps = PropsWithChildren;

const TableContainer = ({children}: TableContainerProps) => {
    return (
        <div className={styles.table_container}>
            {children}
        </div>
    );
}

export default TableContainer;