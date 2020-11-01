import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './components/assets/bootstrap/css/bootstrap.css';
import Navigation from './components/Navigation';
import Graphic from './components/Graphic';
import Home from './components/Home';
import Web from './components/Web';
import Footer from './components/Footer';


function App() {
	return (
		<div className="App">
			<Router>
			<Navigation />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/graphic-design">
						<Graphic />
					</Route>
					<Route path="/web-design">
						<Web />
					</Route>
				</Switch>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;
