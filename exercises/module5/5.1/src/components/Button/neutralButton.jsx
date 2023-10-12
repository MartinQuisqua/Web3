import { Context as CounterContext  } from "contexts/countersContext";
import { useContext } from "react";

const NeutralCounter = () => {
    const { incrementNeutralCounter } = useContext(CounterContext);
    return (
        <button onClick={incrementNeutralCounter}> increase Ok</button>
    )
}

export default NeutralCounter;