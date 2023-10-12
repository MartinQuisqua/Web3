import { Context as CounterContext  } from "contexts/countersContext";
import { useContext } from "react";

const RessetButton = () => {
    const { resetCounter } = useContext(CounterContext);
    return (
        <button onClick={resetCounter}>reset score</button>
    )
}

export default RessetButton;