import {useState} from 'react';

function Switch() {
    const [isOn, setIsOn] = useState<string>("Off");

	return (
		<div  className={`Switch ${isOn}`}>
			<h3>Switch</h3>
			<p>{isOn}</p>
			<button type="button" onClick={() => setIsOn("On")}>On</button>
			<button type="button" onClick={() => setIsOn("Off")}>Off</button>
		</div>
	);
}

export default Switch;