import { Context as CounterContext  } from "contexts/countersContext";
import { useContext } from "react";

const GoodButton = () => {
    const { incrementGoodCounter } = useContext(CounterContext);
    return (
        <button onClick={incrementGoodCounter}>increase good</button>
    )
}

export default GoodButton;