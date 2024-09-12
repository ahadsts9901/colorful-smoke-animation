import "../App.css"
import { useEffect } from "react";
import { bootstrap } from "./main";

const FluidSimulation = () => {

    useEffect(() => {
        bootstrap()
    }, [])

    return (
        <>
            <canvas id="canvas"></canvas>
            <h1 id="h1">Smoke Simulation</h1>
        </>
    )
}

export default FluidSimulation