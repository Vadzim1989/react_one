import { useReducer } from "react"

const actions = {
    ADD_APPLE: 'ADD_APPLE',
    SELL_APPLE: 'SELL_APPLE',
    CHANGE_AMOUNT: 'CHANGE_AMOUNT'
};

const initialState = {
    apples: [1,2,3,4,5],
    isSold: false,
    inputAmount: 0
};

const reducer = (state, action) => {
    console.log("REDUCER WORK!", state);
    switch (action.type) {
        case actions.ADD_APPLE:
            const newApplesArrAdd = [...state.apples];

            for (let i = 0; i < +state.inputAmount; i++) {
                newApplesArrAdd.push(newApplesArrAdd.length)
            }

            return {
                ...state,
                apples: newApplesArrAdd,
                isSold: newApplesArrAdd <= 2
            }
        case actions.SELL_APPLE:
            const newApplesArr = state.apples.slice(0, state.apples.length - state.inputAmount);
            return {
                ...state,
                apples: newApplesArr,
                isSold: newApplesArr <= 2
            };
        case actions.CHANGE_AMOUNT:
            return {
                ...state,
                inputAmount: action.payload
            };
        default:
            return state;
    }
}

export const Example = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const sellApple = () => dispatch({type: actions.SELL_APPLE});
    const addApple = () => dispatch({type: actions.ADD_APPLE});
    const inputHandler = ({target: {value}}) => dispatch({type: actions.CHANGE_AMOUNT, payload: value});

    return (<>
        <div>
            Apples count: {state.apples.length}
        </div>
        <div>
            Are apples sold: {String(state.isSold)}
        </div> 
        <div>
            <input value={state.inputAmount} onChange={inputHandler}/>
            <button onClick={addApple}>Add apple</button>
            <button onClick={sellApple}>Sell apple</button>
        </div>
    </>)
}