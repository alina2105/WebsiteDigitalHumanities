import HistEventBlock from "../Components/HistEventBlock";
import Topnav from "../Components/Topnav";
import styles from "./History.module.css";
import {
    AnchorContext,
    AnchorLink,
    AnchorProvider,
    AnchorSection,
} from "react-anchor-navigation";
// events is a list of json objects
export default function History({fullList, events,}) {
    // FIXME offset does not seem to work
    console.log(styles.anchorNavDiv)
    return (<div>
            <Topnav items={fullList}/>
            <AnchorProvider>
                <div className={styles.anchorNavDiv}>
                    <nav>
                        {events.map((item) => (
                            <li className={styles.anchorNavItem} key={item.id} data-cy={`anchor_link_${item.id}`}>
                                <AnchorLink className={styles.anchorNavLink} href={`#${item.id}`}
                                            activeClassName={styles.anchorNavLinkActive}>
                                    {item.date}
                                </AnchorLink>
                            </li>
                        ))}
                    </nav>
                </div>
                <main className={styles.anchorContent}>
                    {events.map((item) => (
                        <AnchorSection id={item.id} className={styles.anchorSection}>
                            <section data-cy={`anchor_section_${item.id}`}>
                                <HistEventBlock event={item}/>
                            </section>
                        </AnchorSection>
                    ))}
                </main>
            </AnchorProvider>
            <div className={styles.whitespace}></div>
        </div>
    );
}