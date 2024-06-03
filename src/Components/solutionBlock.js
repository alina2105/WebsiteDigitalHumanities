import styles from "./HistEventBlock.module.css";
import {Box, Modal} from "@mui/material";
import React, {useState} from "react";

export default function SolutionBlock({solution,}) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
        <div className={styles.imageContainer}><img src={solution.image} className={styles.image} onClick={handleOpen}/>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box onClick={handleClose}>
                <img src={solution.image} className={styles.imagePopup}/>
            </Box>
        </Modal>
    </div>);
}