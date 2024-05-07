import HistEventBlock from "../Components/HistEventBlock";
// events is a list of json objects
export default function History({events, }) {
    console.log(events)
    return (<div>
        {events.map((item) => (<HistEventBlock event={item} />))}
    </div>);
}