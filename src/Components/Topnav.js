import {NavLink} from "react-router-dom";
import styles from "./Topnav.module.css";

export default function Topnav({items, }) {
    return (<div className={styles.topnav}>
        {items.map(item => {
            return <NavLink to={item.link}
            className={({isActive}) => isActive ? styles.activeItem : styles.topnavItem}
            >
                <span>{item.title}</span>
            </NavLink>;
        })}
    </div>);
}