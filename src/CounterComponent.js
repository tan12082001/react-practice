import { useDispatch, useSelector } from "react-redux";
import { decrementByCount, decrementCount, incrementByCount, incrementCount } from "./redux/counter/counterSlice";
import { useState } from "react";

const CounterComponent = () => {
    const actionValue = useSelector((state) => state.reduxCounter.value);
    const dispatch = useDispatch();
    const [inputNumber, setInputNumber] = useState(0);

    const handleInputChange = (event) => {
        setInputNumber(Number(event.target.value));
    };

    return (
        <div className="counter-component">
            This Component uses Redux-Store for the State Data.
            <button onClick={() => dispatch(decrementCount())}>Minus</button>
            <button onClick={() => dispatch(incrementCount())}>Plus</button>
            <span>Current value is: {actionValue}</span>
            <label name="input_number" value="Input Number">
                <input type="number" value={inputNumber} onChange={handleInputChange}/> 
            </label>
            <button type="button" onClick={() => dispatch(incrementByCount(inputNumber))}>Add</button>
            <button type="button" onClick={() => dispatch(decrementByCount(inputNumber))}>Sub</button>
            <span>{actionValue}</span>
        </div>
    );
};

export default CounterComponent;