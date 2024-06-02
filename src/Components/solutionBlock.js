import styles from "./HistEventBlock.module.css";

export default function SolutionBlock({solution,}) {
    console.log(solution);
    return (<div className={styles.container}>
        <div className={styles.text}>
            <h1>{solution.title}</h1>
            <p>{solution.text}</p>
            <h3>Vorteile</h3>
            <ul>
                {solution.advantages.map((item,) => <li>{item}</li>)}
            </ul>
            <h3>Schwierigkeiten</h3>
            <ul>
                {solution.disadvantages.map((item,) => <li>{item}</li>)}
            </ul>
        </div>
        <div className={styles.imageContainer}><img src={solution.image} className={styles.image}/></div>
    </div>);
}