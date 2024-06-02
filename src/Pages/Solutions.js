import SolutionBlock from "../Components/solutionBlock";

export default function Solutions({solutions,}) {
    console.log(solutions)
    return <>
        {solutions.map((item) => (
            <SolutionBlock solution={item}/>
        ))}
    </>;
}