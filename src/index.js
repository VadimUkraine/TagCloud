import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import TagWrapper from './components/TagWrapper'




const router = (
		<Router >
			<Switch>
				<Route exact path="/" component={App}></Route>
				<Route path="/:id" component={TagWrapper}></Route>
			</Switch>
		</Router>
)


render(router, document.getElementById('container'));