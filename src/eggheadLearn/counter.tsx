import { createRef, useRef } from "react";
import { createStore } from "redux";

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

const store = createStore(counter);

const render = () => {
    let pDisplay = document.getElementById('counterValue')
    if (pDisplay) pDisplay.innerText = store.getState().toString()
}

store.subscribe(() => {
    render()
    console.log(store.getState())
})

render() 



function LearnCounter() {
    let pRef = useRef<number >()
    if (!pRef.current) {
        pRef.current = 0
      }

	return (
		<div >
			<p id='counterValue' >{pRef.current}</p>
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

export default LearnCounter;
