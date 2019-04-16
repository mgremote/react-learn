import React, {useState, useEffect} from 'react';

/*
	Side Effects: data fetching, subscriptions, manually changing DOM
	affect other components, can't be done during rendering.

	it serves the same purpose as componentDidMount, componentDidUpdate,
	and componentWillUnmount in react classes. But unified into a single API

	run effect after every render, including first render
	return a function in effect, can clean up.

	React guarantees effects happen after render (DOM has been updated).
 */
 function UseEffect() {
 	const [count, setCount] = useState(0);

 	/* 
	 function passed to useEffect will be different on every render.
	 this will also keep state variable not getting stale.
	*/
 	useEffect(() => {
 		document.title = `You clicked ${count} times`;
 	}, [count]);
 	/*
 	 second argument to useEffect, is for optimizing peformance.
 	 just like comparison in componentDidUpdate.
 	 only re-run effect if state variable `count` changes.
 	 if you pass an empty array [], effects will never re-run.
	*/

 	return(
 		<div>
 			<p>You clicked {count} times</p>
 			<button onClick={() => setCount(count + 1)}>
 				Click
 			</button>
 		</div>
 	);
 }

 export default UseEffect;