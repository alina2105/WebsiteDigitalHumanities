import SolutionBlock from "../Components/solutionBlock";

export default function Solutions({solutions,}) {
    return <>
        {solutions.map((item) => (
            <SolutionBlock solution={item}/>
        ))}
    </>;
}