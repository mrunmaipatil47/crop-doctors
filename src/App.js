import React from 'react';
import { Appbar } from 'muicss/react';
import { Dashboard } from './components/Dashboard';
import { Uploader } from './components/Uploader'
// import { Solution } from './components/Solution'
import { Router } from '@reach/router';
import logo from './logo.svg';
import './App.css';
import { Solution } from './components/Solution';

import {
	createMemorySource,
	createHistory,
	LocationProvider
} from "@reach/router"

let source = createMemorySource("/")
let history = createHistory(source)

function App() {
	return (
		<div className="App">
			<Appbar>
				<table width="100%">
					<tbody>
						<tr>
							<td className="mui--appbar-height" style={ { textAlign: "center" } }>
								<img className="App-logo" src={ logo } alt="" />
							</td>
						</tr>
					</tbody>
				</table>
			</Appbar>
			<LocationProvider history={ history }>
				<Router>
					<Dashboard path="/" />
					<Uploader path='/uploader/:id/:type' />
					<Solution path='/solution/:id/:file' />
				</Router>
			</LocationProvider>
		</div>
	);
}

export default App;
