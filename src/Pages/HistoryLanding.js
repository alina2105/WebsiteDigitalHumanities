import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import styles from "../Pages/HistoryLanding.module.css";

export default function HistoryLanding({fullList,}) {
    const navigate = useNavigate();

    function handleClick(link) {
        navigate(link);
    }

    return (<div className={styles.mainDiv}>
        <h1>Entstehungsgeschichte</h1>
        <p>Klicke auf die Karten, um nähere Informationen über die verschiedenen Etappen der Geschichte zu erhalten.</p>
        <Grid container spacing={3}>
            {fullList.map((item) => (
                <Grid item xs={4}>
                    <Card sx={{maxWidth: 345}}>
                        <CardActionArea onClick={() => handleClick(item.link)}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}

        </Grid>
    </div>);
};