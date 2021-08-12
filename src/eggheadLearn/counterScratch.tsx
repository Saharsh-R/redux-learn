// import { createStore } from "redux";


const counter = (state = 0, action: { type: "INCREMENT" | "DECREMENT" }) => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;

		default:
			return state;
	}
};

const createStore  = (reducer: (state: any, action: any) => any) => {
    let state: any;
    let listeners: any[] = []

    const getState  = () => state;

    const dispatch = (action: any) => {
        state = reducer(state, action)
        listeners.forEach(l => l())

    }

    const subscribe = (listener: any) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter(l => l !== listener)
        }
    }

    dispatch({})

    return {getState, dispatch, subscribe}


}


const store = createStore(counter);
let removeConsoleLogListener = store.subscribe(console.log)
removeConsoleLogListener()



const render = () => {
    let pDisplay = document.getElementById('counterValue1')
    if (pDisplay) pDisplay.innerText = store.getState().toString()
}

store.subscribe(() => {
    render()
    console.log(store.getState())
})

render()



function LearnCounterScratch() {
	return (
		<div>
			<p id='counterValue1'></p>
			<button
				onClick={() => {
					store.dispatch({ type: "INCREMENT" });
				}}
			>
				Increase
			</button>
			<button
				onClick={() => {
					store.dispatch({ type: "DECREMENT" });
				}}
			>
				Decrease
			</button>
		</div>
	);
}

export default LearnCounterScratch;
