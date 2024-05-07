import HistEventBlock from "../Components/HistEventBlock";
import Topnav from "../Components/Topnav";
// events is a list of json objects
export default function History({fullList, events, }) {

    return (<div>
        <Topnav items={fullList}/>
        {events.map((item) => (<HistEventBlock event={item} />))}
    </div>);
}