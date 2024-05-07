// event is a json object
export default function HistEventBlock({event, }) {
    console.log(event.image)
    return (<div>
        <h1>{event.title}</h1>
        <p>{event.text}</p>
        {/*<img src={require(String(event.image))} alt={""}/>*/}
        {/*<img src={require("../Images/alija.jpg")} alt={""}/>*/}
        <img src={event.image} />
    </div>);
}