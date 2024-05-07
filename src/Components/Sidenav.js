import { sidenavData } from "../Data/sidenavData";
import styles from "./Sidenav.module.css"
import { NavLink } from "react-router-dom";

export default function Sidenav() {

    return (
        <div className={styles.sidenav}>
            {sidenavData.map(item => {
                return <NavLink key={item.id}
                                className={({isActive}) => [styles.sideitem, isActive ? styles.active : ""].join(" ")}
                                to={item.link}>
                    {item.icon}
                    <span className={styles.linkText}>{item.text}</span>
                </NavLink>
            })}
        </div>
    )
}