import React from "react";
import Digit from './digits';


//create your first component
const Home = () => {
	let [counter, setCounter] = React.useState(0)
	React.useEffect(() => {
		setInterval(() => {
			setCounter(counter++)
			console.log(counter);

		},1000);
	},[]) 

return (
		<div className="container d-flex">
			<Digit cool = { Math.floor(counter / 100000) }/>
			<Digit cool = { Math.floor(counter / 10000) }/>
			<Digit cool = { Math.floor(counter / 1000) }/>
			<Digit cool = { Math.floor(counter / 100) }/>
			<Digit cool = { Math.floor(counter / 10) }/>
			<Digit cool = { Math.floor(counter / 1) }/>
		</div>
			
	);
};
	


export default Home;
