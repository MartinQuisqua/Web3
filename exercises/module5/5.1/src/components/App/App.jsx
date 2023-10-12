import GoodButton from "../Button/goodButton";
import BadButton from "../Button/badButton";
import ResetButton from "../Button/resetButton";
import NeutralCounter from "../Button/neutralButton";
import { Context as CounterContext } from "contexts/countersContext";
import { useContext } from "react";

const App = () => {
    const { goodCounter, badCounter, neutralCounter } = useContext(CounterContext);

    return (
        <div>
            <ul>
                <li>
                Good: {goodCounter} <GoodButton /> 
                </li>
                <li>
                Ok: {neutralCounter} <NeutralCounter />
                </li>
                <li>
                Bad: {badCounter} <BadButton />
                </li>
                <li>
                <ResetButton />
                </li>
            </ul>
        </div>
    )
}

export default App;
