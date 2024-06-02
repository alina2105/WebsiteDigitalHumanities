import styles from "./Home.module.css";

export default function Home() {
    return (
        <>
            <div className={styles.introductionDiv}>
                <h1 className={styles.introduction}>Die Geschichte des Nahostkonflikts</h1>
                <p className={styles.introduction}>
                    Der Nahostkonflikt ist ein komplexer und langwieriger Streit, der vor allem zwischen Israel und den Palästinensern besteht. Seine Wurzeln reichen bis ins frühe 20. Jahrhundert zurück, als der Zionismus und arabischer Nationalismus aufeinanderprallten. Die Gründung des Staates Israel im Jahr 1948 führte zu mehreren Kriegen und anhaltender Gewalt. Aktuelle Ereignisse, wie erneute Eskalationen in Gaza und Spannungen in Jerusalem, zeigen, dass der Konflikt nach wie vor ungelöst ist und die Region weiterhin destabilisiert.
                </p>
                <p className={styles.introduction}>
                    Diese Webseite soll eine kurze Übersicht über die Geschichte der Gewalt geben und als Ausgangspunkt für weitere Recherchen dienen.
                </p>
            </div>
            <div className={styles.grid}>
                <div className={styles.gridItem1}>
                    <iframe
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        src={"https://www.youtube.com/embed/olqynxGVyAg"}
                        className={styles.content}/>
                </div>
                <div className={styles.gridItem2}></div>
                <div className={styles.gridItem3}></div>
                <div className={styles.gridItem4}></div>
                <div className={styles.gridItem5}>
                    <iframe
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        src={"https://www.youtube.com/embed/UTRG3A2g5RM"}
                        className={styles.content}/>
                </div>
                <div className={styles.gridItem6}></div>
                <div className={styles.gridItem7}></div>
            </div>
        </>
    );
}