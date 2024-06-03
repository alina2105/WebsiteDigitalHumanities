import styles from "./HistEventBlock.module.css";
import {Modal, Box} from '@mui/material';
import React, {useState} from 'react';
// event is a json object
export default function HistEventBlock({event,}) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (<div className={styles.container}>
        <div className={styles.text}>
            <h1>{event.title}</h1>
            <p>{event.text}</p>
        </div>
        <div className={styles.imageContainer}><img src={event.image} className={styles.image} onClick={handleOpen}/></div>
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box onClick={handleClose}>
                <img src={event.image} className={styles.imagePopup}/>
            </Box>
        </Modal>
    </div>);
}