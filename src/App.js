import React from 'react';
import { Appbar } from 'muicss/react';
import { Dashboard } from './components/Dashboard';
import { Uploader } from './components/Uploader'
import {Solution} from './components/Solution'
import { Router } from '@reach/router';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<Appbar>
				<table width="100%">
					<tbody>
						<tr>
							<td>
								<img className="App-logo" src={logo} alt="" />
							</td>
						</tr>
					</tbody>
				</table>
			</Appbar>
			<Router>
        <Dashboard path="/dashboard" />
        <Uploader path='/uploader/*' />
        <Solution path='/solution' />
			</Router>
		</div>
	);
}

export default App;
