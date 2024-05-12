import styles from "./HistEventBlock.module.css";
// event is a json object
export default function HistEventBlock({event,}) {
    return (<div className={styles.container}>
        <div className={styles.text}>
            <h1>{event.title}</h1>
            <p>{event.text}</p>
        </div>
        <div className={styles.imageContainer}><img src={event.image} className={styles.image}/></div>
    </div>);
}