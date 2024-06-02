import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import ConstructionIcon from '@mui/icons-material/Construction';
import QuizIcon from '@mui/icons-material/Quiz';

export const sidenavData = [
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Home",
        link: "/home"
    },
    {
        id: 1,
        icon: <TimelineIcon/>,
        text: "Entstehung",
        link: "/history"
    },
    {
        id: 2,
        icon: <ConstructionIcon/>,
        text: "Lösungsansätze",
        link: "/loesungsansaetze"
    },
    {
        id: 2,
        icon: <QuizIcon/>,
        text: "Quiz",
        link: "/quiz"
    }
]