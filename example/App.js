import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Add, Wifi, ArrowRight, Back, CheckedSquare, Close } from '../src/icons/index';

import './app.css';

const App = () => {
	
	return (
		<>
			<Add />
			<Wifi />
			<ArrowRight />
			<Back size="40"/>
			<CheckedSquare />
			<Close fill="red"/>
		</>		
	);
};

export default App;
